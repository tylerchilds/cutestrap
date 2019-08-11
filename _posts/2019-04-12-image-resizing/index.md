---
layout: blog/post
title:  "Image Resizing"
date:   2019-04-12 00:01:00 -0800
categories: features
permalink: /posts/image-resizing
description: >
  One of the things that really grinds my gears is trying to upload an image and then being told it needs to be smaller.
  This post covers how a website can dynamically resize an image to the size they need and also lightly covers
  Promises and asynchronous code.
author: tyler
demo:
  height: 400px
  key: demo
  github_path: /examples/image-resizer
  tabs:
    - url: /examples/image-resizer/
      title: Demo
      id: demo
    - url: /examples/image-resizer/image-resizer.js
      title: image-resizer.js
      id: js-source
    - url: /examples/image-resizer/demo.js
      title: demo.js
      id: demo-source
---

## User Woes of Image Uploading

You've signed up on a new website and you are just crusing through filling out all your information. Then it comes time to upload a portrait of yourself.

You meticulously comb through all your pictures to find the best one and you finally try to upload it.
"Image must be smaller than..." frustrated, you either give up or if you care, then you figure out some way to shrink the image.

What if the website could resize the image for you and you never had to see an error that causes more work?

## Let's Do Some Research

Any time we want to tackle a problem with some code, there's some work we need to do up front: research.

This is a lot of back and forth with a search engine. Many blog posts will explain everything and the process it takes to get from point A to point B.

That's tedious for me and likely boring for you, so for this example, let's get hands on. If I wasn't here, you'd need to do this research yourself. To compromise, I've left a trail of bread crumbs that you could use to resize an image using JavaScript.

* {% include components/search.html query="how to resize an image in javascript" %}
* {% include components/search.html query="what is canvas javascript" %}
* {% include components/search.html query="how to resize an image with canvas" %}
* {% include components/search.html query="how to convert canvas to an image" %}
* {% include components/search.html query="what is a dataURL" %}
* {% include components/search.html query="what is a blob" %}
* {% include components/search.html query="how to read an image file javascript" %}
* {% include components/search.html query="what is a File interface javascript" %}

A lot of writing software is looking stuff up. 90% of that is figuring out what stuff to look up, so some of those search terms are valuable keywords to keep in mind when doing work like this. They will also help you if you decide to expand on the code I've written in the example below.

### Example

For this demo, you can choose an image to resize. It'll show the original image next to the resized image. I've set the resized image's maximum width or height to be 480px and it'll try to be the same `MIME type` as the original, but `canvas` has some limitations.

{% include components/browser.html config=page.demo %}

Try to run the code locally on your computer and play with the code. A few suggestions to try out:

* Change the maximum dimension
* Resize an image using a URL
* Add a way to specify the image dimension using an `<input type="text" />` element

### Explanation

For this image resizer, we wrote it as a module that exports three functions:

* `loadFile(file)`: takes a `File` as an argument and returns it as a `dataUrl`
* `resizeImage(imageSource, maxDimensionSize)`: takes an `imageSource` of either a `dataURL` or a path to an image `URL` and returns an object with both a `blob` and `dataURL` version of the resized image. `maxDimensionSize` will be either the maximum width or height of the resized image, based on whichever is larger.
* `getResizedImageFromFile(file, maxDimensionSize)`: takes a `File` and `maxDimensionSize` and composes `loadFile` and `resizeImage`.

All three of these functions are asynchronous, which means the code can run in parallel with other code. It's worth noting because there is some nuance with asynchronous vs synchronous code.

### Going Beyond

In our code, we've used quite a few Promises. They can be a whole topic on their own, but at their core, Promises are one way of handling asyncronous code.

Imagine you want to hang out with your best friend. You say, "Dinner tonight?" and they respond, "I promise to get back to you." You continue to go about your day as usual, _as if we can do that while waiting for a text_, until they respond. They can either accept and then you add dinner to your calendar or they reject it and you figure out other plans.

You might also notice `async` and `await` in there. `async` is a way of saying, "This function can run in parallel" and `await` can only be used in an `async` function. When you use `await`, you're telling the code to not continue until until you get a response back, which is why it needs to run in an `async`, parallel executing function.

To incorporate this with the first example, you text your friend, "Dinner tonight?" and then stare at your phone for 2 hours until they respond back to you. The day itself continued to move along, but you were just anxiously awaiting their response and incapable of doing anything else, just like me whenever I send a text.

### Wrap Up

At this point, hopefully you've got a better understanding of asyncronous code with Promises, `async` and `await`. The image resizing code was a practical excuse to get you introduced to a complex topic. I find a lot of code examples end up being contrived and I ask, "But when would I actually use that?" _If you have a practical use case for Function Generators, please let me know._

At a minimum, at least you now have some code you can send to some website administrator the next time you get an "Image is too large" error when you're just trying to post a selfie.
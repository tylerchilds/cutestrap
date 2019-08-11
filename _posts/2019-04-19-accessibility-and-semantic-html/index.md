---
layout: blog/post
title:  "Accessibility and Semantic HTML"
date:   2019-04-19 00:01:00 -0800
categories: basics
permalink: /posts/accessibility-and-semantic-html
description: >
  Accessibility is about making the content on your webpage to be
  enjoyed by as many people as possible. This post teaches
  some basics of accessibility using semantic HTML, which is the core
  of an accessible web page.
author: tyler
demo:
  height: 500px
  key: demo
  github_path: /examples/accessibility-and-semantic-html/
  tabs:
    - url: /examples/accessibility-and-semantic-html/
      title: Demo
      id: demo
---

## Why you should care about Accessiblity
Making a webpage accessible means building an inclusive experience for your visitors. This means
your site can be navigated by people that have any level of blindness, motor disablities and more.
Taking into consideration various abilities of your users makes you a caring and empathetic engineer.

If just being kind and accommodating isn't enough to persuade your client or your boss for the extra effort and care, you can politely loop in the legal requirements from the Americans with Disabilities Act (ADA). The same act that requires wheelchair ramps, elevators and handicap parking spaces also has implications for websites.

Accessibility for the web requires diligence and thought, but once you've formed a habit of keeping accessibility in mind, you will find it comes more naturally.

### How to structure accessible content

The foundation of web, and web accessibility, is about how you structure your HTML markup and your content. A visitor with sight will read your webpage from top to bottom and left to right, _or right to left for certain languages_, as it is **presented**. A visitor using a screen reader to interact with your webpage, will have the contents of your webpage read aloud to them as it is **structured**. These might sound like the same thing, but there's a key difference in presentation and structure.

Imagine a webpage. At the top, there's title on the left and navigation on the right. Below that, there are two columns, a sidebar on the left with the main content on the right. Finally there's a footer at the bottom of the page.

Presentationally, this webpage looks exactly as I've described with that layout, which is controlled by CSS.

Structurally, all of the content flows from top to bottom. So an accessible structure of the above will be header, title, navigation, main content, sidebar, footer.

## What is Semantic HTML?

HTML is markup that is used to structure content. Semantic HTML is markup that provides additional context to how content is structured.

With all programming, there are many different ways to accomplish the same task. It's important to consider the many different cases for how your code will be used. Semantic HTML does not interfere with structuring your content, but it does provide an additional layer of context that helps both screen readers and anyone reading or editing HTML to better understand the content it is describing.

For example, any webpage could be built using exclusively `<div>` tags inside of the `<body>`. However, this doesn't have any semantic meaning to describe what the content actually is or the purpose it serves.

### HTML Tags

There are many different HTML tags, but to narrow down to a large handful, these are some of the most common ones that you'll come across.

#### Layout related tags
* `<header>`: Describes header content, such as a logo and some navigation at the top of your page.
* `<nav>`: Navigational content, like links to other webpages on your website.
* `<main>`: The main content section of your page. There should be only a single `main` tag on your webpage.
* `<aside>`: An aside of some content, most typically seen as a sidebar in the wild.
* `<section>`: Section describes a grouping of related content.
* `<footer>`: Describes footer content, such as copyright or anything else at the bottom of your page.

#### Content related tags
* `<h1>` - `<h6>`: There are six different types of heading levels with `h1` being the most important and `h6` being the least. This helps visitors quickly skim, scan, and skip content.
* `<p>`: Paragraph. Exactly like it sounds, it's a paragraph of content on your page.
* `<a>`: Anchor, this is typically used as a link to another page. To do this, you set the `href` attribute with a URL.
* `<ul>`: Unordered list, a list with bullet points.
* `<ol>`: Orderered list, a list with numbers.
* `<li>`: List item, these are used inside of `ul` or `ol` tags.

#### Non-semantic tags
* `<div>`: A division, or section, of your page. This is a block level element, so think of this like a generic chunk of content.
* `<span>`: An span, or slice, of content on your page. This is an inline element, so think of using this inside of a paragraph.

### Example

This demo is modeled after the example above, with the header, navigation, two columns... etc.

{% include components/browser.html config=page.demo %}

### Going Beyond

We've really just scratched the surface with Accessibility here. Now's a fun time to note that there's a slang term for Accessibility: **A11y**. There are 13 letters in the word accessibility, with 11 of them between the first and last letters, A and Y, hence A11y.

It's a populer shorthand for long terms among software engineers. A couple other more well-known examples are Internationalization as **I18n** and Localization as **L10n**. You don't need to know about either of those right now, but I'm mentioning them so you can be less intimidated if you come across them on your own.

We covered a lot in this post, so we won't far beyond, but please do some extra searches on your own. This is a good query to start with: {% include components/search.html query="introduction to web accessibility" %}.

## Wrap Up

By now you should have some basic knowledge of accessibility, its importance, and how Semantic HTML enhances the structure of an HTML Document. Also, hopefully you've increased the arsenal of HTML tags you can use on webpages you're building.
---
layout: blog/post
title:  "The Perfect Button"
date:   2019-04-03 00:01:00 -0800
categories: features
permalink: /posts/the-perfect-button
description: >
  If you've ever worked in a shared codebase with more than a handful of
  engineers, you've probably come across at least a few buttons that look the same
  but are very different once you get to know them. The Perfect Button will help solve
  or help you prevent this problem in a few quick lines of CSS.
author: tyler
demo:
  height: 400px
  key: demo
  github_path: /examples/the-perfect-button
  tabs:
    - url: /examples/the-perfect-button/
      title: Demo
      id: demo
    - url: /examples/the-perfect-button/the-perfect-button.css
      title: CSS
      id: css-source
    - url: /examples/the-perfect-button/variations.html
      title: Variations
      id: variations
---

## The Lifecycle of Styling a Button

Your design calls for a button. The copy will always be short, they say. Just a single word or two, they say. And maybe it is.
But then you translate it and it definitely isn't.

And then there's a variation with a border. So you add one, but then the alignment of the one with the border is off from the one without.
And you need a big one, a little one, and another like a link.

Defeated, you reach for a library or a framework that has buttons included.  
_Next time, steal this code I'm about to give you for free instead._

## Features

Let's break down exactly what our perfect button is going to need to do.

* Allow vertically centered copy
* Potentially wrap multiple lines with normal line-height
* Variant with a border
* Variant as a link
* Consistent height between variations
* Animated hover/focus states

### Example

{% include components/browser.html config=page.demo %}

### Explanation

I won't touch on all of the CSS directly used for this button, but there are a few key players worth calling out on this Dream Team of a ruleset.

* `box-sizing: border-box;`: When working with designers this is helpful in maintaining a consistent design language. Designers will expect a button to be a certain height that matches their design. This allows padding and border thickness to get wrapped up into a single value.
* `min-height`: This is the minimum height of the button, which matches what our design has exactly.
* `display: inline-flex;`: When setting a link to be a button and specifying a height and width greater than the size of the text, we need to center the text horizontally and vertically. Without this, the text is aligned in the top left corner.
* `border`: The secret to having a consistent height between a normal and an outlined button variant is to always have a border. This enables us to side-step math and tedious to update styles later. When we don't want a border to display, we can just set `border-color: transparent;` and maintain the spacing of it.

### Going Beyond

We're using **CSS Custom Properties** to keep the button variations maintainable. Using different classes for the variations enables us to have a single location to update our **CSS variables** for all of the different button states, like `:hover` and `:focus`, as well as link states for when our button is actually a hyperlink, like `:visited`, `:hover`, and `:active`.

With CSS Variables, we're able to declare our default values in our main ruleset for our button. By adding rulesets for the different variations and overriding the variables, we can leverage the `var()` declarations inside rulesets that are lower in the **Cascade**. This works because Custom Properties in `var()` resolve at computed-value time.

Without CSS Variables, we'd have to create additional selectors for each of these states and set their values. These immediately makes our CSS more challenging to follow and to maintain.

### Wrap Up

It's worth mentioning a potential downside about CSS Custom Properties: They don't work in Internet Explorer.

The good news is that all of the other CSS has good browser support, if you actually want to use this button. You can get more familiar with the code by refactoring to support legacy browsers. You can add vendor prefixes on the flexbox properties to support down to IE10.
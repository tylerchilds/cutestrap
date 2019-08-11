---
layout: blog/post
title:  "Web Anatomy"
date:   2019-03-19 00:01:00 -0800
categories: basics
permalink: /posts/web-anatomy
featured: true
description: >
  Every webpage is made up primarily of three technologies:
  Hypertext Markup Language (HTML), Cascading Style Sheets (CSS)
  and JavaScript (JS). When they're all combined they produce amazing user experiences.
author: tyler
demo:
  height: 500px
  key: demo
  github_path: /examples/web-anatomy
  tabs:
    - url: /examples/web-anatomy/
      title: Demo
      id: demo
    # - url: /examples/web-anatomy/index.html
    #   title: HTML
    #   id: html-source
    #   base_path_key: github
---

This post assumes you've got a web browser, a text editor, and can create an HTML Document. If that doesn't make sense, no worries, just go and check out the post titled [Hello World](/posts/hello-world).

## Overview
Every webpage is made up primarily of three technologies: **Hypertext Markup Language** (HTML), **Cascading Style Sheets** (CSS) and **JavaScript** (JS). When they're all combined they produce amazing user experiences.

### Hypertext Markup Language
HTML is the structure of the content of your webpage and also includes your CSS and JavaScript, whether they are internal or external files. HTML **tags** can have various **attributes**, which can be used to select elements with CSS and can be manipulated by JavaScript.

HTML is also a main part of **Accessibility**, which essentially is how people with different abilities interact with the web. For example, high quality HTML is able to be bring value to someone with a visual impairment via a screen reader, which will read the content aloud and allow them to navigate effectively.

### Cascading Style Sheets
CSS drives all of the presentation and layout of a webpage; this includes colors, backgrounds, fonts, and grids. Using attributes on an HTML tag like **class** or **id** will allow you to find HTML **elements** with **selectors**  and apply styles to them using **properties** and **values**. A selector used with properties and values are called a **CSS rule-set**.

CSS can affect your HTML in three different ways:

* **Inline Styles**: HTML tags can use the style attribute with CSS properties and values, no selector is needed since the styles are applied directly to the element with a style attribute.
* **Internal Style Sheet**: HTML `<style>` tags can surround CSS rule-sets inside an HTML Document.
* **External Style Sheet**: HTML can import  a .css file using the `<link />` tag. This is the most common way to use CSS as styles in separate file are more reusable.

### JavaScript
JavaScript is used to add interactivity to a webpage, which can be as simple as validating an email address or as complex as an entire web application. If you're brand new to programming, here's a quick crash course on some basic concepts:

* **Variable**: Any value you want to store and use later in your code. An example of two variables could be the name and age of a user.
* **Control Statement**: This determines whether certain code will run. E.g. If user's age is over 18, you can show them different content.
* **Function**: A sequence of code that can be used to organize and encapsulate your code and also allows for reusability. E.g. Everytime a user logs in you can show a message that will greet them by name, "Welcome back, John!"

The two most common concepts with JavaScript on a webpage are Event Listeners and Event Handlers. Event Listeners are like spies you've hired to let you know when something happens on your webpage. You can tell the spies to watch for when someone clicks a button and to let you know when they do. An Event Handler is a function that you want to run when they let you know someone clicked a button.

## Example
To tie HTML, CSS and JavaScript together, let's use an example of a counter. This is just some sample code that we can use to add 1 or subtract 1 to get a value between 0 and 10 (inclusive). 

Let's say this is for a client. 

_A bouncer for the world's smallest club with a max occupancy of 10 hired you to build an app so they can keep track of everyone in the club._ We'll need to make sure we never have a negative number of people in the club and we definitely can't have more than 10 otherwise the fire marshall will shut the club down.

{% include components/browser.html config=page.demo %}

## Going Beyond
When an HTML file is parsed by a browser, it's represented under the hood using the **Document Object Model** (DOM).The DOM is what CSS and JavaScript actually interface with when styling or manipulating your webpage. You don't need to know much about it, but it might be useful when learning to know that HTML Elements become DOM Nodes, so your JavaScript is actually interacting with these nodes.

In computer science terms, the DOM is described as a **Tree** because literal trees have branches and branches can have branches. For me, it's a little easier to think of each node as a literal box. A box can contain more boxes, be an empty box, or contain anything really. If you've organized and labeled your boxes, it's pretty easy to locate exactly what you're looking for and reorganize if needed.

The other main thing worth knowing is that the DOM has a JavaScript API, **Application Programming Interface**, that you can use to manipulate the DOM. An API is a collection of functions you can run to interact with something. In this case to interact with the DOM. APIs can either be very formal, well documented and robust or it can be something you threw together in 10 seconds and told a friend about on a napkin. The DOM APIs are more formal with a ton of **documentation**.

If you've never looked at documentation before, it can be intimidating. My recommendation is to never read it like a book. If there's a quick start or get started page, read that and get familiar with the basics of what the API can do and then start coding with it as soon as possible. As you work, you'll need to look stuff up and the rest of will be great reference material. With large APIs, it's likely that you'll only ever need a small subset of what the API can do.

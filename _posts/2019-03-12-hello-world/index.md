---
layout: blog/post
title:  "Hello World"
date:   2019-03-12 00:01:00 -0800
categories: basics
permalink: /posts/hello-world
description: >
  Hello World is a common way programmers learn a new language.
  If you're brand new to web development or coding in general, this post is
  a straight to the point introduction.
author: tyler
demo:
  height: 300px
  key: demo
  github_path: /examples/hello-world
  tabs:
    - url: /examples/hello-world/
      title: Hello World
      id: demo
    # - url: /examples/hello-world/index.html
    #   title: HTML
    #   id: html-source
    #   base_path_key: github
---

To get started with web development, all you need is a web browser and a text editor. You're using a web browser right now to read this. If you're not using the latest version of Firefox, Chrome, Safari or Edge, I recommend downloading or updating to one of them. Personally, I prefer using Firefox or Chrome.

For a text editor, you'll need something that can work with plain text files. If you're not sure what that means, that's okay. You can just install Sublime Text or any of the others listed on the [Resources page](/resources). If you want to research and find one for yourself, you can search something like, {% include components/search.html query="best plain text editor" %}.

Once you've got your browser and your text editor installed and opened, go ahead and continue.

## Getting Started
**HTML** is an acronym for Hypertext Markup Language. You don't really need to know that though; it won't be on the test. What you do need to know is that HTML is the backbone of the web and dictates how content is structured. With HTML alone, you can make a document with images and descriptions of all of your cats to share with your friends.

HTML is comprised of **Tags** which are used to create **Elements**. The simplest and clearest tag, would be the paragraph tag: `<p>`. An opening tag and a closing tag are the start and end of an end of an element. The stuff in between the tag is content. So a full paragraph element will be:
`<p>Hello World</p>`.

Every HTML Document has the same structure:

* `<!doctype html>`: A document type declaration. This tells the browser this file should be rendered as HTML
* `<html>`: The first tag is used to create an element with the rest of your markup.
    * `<head>`: Useful for metadata and helps with setting up your document.
    * `<body>`:  Contains everything you want to display, specifically your content.

To create an HTML Document, you create a file with a `.html` extension with that declaration and tags.

### Example
Using your text editor, create a new file called *helloworld.html*.

In that file, enter the following HTML code:

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
   &lt;title&gt;Hello World&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;p&gt;Hello World&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>

Then open it in your web browser and it'll look something like this:

{% include components/browser.html config=page.demo %}

If you double click an HTML file in a folder, it should open with your default browser. If that doesn't work or you want to try it with a different browser, right click the file and use "Open with" to select the browser you'd like to use.

**WOW!** [You're an engineer!](/posts/you-are-an-engineer) I know it's not much to look at, but that's your first program. Every software engineer starts with Hello World in any language.

### Going Beyond
You can view the source of any webpage by adding view-source to the URL (e.g. view-source:https://bytesize.dev). You can also right-click and select something like "View Page Source". To view the source of my demos, you can right-click the demo and select "View Frame Source".

Your browser should also have advanced developer tools that let you interact with the source code of a webpage. This is an invaluable tool that web developers use. It helps with debugging code, tinkering with styles, tracking network requests and general performance. 

You don't need to know how to do any of that right now though. Just getting it open and poking around is a success. You can't break anything when you're using the developer tools, so feel free to click around, explore and tinker. If it looks like something is broken, just reload the page and everything is reset!

If you're not seeing how to view the page source or open dev tools, try searching for it including your browser name, like this:

* {% include components/search.html query="View Page Source Safari" %}
* {% include components/search.html query="Open Developer Tools Edge" %}
* {% include components/search.html query="View Frame Source Firefox" %}

## Wrap Up
At this point, you should now be able to create HTML Documents and view them in your web browser. HTML Documents are portable and you can email them to a friend so they can view them. If you store them on a server, you can share the link so anyone can see them.

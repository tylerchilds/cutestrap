---
layout: page
title: Customizations
permalink: /customizations/
css: customizations.css
js: customizations.js
---

To demonstrate the power of Cutestrap and also provide custom out-of-the-box
examples, you can use this form below to customize layout, themes, etc.

You can copy and paste the code below to scaffold your project, but please
replace the hotlinks with your own Cutestrap files.


### Options

<form id="customization-form">
  <div class="grid -medium" style="--columns: 2;">
    <label class="field">
      <select id="theme">
        <option selected="selected" value="default">
          Default
        </option>
        <option value="dark">Dark</option>
        <option value="legalpad">Legal Pad</option>
      </select>
      <span class="label" for="select">Theme</span>
    </label>
    <label class="field">
      <select id="layout">
        <option selected="selected" value="none">
          None
        </option>
        <option value="landing">Landing</option>
        <option value="sidebar">Sidebar</option>
      </select>
      <span class="label" for="select">Layout</span>
    </label>
    <label class="field">
      <select id="rhythm">
        <option value="1.5rem">1.5rem</option>
        <option value="1.6rem">1.6rem</option>
        <option value="1.7rem">1.7rem</option>
        <option value="1.8rem">1.8rem</option>
        <option value="1.9rem">1.9rem</option>
        <option selected="selected" value="2rem">
          2rem
        </option>
        <option value="2.1rem">2.1rem</option>
        <option value="2.2rem">2.2rem</option>
        <option value="2.3rem">2.3rem</option>
        <option value="2.4rem">2.4rem</option>
        <option value="2.5rem">2.5rem</option>
      </select>
      <span class="label" for="select">Rhythm</span>
    </label>
    <label class="field">
      <select id="line-height">
        <option value="1">1</option>
        <option value="1.1">1.1</option>
        <option value="1.2">1.2</option>
        <option value="1.3">1.3</option>
        <option selected="selected" value="1.4">
          1.4 
        </option>
        <option value="1.5">1.5</option>
        <option value="1.6">1.6</option>
        <option value="1.7">1.7</option>
        <option value="1.8">1.8</option>
        <option value="1.9">1.9</option>
        <option value="2">2</option>
      </select>
      <span class="label" for="select">Line Height</span>
    </label>
  </div>
  <label class="field">
    <input type="checkbox" id="responsive" />
    <span class="label">Responsive Rhythm</span>
  </label>
</form>

### CSS Customizations

<pre><xmp id="css-sourcecode"></xmp></pre>

### Demo

<iframe id="customizer-demo"></iframe>

### HTML Boilerplate

<pre><xmp id="boilerplate-sourcecode"></xmp></pre>

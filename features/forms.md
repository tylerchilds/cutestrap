---
layout: page
title: Forms
permalink: /features/forms
---

## Overview

Cutestrap's forms are very opinionated, so they aren't a perfect match for 
everything you might need from a form. But the one thing they excel at is
their consistent convention that lets you build quickly while looking sleek at
the same time.

### The `.field` Class

This is the silver bullet for getting the consistency in how we create our form
controls and provides the flexibility needed to support the various form controls.

You don't need to know how it works under the hood, just that it will be your
loyal sidekick when fighting form fatigue. The basic syntax is wrap your form
control and then your label and you're done!

```
<label class="field">
  <input type="text" />
  <span class="label">Your Name</span>
</label>
```

For a more comprehsive look into each form control, look at the
[Forms Documentation](https://docs.cutestrap.com/section-4.html).

---

## Examples

To give you a launching point for your own forms, we've created a couple common
example forms.

### Sign In Form

<p class="mb-zero">
    Simple, clean, sets a max-width manually to override the <code>.wrapper</code> max-width, but
keeps the padding.
</p>

<form class="wrapper" style="max-width: 25rem">
    <h4 class="mt-zero">Sign In</h4>
    <label class="field">
      <input type="text" value="leroyjenkins"/>
      <span class="label">Username</span>
    </label>
    <label class="field">
      <input type="password" value="password"/>
      <span class="label">Password</span>
    </label>
    <label class="field">
      <input type="checkbox" />
      <span class="label">Remember Me</span>
    </label>
    <input type="submit" class="button -block" value="Sign In" />
</form>

```
<form class="wrapper" style="max-width: 25rem">
    <h4>Sign In</h4>
    <label class="field">
      <input type="text" value="leroyjenkins"/>
      <span class="label">Username</span>
    </label>

    <label class="field">
      <input type="password" value="password"/>
      <span class="label">Password</span>
    </label>

    <label class="field">
      <input type="checkbox" />
      <span class="label">Remember Me</span>
    </label>
    <input type="submit" class="button -block" value="Sign In" />
</form>
```

---

### Credit Card Form

<p class="mb-zero">
    This form shows off <code>.wrapper.-thin</code> and the <code>--columns</code> custom property
that is used with the grid system. The grid also stacks on smaller screen widths.
</p>

<form class="wrapper -thin">
    <h4 class="mt-zero">Payment Information</h4>
    <label class="field">
      <input type="text" value="Leroy Jenkins" />
      <span class="label">Name on Card</span>
    </label>

    <label class="field">
      <input type="text" value="1234 5678 9012 3456" />
      <span class="label">Card Number</span>
    </label>

    <div class="grid -medium ta-right" style="--columns: 2;">
        <label class="field">
          <select>
            <option selected="selected">04</option>
          </select>
          <span class="label" for="select">Exp. Month</span>
        </label>

        <label class="field">
          <select>
            <option selected="selected">2024</option>
          </select>
          <span class="label" for="select">Exp. Year</span>
        </label>

        <label class="field">
          <input type="text" value="90210" />
          <span class="label">Zipcode</span>
        </label>

        <label class="field">
          <input type="text" value="123" />
          <span class="label">CVV</span>
        </label>

        <input type="reset" class="button -secondary" value="Reset" />
        <input type="submit" class="button" value="Submit" />
    </div>
</form>

```
<form class="wrapper -thin">
    <h4 class="mt-zero">Payment Information</h4>
    <label class="field">
      <input type="text" value="Leroy Jenkins" />
      <span class="label">Name on Card</span>
    </label>

    <label class="field">
      <input type="text" value="1234 5678 9012 3456" />
      <span class="label">Card Number</span>
    </label>

    <div class="grid -medium ta-right" style="--columns: 2;">
        <label class="field">
          <select>
            <option selected="selected">04</option>
          </select>
          <span class="label" for="select">Exp. Month</span>
        </label>

        <label class="field">
          <select>
            <option selected="selected">2024</option>
          </select>
          <span class="label" for="select">Exp. Year</span>
        </label>

        <label class="field">
          <input type="text" value="90210" />
          <span class="label">Zipcode</span>
        </label>

        <label class="field">
          <input type="text" value="123" />
          <span class="label">CVV</span>
        </label>

        <input type="reset" class="button -secondary" value="Reset" />
        <input type="submit" class="button" value="Submit" />
    </div>
</form>
```

---
layout: page
title: Popsicle
permalink: /features/popsicle
---

## Overview

Popsicle is a minimalistic paradigm for writing CSS. If you're familiar with BEM,
it's inspired by that, but less verbose and the cost is one level of specificity.

When using the Popsicle Paradigm, you have two types of rulesets:

* Boxes - A component that is a collection of styles
  * e.g. `.button`
* Popsicles - A subset of styles that modify a box or a component
  * e.g `.button.-outlined`

#### Rules

* Popsicle selectors must be chained to a Box selector
  * Do: `.button.-small`
  * Don't: `.-small`
  * Don't: `.button .-small`

#### Recommendations

* Use `kebab-case` for all of your selectors

---

### Example

Let's create our first component. We're going to use some
variables that come with Cutestrap.

#### Box: `.well`

This is just a simple ruleset for `.well`. It provides us with a box-shadow
to simulate a shallow depth for the well.

```
<style type="text/css">
.well {
    background-color: var(--color-neutral-tint3);
    box-shadow: 1px 1px 2px 2px var(--color-neutral-shade1) inset;
    padding: var(--rhythm);
    margin-bottom: var(--rhythm);
}
</style>
<div class="well">
    I am a content well, but I'm pretty shallow.
</div>
```

##### Example
<style type="text/css">
.well {
    background-color: var(--color-neutral-tint2);
    box-shadow: 1px 1px 2px 0px var(--color-neutral-shade1) inset;
    padding: var(--rhythm);
    margin-bottom: var(--rhythm-double);
}
</style>
<div class="well">
    I am a content well, but I'm pretty shallow.
</div>

#### Popsicle: `.well.-deep`

For our Popsicle ruleset `.well.-deep` we will modify the background-color of
our well and give it an inset box-shadow to show how deep our well is.

```
<style type="text/css">
.well.-deep {
    background-color: var(--color-neutral-tint1);
    box-shadow: 3px 3px 6px 6px var(--color-neutral-shade2) inset;
}
</style>
<div class="well -deep">
    I am a content well and I am deep.
</div>
```

##### Example
<style type="text/css">
.well.-deep {
    background-color: var(--color-neutral-tint1);
    box-shadow: 3px 3px 6px 6px var(--color-neutral-shade2) inset;
}
</style>
<div class="well -deep">
    I am a content well and I am deep.
</div>

### Justification

There are a plethora of ways to organize and write your CSS, so why create another one?

Some demand you organize your entire CSS to match their method, others sell you
a book, and others are subjectively less enjoyable to look at or work with.

Popsicle is light-touch and can be incorporated into any project additively,
without needing you to conform your entire codebase to its pattern for it to be
beneficial to your workflow.

---
layout: page
title: Tune Your Bundle
permalink: /features/bundle
weight: 0
---

## Overview

Cutestrap is comprised of seven files, which come bundled as
[cutestrap.css](https://github.com/tylerchilds/cutestrap/blob/master/dist/css/cutestrap.css).

* core.css
([docs](https://docs.cutestrap.com/section-1.html),
[source](https://github.com/tylerchilds/cutestrap/blob/master/src/css/core.css))
* base.css
([docs](https://docs.cutestrap.com/section-2.html),
[source](https://github.com/tylerchilds/cutestrap/blob/master/src/css/base.css)
* buttons.css
([docs](https://docs.cutestrap.com/section-3.html),
[source](https://github.com/tylerchilds/cutestrap/blob/master/src/css/buttons.css))
* forms.css
([docs](https://docs.cutestrap.com/section-4.html),
[source](https://github.com/tylerchilds/cutestrap/blob/master/src/css/forms.css))
* grid.css
([docs](https://docs.cutestrap.com/section-5.html),
[source](https://github.com/tylerchilds/cutestrap/blob/master/src/css/grid.css))
* wrappers.css
([docs](https://docs.cutestrap.com/section-6.html),
[source](https://github.com/tylerchilds/cutestrap/blob/master/src/css/wrappers.css))
* utilities.css
([docs](https://docs.cutestrap.com/section-7.html),
[source](https://github.com/tylerchilds/cutestrap/blob/master/src/css/utilities.css))

If all of these features are overkill for your use case, you can pick and choose
to use only the files you need. The only caveat is that all of the other files
depend on `core.css`. So if you're going an a la carte route, you'll need that
one file as your entree.

### Core

This is where all the magic happens for Cutestrap. We establish all of our
rhythm and typographic mixins on all elements, set our global variables on `html`,
andset our baseline typography on the `body`.

The reason all the other files depend on core is for the variables and mixins,
which is while you'll need this file at a minimum.

### Base

This file is Cutestrap's [Normalize.css](https://necolas.github.io/normalize.css/)
or [Reset.css](https://meyerweb.com/eric/tools/css/reset/), but it's more
opinionated than either of those, since it follows the baseline grid.

Base does not have any classes and styles HTML elements directly. It follows
browser defaults and web standards, such as link colors and underlines, but
adds in its own flair.

### Buttons

On the surface, this file provides out of the box classes for buttons, which
you'll need to use to get buttons to look like buttons. We don't style button-like
elements by default, since there are valid use cases where you might want to
have button interactions on something that doesn't look like a traditional button.

Under the hood, the `.button` class is a powerful mixin using custom properties.
Take a look at the source code for a better understanding to extend your own
buttons.

### Forms

The one-form-class to rule them all is defined in this file: `.field`. This is
a pretty overloaded class, but it is the main driver behind Cutestrap's forms.
It is the powerhouse that enables us to use the same syntax for the standard
form controls.

If you want forms that look nothing like what Cutestrap offers, you can leave
this file out of your bundle.

### Grid

Our grids are really just a thin abstraction layer over CSS Grids. It really
only supports equal sized columns by default, but also allows for control over
the number of columns with a simple Custom Property. This should cover a vast
majority of use cases without convoluting Cutestrap's syntax and docs.

If you need to do anything more advanced, definitely check out CSS Grid, because
there are unlimited possibilities and too many to try and squeeze into some
out-of-the-box grid system.

### Wrappers

The wrappers provide a simple way to bound and give white-space to your content.
Their max-widths are sized using REMs, so they'll be relative to the users
zoom level or settings, but are optimized for visual pleasing line lengths
that are conducive to reading.

### Utilities

Sometimes a design calls for a minor one-off and it's easy to add a new class
for it to your CSS. But sometimes this makes your CSS messy or confusing when
working with larger code-bases or larger teams.

These are the least necessary items for Cutestrap, but they're included because
they are nice to have in real world workflows.

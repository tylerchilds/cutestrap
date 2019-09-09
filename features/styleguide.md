---
layout: page
title: Styleguide
permalink: /features/styleguide
---

## Overview

Documentation of the various Cutestrap classes are automatically generated from
comments inside of the source code. This is done using
<a href="https://github.com/kss-node/kss-node" target="_blank">kss-node</a>.

The [Cutestrap Docs](https://docs.cutestrap.com/section-1.html) are
updated automatically whenever Cutestrap is updated, so it is the ultimate
source of truth since it's living documentation.

You can extend Cutestrap's styleguide by cloning the repo and changing some
KSS comments. The docs folder will update with the latest changes.

### Example

The snippet below is taken from the [Button Docs](https://docs.cutestrap.com/section-3.html)
and we can use it to learn the KSS Syntax.

```
/*

Buttons

Buttons and their variations

Markup:
<button class="button {{modifier_class}}">Button</button>

.-secondary - A button with secondary colors
.-outlined - An outlined button
.-link - A button that looks like a link
.-block - Block level button
.-large - A large button
.-small - A small button
.-small.-outlined - A small, outlined button

Styleguide 3.0

*/
```

Let's begin with the last line:

```
Styleguide 3.0
```

This is the part that indicates the hierarchy of the section. This is used
for navigation and also for ordering on the page itself. You can have a page
generated from across multiple different CSS files, if desired.

```
Buttons
```

This is the title of the section. Since the Styleguide section is the top
level for this example (e.g. x.0, where x is 3 for this specific example), our
styleguide will also use this for our navigation text.

```
Buttons and their variations
```

This is a little description that will show below the title of the section.

```
Markup:
```

The lines immediately after `Markup:` are used to generate the example output
and also to be shown as is. The `modifier_class` will be substituted with
the various modifiers.

```
.-secondary - A button with secondary colors
```

The modifiers are the classes right after the `Markup:`. Each item will be looped
over to show an example of the markup rendered with that modifier. After the
hyphen is the description, which will display near the example.

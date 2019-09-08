---
layout: page
title: Typography
permalink: /features/typography
---

## Overview

The typography in Cutestrap is all oriented around a baseline grid. To get
spacing consistent across all elements, we utilize one main custom property:
`--rhythm`.

The `--rhythm` property and all others that are derived from it are available on
every element and changing it will cascade the new values for the matched 
element and all children.

### Code Example

The below code is copied and pasted from [core.css](https://docs.cutestrap.com/section-1.html).
It's a little complex, but keep reading on and we'll break it down to make it 
more digestable.

You don't need to ever really touch this code, since it's just powering Cutestrap
under the hood, but spending some time with it will give you more control over
what you can build.

```
* {
    --rhythm: 2rem;
    --line-height: var(--sub-rhythm, var(--rhythm));
    --line-height-ratio: 1.4;
    --font-size: calc(var(--line-height) / var(--line-height-ratio));
}

body {
    font-size: var(--font-size);
    line-height: var(--line-height);
}
```

**Note:** You can ignore the `--sub-rhythm` custom property until we get to that
section below. It is not defined yet, so `--rhythm` is used as the default.

### Line Height

By default, our `--line-height` custom property is equal to our `--rhythm`. This
is the overall foundation for our baseline grid, in regards to our typography.

### Font Size

Our `--font-size` is calculated off of our `--line-height` using 
`--line-height-ratio`. Dividing the line height by the line height ratio gives
a visually-pleasing amount of white-space between our lines.

### Sub Rhythm

If `--sub-rhythm` is set, `--line-height` will use that value instead of the
current `--rhythm`. This is helpful for when you want text to span multiple
lines, but you want the margins or padding around it to still use the `--rhythm`
of the main baseline grid.

As an example, we may want to have our `h2` span three lines. So we set our
`--sub-rhythm` to be three lines and we set the line height ratio to be tighter,
since a larger font size looks better with a tighter spacing between lines.

```
h2 {
    --line-height-ratio: 1.2;
    --sub-rhythm: var(--rhythm-triple);
    font-size: var(--font-size);
    line-height: var(--line-height);
}
```

Note in that example, we set `font-size` and `line-height` to be their
respective custom property counter part. When we changed the `--line-height-ratio`
and the `--sub-rhythm`, those values were recalculated. By setting them again,
we're using those recalculated values for our current scope.

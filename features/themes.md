---
layout: page
title: Themes
permalink: /features/themes
---

## Overview

Themeing can be done in Cutestrap by just overridding the various custom properties
that get set inside of [core.css](https://docs.cutestrap.com/section-1.html). By
default, all of the theme related variables are set in an `html` ruleset, but
it is also possible to sub-theme by declaring theme styles inside of any ruleset.

Since we're utilizing custom properties, the values will cascade down from where
they are declared down to all their descendants.

### Colors

The most common customization for changing a theme is changing the colors. Just
about all the colors in Cutestrap utilize shading and tinting to get darker
and lighter variations respectively.

All colors are also namespaced with a `--color-` prefix.

#### Primary

The primary color has a single tint and a single shade.

```
html {
    --color-primary-tint: hsl(350, 100%, 80%);
    --color-primary: hsl(350, 80%, 60%);
    --color-primary-shade: hsl(350, 60%, 40%);
}
```

#### Accent

Like the primary color, the accent color also comes with a tint and a shade.

```
html {
    --color-accent-tint: hsl(170, 100%, 80%);
    --color-accent: hsl(170, 80%, 60%);
    --color-accent-shade: hsl(170, 60%, 40%);
}
```

#### Links

By default, links are blue and visited links are purple. This follows the web
default and also gives readers indication of which links they have already
been to.

```
html {
    --color-link: hsl(230, 60%, 50%);
    --color-link-visited: hsl(290, 60%, 50%);
    --color-link-hover: hsl(230, 80%, 60%);
    --color-link-active: hsl(350, 60%, 50%);
}
```

#### Neutral

The neutral colors come with four tints and four shades. `--color-neutral` is the
mid-point, `--color-neutral-tinted` is basically white, and `--color-neutral-shaded`
is basically black.

In between the mid-point and the two extremes are the other tints and shades. The
higher the number, the closer their are to their respective extreme.

```
html {
    --color-neutral-tinted: hsl(170, 10%, 98%);
    --color-neutral-tint3: hsl(170, 10%, 94%);
    --color-neutral-tint2: hsl(170, 10%, 85%);
    --color-neutral-tint1: hsl(170, 10%, 68%);
    --color-neutral: hsl(170, 10%, 55%);
    --color-neutral-shade1: hsl(170, 10%, 41%);
    --color-neutral-shade2: hsl(170, 10%, 30%);
    --color-neutral-shade3: hsl(170, 10%, 18%);
    --color-neutral-shaded: hsl(170, 10%, 2%);
}
```


### Fonts

The fonts for Cutestrap can be easily swapped out by updating the `--font-headeing`
and `--font-body` custom properties with new values.

```
html {
    --font-family: 'Avenir', 'Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Verdana', sans-serif;
    --font-mono: 'Consolas', 'Monaco', 'Courier New', monospace;
    --font-heading: var(--font-family);
    --font-body: var(--font-family);
}
```

#### Example

The dark theme used for this site was really just swapping each variable with
the respective counter-part (e.g. `--color-primary-shade` becomes `--color-primary-tint`
and `--color-neutral-tint3` becomes `--color-neutral-shade3`.

```
html {
    --color-primary-shade: hsl(350, 100%, 80%);
    --color-primary: hsl(350, 80%, 60%);
    --color-primary-tint: hsl(350, 60%, 40%);
    --color-accent-shade: hsl(170, 100%, 80%);
    --color-accent: hsl(170, 80%, 60%);
    --color-accent-tint: hsl(170, 60%, 40%);
    --color-link: hsl(230, 60%, 50%);
    --color-link-visited: hsl(290, 60%, 50%);
    --color-link-hover: hsl(230, 80%, 60%);
    --color-link-active: hsl(350, 60%, 50%);
    --color-neutral-shaded: hsl(170, 10%, 98%);
    --color-neutral-shade3: hsl(170, 10%, 94%);
    --color-neutral-shade2: hsl(170, 10%, 85%);
    --color-neutral-shade1: hsl(170, 10%, 68%);
    --color-neutral: hsl(170, 10%, 55%);
    --color-neutral-tint1: hsl(170, 10%, 41%);
    --color-neutral-tint2: hsl(170, 10%, 30%);
    --color-neutral-tint3: hsl(170, 10%, 18%);
    --color-neutral-tinted: hsl(170, 10%, 2%);

}
```

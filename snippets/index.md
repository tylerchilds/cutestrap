---
layout: page
title: Snippets
permalink: /snippets/
---

To keep Cutestrap simple and lightweight, there are certain features that did
not make the cut into the package. To provide a middle ground, let's try out
snippets. This page has patterns people have requested of Cutestrap
or are common among other CSS Frameworks.

If you'd like request something that's missing, please
<a href="https://github.com/tylerchilds/cutestrap/issues" target="_blank">open an issue</a>
or if you have a contribution, please open a pull request.

### Contextual Buttons

If you would like buttons for actions such as success, danger, warning and info,
these are a solid launching pad in that direction.

<style type="text/css">
.button.-success {
  --background-color: hsl(120, 55%, 45%);
  --background-color-hover: hsl(120, 50%, 40%);
  --border-color: hsl(120, 55%, 45%);
  --border-color-hover: hsl(120, 50%, 40%);
  --text-color: hsl(120, 10%, 18%);
  --text-color-hover: hsl(120, 10%, 18%);
}

.button.-danger {
  --background-color: hsl(0, 55%, 45%);
  --background-color-hover: hsl(0, 50%, 40%);
  --border-color: hsl(0, 55%, 45%);
  --border-color-hover: hsl(0, 50%, 40%);
  --text-color: hsl(0, 10%, 90%);
  --text-color-hover: hsl(0, 10%, 90%);
}

.button.-warning {
  --background-color: hsl(50, 65%, 50%);
  --background-color-hover: hsl(50, 60%, 45%);
  --border-color: hsl(50, 65%, 50%);
  --border-color-hover: hsl(50, 60%, 45%);
  --text-color: hsl(50, 10%, 18%);
  --text-color-hover: hsl(50, 10%, 18%);
}

.button.-info {
  --background-color: hsl(230, 55%, 45%);
  --background-color-hover: hsl(230, 45%, 35%);
  --border-color: hsl(230, 55%, 45%);
  --border-color-hover: hsl(230, 45%, 35%);
  --text-color: hsl(230, 10%, 90%);
  --text-color-hover: hsl(230, 10%, 90%);
}
</style>

<button class="button -success">Success</button>
<button class="button -danger">Danger</button>
<button class="button -warning">Warning</button>
<button class="button -info">Info</button>


```
<style type="text/css">
.button.-success {
  --background-color: hsl(120, 55%, 45%);
  --background-color-hover: hsl(120, 50%, 40%);
  --border-color: hsl(120, 55%, 45%);
  --border-color-hover: hsl(120, 50%, 40%);
  --text-color: hsl(120, 10%, 18%);
  --text-color-hover: hsl(120, 10%, 18%);
}

.button.-danger {
  --background-color: hsl(0, 55%, 45%);
  --background-color-hover: hsl(0, 50%, 40%);
  --border-color: hsl(0, 55%, 45%);
  --border-color-hover: hsl(0, 50%, 40%);
  --text-color: hsl(0, 10%, 90%);
  --text-color-hover: hsl(0, 10%, 90%);
}

.button.-warning {
  --background-color: hsl(50, 65%, 50%);
  --background-color-hover: hsl(50, 60%, 45%);
  --border-color: hsl(50, 65%, 50%);
  --border-color-hover: hsl(50, 60%, 45%);
  --text-color: hsl(50, 10%, 18%);
  --text-color-hover: hsl(50, 10%, 18%);
}

.button.-info {
  --background-color: hsl(230, 55%, 45%);
  --background-color-hover: hsl(230, 45%, 35%);
  --border-color: hsl(230, 55%, 45%);
  --border-color-hover: hsl(230, 45%, 35%);
  --text-color: hsl(230, 10%, 90%);
  --text-color-hover: hsl(230, 10%, 90%);
}
</style>

<button class="button -success">Success</button>
<button class="button -danger">Danger</button>
<button class="button -warning">Warning</button>
<button class="button -info">Info</button>
```

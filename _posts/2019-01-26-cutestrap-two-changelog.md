---
layout: blog/post
title:  "Cutestrap Two Changelog"
date:   2019-08-26 17:00:00 -0800
permalink: /cutelog/cutestrap-two-changelog
---

## First, some context.

Since creating Cutestrap over 3 years ago now, I've used it as the foundation
for every side project I've worked on. After years of thoughts of what I would
want out of an upgrade, I've completely re-built it from the ground up.

Originally, all of the vertical rhythm was hard coded, so all projects built
with Cutestrap looked somewhat the same. Version 1 was also written in Sass,
which restricted anyone not using it from unlocking all the customization
potential.

So! Cutestrap Two is written in 100% vanilla CSS and uses Custom Properties to
control the entire Baseline Grid and theme for way more customization options.

### Whatever, what's new though?

Straight to the point, I dig it, dear reader. 

* Form fields can now be styled with consistent singular `.field` with children
* Custom Baseline Grid by changing a single Custom Property, `--rhythm`
* More robust default color palette, using HSL
* Buttons are no longer styled implicitly and use `.button`
* Way more button modifiers that can be composed together
* Wrappers are now sized calculated based on rhythm
* Flexbox based grid system has removed in favor of a basic CSS Grid
* For a naming convention, BEM is out, Popsicle is in

To learn more, I highly recommend checking out the [Features](/features)
which documents all of the changes in more concrete detail.

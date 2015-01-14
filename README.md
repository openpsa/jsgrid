grid.js
======

[grid.js](http://openpsa.github.io/grid.js/) is a jQuery plugin for displaying and manipulating tabular data. It is a fork of jqGrid, or to be more specific, a fork of the last version before the licence change. Now you could argue that the licence change was invalid, since Trirand did not get permission of all the copyright holders and continue using it under the old licence, but this is really an inconvenient situation unless you're looking for a fight.

So as an alternative, the MIT/GPL-licenced version is available in this repo. It is currently a work in progress, so  the [documentation/website](http://openpsa.github.io/grid.js/) is very incomplete (but since the code is based on jqGrid, the original jqGrid documentation and demos can still be used).

The idea is to turn this repo into a community-driven and free (meaning open-source AND free of charge) version of jqGrid. To facilitate this, we've switched to Grunt as it is much more common and easier to handle, and we'll keep documentation in the repo itself so it can be managed with Github workflows. On the same note please feel free to take on any of our outstanding [issues](https://github.com/openpsa/grid.js/issues).

Enjoy!


## Development Setup

To use grid.js, you can simply download the files from the `dist/` folder. For a deveploment setup, you will need `npm` and `bower` installed. Once you have them, clone this repo and change into the new directory:

```bash
git clone https://github.com/openpsa/grid.js
cd grid.js/
```

Then, install the dependencies:

```bash
npm install
bower install
```

Afterwards, you can build like this:

```bash
grunt --force
```

(The `force` switch is currently necessary because of some `jshint` warnings)

You can generate the compressed files with

```bash
grunt compile
```

The documentation can be built with

```bash
grunt docs
```

For development, use `grunt watch` to build continuously (both documentation and code):

```bash
grunt watch --force
```

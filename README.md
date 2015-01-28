jsgrid
-------

[jsgrid](http://openpsa.github.io/jsgrid/) is a jQuery plugin for displaying and manipulating tabular data ([demos](http://openpsa.github.io/jsgrid/demos/local.html)). It is a fork of jqGrid, or to be more specific, a fork of the last version before the licence change. Now you could argue that the licence change was invalid, since Trirand did not get permission of all the copyright holders and continue using it under the old licence, but this is really an inconvenient situation unless you're looking for a fight.

So as an alternative, the MIT/GPL-licenced version is available in this repo. It is currently a work in progress, so  the [documentation/website](http://openpsa.github.io/jsgrid/) is very incomplete (but since the code is based on jqGrid, the original jqGrid documentation and demos can still be used).

The idea is to turn this repo into a community-driven and free (meaning open-source AND free of charge) version of jqGrid. To facilitate this, we've switched to Grunt as it is much more common and easier to handle, and we'll keep documentation in the repo itself so it can be managed with Github workflows. On the same note please feel free to take on any of our outstanding [issues](https://github.com/openpsa/jsgrid/issues).

Enjoy!

## Installation
Download jsgrid from [our download builder](http://openpsa.github.io/jsgrid/download/index.html) where you can choose exactly the components and language you want, or you can just download the files from the `dist/` folder that include all the components.
You can use the bundled jQuery or the one you use in your existing project. jsgrid requires jQuery 1.6+.
Include jQuery and jsgrid in your HTML :

```html
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jsgrid.min.js"></script>
<link type="text/css" rel="stylesheet" href="jsgrid.min.css">
```
If you use a custom build from [download builder](http://openpsa.github.io/jsgrid/download/index.html) without default language, you need to include a locale file, too:

```html
<script type="text/javascript" src="i18n/grid.locale-xx.min.js"></script>
```

While awaiting our start guide, you can look at the [basic setup](http://openpsa.github.io/jsgrid/demos/local.html) and the [configuration options](http://openpsa.github.io/jsgrid/configuration.html) for help.

## Development Setup

You will need `npm` and `bower` installed. Once you have them, clone this repo and change into the new directory:

```bash
git clone https://github.com/openpsa/jsgrid
cd jsgrid/
```

Then, install the dependencies:

```bash
npm install
bower install
```

Afterwards, you can build like this:

```bash
grunt
```

The documentation can be built with

```bash
grunt docs
```

For development, use `grunt watch` to build continuously (both documentation and code):

```bash
grunt watch
```

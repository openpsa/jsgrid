---
title: Getting started
---


Download jsgrid from [our download builder](download/index.md) where you can choose exactly the components and language you want, or you can just download the files from the [`dist/`](https://github.com/openpsa/jsgrid/tree/master/dist) folder that include all the components.
You can use the bundled jQuery or the one you use in your existing project. jsgrid requires jQuery 1.6+.
Include jQuery and jsgrid in your HTML :

```xml
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jsgrid.min.js"></script>
<link type="text/css" rel="stylesheet" href="jsgrid.min.css">
```
If you use a custom build without a default language, you need to include a locale file, too:

```xml
<script type="text/javascript" src="i18n/grid.locale-xx.min.js"></script>
```

While awaiting our start guide, you can look at the [basic setup](demos/local.md) and the [configuration options](configuration.md) for help.

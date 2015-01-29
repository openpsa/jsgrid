---
title: Configuration
section: Configuration
subpages:
 - {path: './configuration/options.html', title: 'Options'}
 - {path: './configuration/colModel.html', title: 'Column Model'}
 - {path: './configuration/grouping.html', title: 'Grouping'}
---

jsgrid is configured by setting options on various levels to control
the grid behaviour and features. Typically, this is done right in the
constructor:

```javascript
$("#grid").jqGrid({
    // configure backend URL
    url: 'example.php',
    // Enable the caption layer
    caption: 'My first jsgrid'
});
```

You can find a reference of all options under the links on the right.

## Changing Global Defaults

If you want to re-use settings across multiple grids, you can also set
options globally:

```javascript
$.extend(true, $.jgrid.defaults, { caption: 'The default caption for all grids' });
```

Of course, the global settings have to be changed before instantiating
the grid, and global settings will get overwritten by options set
directly in the grid constructor:

```javascript
$.extend(true, $.jgrid.defaults, { caption: 'This will get overwritten' });
$("#grid").jqGrid({
    url: 'example.php',
    caption: 'This will be rendered'
});
```

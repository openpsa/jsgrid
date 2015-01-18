---
title: Release Notes
---

1.0 (Unreleased)
---

1.0 is the first release of jsgrid.

### Compatibility with jqGrid 4.7.0

The following are the important changes since jqGrid 4.7.

#### Locales

All locale files are now encoded in UTF-8. File names are updated to use standard ISO language codes - this leads to the following changes:

 * For Catalan `grid.locale-cat.js` becomes `grid.locale-ca.js`
 * For Chinese (Mainland China or Simplified) `grid.locale-cn.js` becomes `grid.locale-zh-CN.js`
 * For Chinese (Taiwan or Traditional) `grid.locale-tw.js` becomes `grid.locale-zh-TW.js`
 * For Danish the duplicae `grid.locale-dk.js` has been removed, use `grid.locale-da.js` instead
 * For Korean `grid.locale-kr.js` becomes `grid.locale-ko.js`
 * For Portuguese (Brazil) `grid.locale-pt-br.js` becomes `grid.locale-pt-BR.js`
 * For Montenegrin `grid.locale-mne.js` becomes `grid.locale-sr-ME.js`
 * For Ukrainian `grid.locale-ua.js` becomes `grid.locale-uk.js`

If you've added any custom code to handle the incorrect language codes you'll need to remove this for this release.

Some common properties which have no relation to the language are moved to the `grid.base.js` module. Please note that this means that old locale files from jqGrid 4.7.0 will not work.

#### Changed Defaults

The default values of some jqGrid options are changed.

* `gridview` defaults to `true`: This improves the rendering performance. If you use `afterInsertRow` instead of `cellatr` and `rowattr` (which is very ineffective) in old projects, you will have to need to specify `gridview: true` explicitly.
* `autoencode` defaults to `false`: The old default `autoencode: false` combined with JSON or local data produced strange side effects sometimes if the data contained symbols like `&`, `;`, `>`.
* `height` defaults to `"auto"`: Improves the visibility of small grids or grids having a small number of rows. `scrollOffset: 0` is no longer required to remove free space which one sees on some grids without vertical scrollbars.
* `rowNum` now uses a dynamic default value: The default value `rowNum: 20` will be changed to 10000 (the value of the new `maxRowNum` property) if no pager exists (i.e. `pager` and `toppager: true` options are not used) or pagination is disabled (e.g. by setting `treeGrid: true`). The new option `maxRowNum` can be used to change the maximum value of rows displayed in the grid.
* `datatype` now uses a dynamic default value: If `data` is set or if no `url` is set, `datatype` will be initialized to `"local"`. If `data` is not used and `url` is set, `datatype` will be `"json"` if the input option `jsonReader` is used. For any other combination of input parameters the option `datatype` will be set to `"xml"` to stay compatible with jqGrid 4.7.0 and older.
* `editurl` defaults to `"clientArray"`: It allows local editing with minimal additional efforts.
* `cellsubmit` default to `"clientArray"`: It allows local editing with minimal additional efforts.

Most of the changes correspond to recent tendencies of web development. Local JavaScript data and JSON data loaded from the server (especially in combination with `loadonce: true`) are used now much more frequently.


### New Features

* **Auto-adjustment of the column width based on column and header content:** To use this feature, specify `autoResizable: true` in the column (you can use `cmTemplate: {autoResizable: true}` to set the property for all columns). After that, a double-click in the resizer (in the column header close to vertical line between columns) will adjust the width of the column. You can use `autoresizeOnLoad: true` to autoresize all columns having `autoResizable: true` property directly after loading/sorting/paging.
* **Configurable alignment of the column headers:** See the description of the `colModel` properties `labelAlign` and `labelClasses` below.
* **Better integration with alternative CSS frameworks:** CSS is changed to simplify integration into projects which use frameworks other then jQuery UI, for example Bootstrap.
* **`jsonmap` works with local data:** The only exception is when you use the `dataTypeOrg` option. The option will be set automatically after loading the data from the server and changing the `datatype` to `"local"`. It allows you to use `jsonmap` for the data loaded from the server and then skip it in later processing of the local data.
* **jqGrid can run without locale file:** Content from `grid.locale-en.js` is included directly in the code. If you want to use a different default locale (or none at all), you can use the [Download Builder](download/index.md)
* **additional option `fromServer: true` in `.trigger("reloadGrid")`:** This allows reloading the data from the server when `loadonce` is set to `true`.
* **new `singleSelectClickMode` option:** It allows to control deselection of previously selected rows on clicking on the row. Default behaviour is to toggle the selection. You can restore the previous behavior (i.e. disallow deselection) by specifying `singleSelectClickMode: "selectonly"` or `singleSelectClickMode: ""`. Note that the behaviour of `setSelection` method is not changed. Multiple calls of `setSelection` will not deselect the row.

### New Options

* `lastSelectedData`: option for sorted and filtered `data`. See [the old answer](http://stackoverflow.com/a/9831125/315935) for details. No "subclassing" of `$.jgrid.from` is required anymore. The name of the internal option `lastSelected` is changed to `lastSelectedData`.
* `widthOrg`: Saves the value of `width` during creation of the grid. It will be used internally mostly to detect when jqGrid was created without specifying the `width` explicitly. In this case, the width of the grid might be adjusted when the width of the columns changes.
* `dataTypeOrg`: Will be used internally when a remote `datatype` (`"json"` and `"xml"`) is used together with `loadonce: true`. The option will be deleted by `.trigger("reloadGrid")`.
* `doubleClickSensitivity`: The resizer will stay visible at least this long after the first click so that the user can click again, which will be detected as a double-click on the resizer. The default value is `250` (ms).
* `autoresizeOnLoad`: Used in combination with the `colModel` property `autoResizable: true`. If `autoresizeOnLoad` is `true`, then jqGrid auto-resizes all columns having the `autoResizable: true` property directly after `loadComplete`. **Note:** Auto-resizing of hidden grids doesn't work. So if you fill the grid on a hidden jQuery UI Tab for example, then you should call `autoResizeAllColumns` method directly after the tab is activated.
* `autoResizing`: A map of properties (like `groupingView`) used. It allows to tune some behaviour of auto-resizing.
  * `compact` - default value `false`. When set to `true`, the width of the column header is calculated without reserving space for the sorting icons
  * `widthOfVisiblePartOfSortIcon`: default value `12`. Should be used only if you don't use the default jQuery UI icons.
  * `minColWidth`: `33` - minimum width of column after resizing
  * `maxColWidth`: `300` - maximum width of column after resizing
  * `wrapperClassName`: `"ui-jqgrid-cell-wrapper"` - the name of the class assigned to `<span>` included in every cell of the grid
  * `adjustGridWidth`: `true` - means that the width of the grid will be adjusted after resizing the column
  * `fixWidthOnShrink`: `false` - will be removed later. It will be not included in the release

### New `colModel` properties

* `template: "integer"`, `template: "number"`, and `template: "actions"` can be used to simplify the usage of `formatter: "integer"`, `formatter: "number"` and `formatter: "actions"` in `colModel`. The list of the standard templates will be extended in future versions. You can use `$.extend(true, $.jgrid.cmTemplate, { myDataTemplate: {...}}` to define custom column templates which can be used like this: `template: "myDataTemplate"`. See [the post](http://www.trirand.com/blog/?page_id=393/bugs/bug-in-cmtemplate-new-feature) and [the old answer](http://stackoverflow.com/a/6047856/315935) for more information about column templates.
* `autoResizable` which will be used for auto-adjustment of the column width based on the column and header content
* `autoResizingOption` property is an object like `editoptions`, `searchoptions` or `formatoptions`. It can be used to change some common `autoResizing` grid options for the column only. The properties of `autoResizingOption` are `minColWidth`, `maxColWidth` and `compact`.
* `labelAlign` property with `"left"`, `"center"` (default), `"right"` and `"likeData"` values,
* `labelClasses` property allows to add CSS class to the column header.

### New methods

* `setColWidth` - allows changing the width of the column after the grid is created.
* `autoResizeColumn` - has no parameters. It resizes all columns having `autoResizable: true`
* `autoResizeAllColumns` - has integer iCol as parameter. It resizes all columns having `autoResizable: true`. Note: Auto-resizing doesn't work with hidden grids.
* `getGridComponent` - allows to get different components of jqGrid like `"bTable"`, `"hTable"`, `"fTable"`, `"bDiv"` and others. The method will be extended later.

### New Callbacks and Events

* `fatalError` - callback which can be used to change the display of critical errors. One can use the feature in unit tests for example.
* `resizeDblClick` callback and `jqGridResizeDblClick` event will be called when double-clicking the column resizer. It's important to note that the callbacks will be called even if `autoResizable` is set to `false` in the `colModel`. It allows implementing custom actions on double-click on the column resizer. Returning `false` or `"stop"` from the `resizeDblClick` callback or the `jqGridResizeDblClick` event in case of `autoResizable: true` will prevent resizing on the column.
* the callbacks `onShowHideCol` and `onRemapColumns` have been added. The corresponding `jqGridShowHideCol` and `jqGridRemapColumns` events already exist in jqGrid 4.7.

### Some demos

* [GetFilteredData](http://www.ok-soft-gmbh.com/jqGrid/OK/GetFilteredData.htm) - demonstrates how to use new `lastSelectedData` option which returns, in contrast to `data`, *filtered* and *sorted* data items from all pages of jqGrid. Try to set some filter in the demo, make sorting by some column and set the page size to 2 for example. Click the button above the grid and see the displayed results.
* [autoResizing](http://www.ok-soft-gmbh.com/jqGrid/OK/autoresizeOnDoubleClickOnColumnResizer.htm) - demonstrates the default behaviour of auto-resizing feature. Double-click on the column resizer (in the header close to the right border which divides the columns). You will see the default behaviour of column resizing.
* [autoResizingCompact](http://www.ok-soft-gmbh.com/jqGrid/OK/autoresizeOnDoubleClickOnColumnResizer1.htm) - demonstrates the default behaviour of auto-resizing feature. Double-click on the column resizer (in the header close to the right border which divides the columns). You will see the behaviour of column resizing in case of usage `autoResizing: { compact: true }`.
* [autoResizingWithShrinkCompact](http://www.ok-soft-gmbh.com/jqGrid/OK/autoresizeOnDoubleClickOnColumnResizerWithShrink.htm) - modification of the previous demo. It uses no `shrinkToFit: false` option and `width: 518` instead.
* [autoresizeOnLoad](http://www.ok-soft-gmbh.com/jqGrid/OK/autoresizeOnLoad1.htm) - demonstrates auto-resizing on loading. Try to use sorting, paging the grid, and see the results.
* [autoresizeOnLoadCompact](http://www.ok-soft-gmbh.com/jqGrid/OK/autoresizeOnLoad2.htm) - the same demo as before (auto-resizing on loading), but with the usage of `autoResizing: { compact: true }` additionally.
* [autoResizingPerformane1000](http://www.ok-soft-gmbh.com/jqGrid/OK/performane-1000.htm) - the demo create the grid with 1000 rows. By double-click on resizer you can see the performance of resizing for relatively large number of rows.
* [alignLabel](http://www.ok-soft-gmbh.com/jqGrid/OK/alignLabel.htm) - demonstrates the usage of new `labelAlign` and `labelClasses` properties of `colModel`.
* [autoResizingGrouping](http://www.ok-soft-gmbh.com/jqGrid/OK/grouping1.htm) - demonstrates then auto-resizing on loading works with grouping too.
* [autoResizingGroupingRtl](http://www.ok-soft-gmbh.com/jqGrid/OK/groupingRtl1.htm) - the same as the previous demo, but it uses RTL.

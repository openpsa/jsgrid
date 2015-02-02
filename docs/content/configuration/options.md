---
title: Options
section: Configuration
---

## Data

### `colModel`
**Type:** array
**Default:** `[]`
**Changeable:** No

Array which describes the parameters of the columns. This is the most important part of the grid. For a full description of all valid values see the [colModel API](./colModel.md).

#### `colNames`
**Type:** array
**Default:** `[]`
**Changeable:** No

An array in which we place the names of the columns. This is the text that appears in the head of the grid (header layer). The names are separated with commas. Note that the number of elements in this array should be equal of the number elements in the `colModel` array.

#### `cmTemplate`
**Type:** object
**Default:** `null`
**Changeable:** No

Defines a set of properties which override the default values in `colModel`. For example if you want to make all columns not sortable, then only one propery here can be specified instead of specifying it in all columns in `colModel`

### `datatype`
**Type:** string
**Default:** `'xml'`
**Changeable:** Yes

Defines in what format to expect the data that fills the grid. Valid options are

 - `'xml'`: we expect data in XML format
 - `'xmlstring'`: we expect XML data as string
 - `'json'`: we expect data in JSON format
 - `'jsonp'`: we expect data in JSON format from a different server
 - `'jsonstring'`: we expect JSON data as a string
 - `'local'`: we expect data defined at client side (array data)
 - `'script'` we expect Javascript as data
 - `function` custom defined function for retrieving data
 - `'clientSide'` to manually load data via the data array

See [colModel API](./colModel.md) and Retrieving Data

#### `data`
**Type:** array
**Default:** `[]`
**Changeable:** Yes

An array that stores the local data passed to the grid. You can directly point to this variable in case you want to load an array data. It can replace the `addRowData` method which is slow on relatively big data

#### `datastr`
**Type:** string
**Default:** `null`
**Changeable:** Yes

The string of data when `datatype` parameter is set to `'xmlstring'` or `'jsonstring'`

#### `jsonReader`
**Type:** object
**Default:** `{}`
**Changeable:** No

Describes the structure of the expected JSON data. For a full description and default setting, see Retrieving Data JSON Data

#### `xmlReader`
**Type:** object
**Default:** `{}`
**Changeable:** No

Describes the structure of the expected XML data. For a full description refer to Retrieving Data in XML Format.


## Rendering

### `altRows`
**Type:** boolean
**Default:** `false`
**Changeable:** Yes. Requires reload

Set a zebra-striped grid (alternate rows have different styles)

#### `altclass`
**Type:** string
**Default:** `'ui-priority-secondary'`
**Changeable:** Yes. Requires reload

The class that is used for applying different styles to alternate (zebra) rows in the grid. You can construct your own class and replace this value.

This option is valid only if the `altRows` option is set to `true`

### `autowidth`
**Type:** boolean
**Default:** `false`
**Changeable:** No

When set to `true`, the grid width is recalculated automatically to the width of the parent element. This is done only initially when the grid is created. In order to resize the grid when the parent element changes width you should apply custom code and use the `setGridWidth` method for this purpose

### `cellLayout`
**Type:** integer
**Default:** `5`
**Changeable:** No

This option determines the padding + border width of the cell. Usually this should not be changed, but if custom changes to the td element are made in the grid CSS file, this will need to be changed. The initial value of `5` means

```
paddingLeft (2) + paddingRight (2) + borderLeft (1) = 5
```

### `direction`
**Type:** string
**Default:** `'ltr'`
**Changeable:** No

Determines the direction of text in the grid. The default is `ltr` (Left To Right). When set to `rtl` (Right To Left) the grid automatically changes the direction of the text. It is important to note that in one page we can have two (or more) grids where the one can have direction `ltr` while the other can have direction `rtl`.

### `forceFit`
**Type:** boolean
**Default:** `false`
**Changeable:** No

If set to `true`, and a column's width is changed, the adjacent column (to the right) will resize so that the overall grid width is maintained (e.g., reducing the width of column 2 by 30px will increase the size of column 3 by 30px). In this case there is no horizontal scrollbar. Note: This option is not compatible with `shrinkToFit` option - i.e if `shrinkToFit` is set to `false`, `forceFit` is ignored.

### `headertitles`
**Type:** boolean
**Default:** `false`
**Changeable:** No

If the option is set to `true` the `title` attribute is added to the column headers.

### `height`
**Type:** mixed
**Default:** `150`
**Changeable:** No. Method available

The height of the grid. Can be set as number (in this case we mean pixels) or as percentage (only `100%` is accepted) or `auto`.

### `idPrefix`
**Type:** string
**Default:** `''`
**Changeable:** Yes

When set, this string is added as prefix to the id of the row when it is built.

### `resizeclass`
**Type:** string
**Default:** `''`
**Changeable:** No

Assigns a class to columns that are resizable so that we can show a resize handle only for ones that are resizable.

### `rowNum`
**Type:** integer
**Default:** `20`
**Changeable:** Yes

Sets how many records we want to view in the grid. This parameter is passed to the URL for use by the server routine retrieving the data. Note that if you set this parameter to `10` (i.e. retrieve 10 records) and your server returns 15 then only 10 records will be loaded. Set this parameter to -1 (unlimited) to disable this checking.

### `shrinkToFit`
**Type:** boolean or integer
**Default:** `true`
**Changeable:** No

Defines if the the width of the columns of the grid should be recalculated, taking into consideration the width of the grid. If this value is `true`, and the width of the columns is also set, then every column is scaled in proportion to its width.

For example, if we define two columns with widths 80 and 120 pixels, but want the grid to have a width of 300 pixels, then the columns will stretch to fit the entire grid, and the extra width assigned to them will depend on the width of the columns themselves and the extra width available.

The recalculation is done as follows: the first column gets the width

```
(300(new width)/200(sum of all widths))*80(first column width) = 120
```

and the second column gets the width

```
(300(new width)/200(sum of all widths))*120(second column width) = 180
```

Now the widths of the columns sum up to 300 pixels, which is the width of the grid.

If the value is `false` and the `width` option is set, then no re-sizing happens whatsoever. So in this example, if `shrinkToFit` is set to `false`, column one will have a width of 80 pixels, column two will have a width of 120 pixels and the grid will retain the width of 300 pixels. If the value of `shrinkToFit` is an integer, the width is calculated according to it.

### `width`
**Type:** integer
**Default:** _none_
**Changeable:** No. Method available

If this option is not set, the width of the grid is the sum of the widths of the columns defined in the `colModel` (in pixels). If this option is set, the initial width of each column is set according to the value of the `shrinkToFit` option.

## User Interface

### `caption`
**Type:** string
**Default:** `''`
**Changeable:** No. Method available

Defines the caption for the grid. This caption appears in the caption layer, which is above the header layer (see How It Works). If the string is empty the caption does not appear.

#### `hidegrid`
**Type:** boolean
**Default:** `true`
**Changeable:** No

Enables or disables the show/hide grid button, which appears on the right side of the caption layer (see How It Works). Takes effect only if the `caption` property is not empty.

#### `hiddengrid`
**Type:** boolean
**Default:** `false`
**Changeable:** No

If set to `true` the grid is initially is hidden. The data is not loaded (no request is sent) and only the caption layer is shown. When the show/hide button is clicked for the first time to show grid, the request is sent to the server, the data is loaded, and grid is shown. From this point we have a regular grid. This option has effect only if the `caption` property is not empty and the `hidegrid` property is set to `true`.

### `footerrow`
**Type:** boolean
**Default:** `false`
**Changeable:** No

If set to `true` this will place a footer table with one row below the grid records and above the pager. The number of columns equals what is specified in `colModel`

#### `userData`
**Type:** object
**Default:** `{}`
**Changeable:** No

Contains custom information from the request. Can be used at any time.

#### `userDataOnFooter`
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

When set to `true` we directly place the user data array `userData` in the footer. The rules are as follows: If the `userData` array contains a name which matches any name defined in `colModel`, then the value is placed in that column. If there are no such values nothing is placed. Note that if this option is used we use the current formatter options (if available) for that column.

### `hoverrows`
**Type:** boolean
**Default:** `true`
**Changeable:** Yes

When set to `false` the effect of mouse hovering over the grid data rows is disabled.

### `rownumbers`
**Type:** boolean
**Default:** `false`
**Changeable:** No

If this option is set to `true`, a new column at left of the grid is added. The purpose of this column is to count the number of available rows, beginning from 1. In this case `colModel` is extended automatically with new element with the name `rn`. Note: Do not to use the name `rn` in the `colModel`.

#### `rownumWidth`
**Type:** integer
**Default:** `25`
**Changeable:** No

Determines the width of the row number column if `rownumbers` option is set to `true`.

### `singleSelectClickMode`
**Type:** string
**Default:** `'toggle'`
**Changeable:** Yes

When `multiselect` is `false`, clicking on a selected row will
deselect it. Set this to `'selectonly'` to disallow deselection

### `multiselect`
**Type:** boolean
**Default:** `false`
**Changeable:** No. See HOWTO

If this flag is set to `true` a multi selection of rows is enabled. A new column at left side containing checkboxes is added. Can be used with any `datatype` option.

#### `multikey`
**Type:** string
**Default:** `''`
**Changeable:** Yes

Defines the key which should be pressed when we make multiselection. The possible values are:

 - `shiftKey`: the user should press Shift Key
 - `altKey`: the user should press Alt Key
 - `ctrlKey`: the user should press Ctrl Key

This option is only used when the `multiselect` is set to `true`.

#### `multiboxonly`
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

When `multiboxonly` is also to `true`, the multiselection is done only when the checkbox is clicked. Clicking in any other row (suppose the checkbox is not clicked) deselects all rows and selects the current row.

This option is only used when the `multiselect` is set to `true`.

#### `multiselectWidth`
**Type:** integer
**Default:** `20`
**Changeable:** No

Determines the width of the checkbox column created

This option is only used when the `multiselect` is set to `true`.

### Sorting

#### `deselectAfterSort`
**Type:** boolean
**Default:** `true`
**Changeable:** Yes

Applicable only when we use `datatype: 'local'`. Deselects currently selected row(s) when a sort is applied.

#### `multiSort`
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

If set to `true` enables the multisorting. The options works if the `datatype` is `'local'`. In case when the data is obtained from the server the `sidx` parameter contains the `order` clause. It is a comma separated string in format `field1 asc, field2 desc …, fieldN`. Note that the last field does not not have `asc` or `desc`. It should be obtained from `sord` parameter
When the option is `true` the behavior is as follows:

- The first click of the header field sorts the field depending on the `firstsortoption` parameter in `colModel` or `sortorder` grid parameter.
- The next click reverses the sort order.
- The third click removes the sorting from this field

#### `sortable`
**Type:** boolean
**Default:** `false`
**Changeable:** No

When set to `true`, this option allows reordering columns by dragging and dropping them with the mouse. Since this option uses the jQuery UI sortable widget, be sure to load this widget and its related files. Also, be sure to select the jQuery UI Addons option under the jQuery UI Addon Methods section while downloading jqGrid if you want to use this facility. Note: The `colModel` object also has a property called `sortable`, which specifies if the grid data can be sorted on a particular column or not.

#### `sortname`
**Type:** string
**Default:** `''`
**Changeable:** Yes

The column according to which the data is to be sorted when it is initially loaded from the server (note that you will have to use datatypes `'xml'` or `'json'` to load remote data). This parameter is appended to the URL. If this value is set and the index (name) matches the name from `colModel`, then an icon indicating that the grid is sorted according to this column is added to the column header. This icon also indicates the sorting order - descending or ascending (see the parameter `sortorder`). Also see `prmNames`.

#### `sortorder`
**Type:** string
**Default:** `'asc'`
**Changeable:** Yes

The initial sorting order (ascending or descending) when we fetch data from the server using datatypes `'xml'` or `'json'`. This parameter is appended to the URL - see `prnNames`. The two allowed values are `asc` or `desc`

#### `viewsortcols`
**Type:** string
**Default:** `[false, 'vertical', true]`
**Changeable:** No

The purpose of this parameter is to define a different look and behavior for the sorting icons (up/down arrows) that appear in the column headers. This parameter is an array:

 - The first parameter determines if sorting icons should be visible on all the columns that have the `sortable` property set to `true`.
  - `true` causes all icons in all sortable columns to be visible
  - `false` sets the icon to be visible only on the column on which that data has been last sorted.
 - The second parameter determines how icons should be placed
  - `'vertical'` means that the sorting arrows are one under the other.
  - `'horizontal'` means that the arrows should be next to one another.
 - The third parameter determines the click functionality.
  - `true` means the data is sorted if the user clicks anywhere in the column's header, not only the icons.
  - `false` means the data is sorted only when the sorting icons in the headers are clicked.

Important: If you are setting the third element to `false`, make sure that you set the first element to `true`; if you don't, the icons will not be visible and the user will not know where to click to be able to sort since clicking just anywhere in the header will not guarantee a sort.

### Scrolling

#### `scroll`
**Type:** boolean or integer
**Default:** `false`
**Changeable:** No

Creates dynamic scrolling grids. When enabled, the pager elements are disabled and we can use the vertical scrollbar to load data. When set to `true` the grid will always hold all the items from the start through to the latest point ever visited.

When `scroll` is set to an integer value (e.g. `1`), the grid will just hold the visible lines. This allow us to load the data in portions whitout caring about memory leaks. In addition to this we have an optional extension to the server protocol: npage (see `prmNames` array). If you set the `npage` option in `prmNames`, then the grid will sometimes request more than one page at a time; if not, it will just perform multiple GET requests.

Note that this option is not available when `height` is set to `'auto'` or `'100%'`.

#### `scrollOffset`
**Type:** integer
**Default:** `18`
**Changeable:** No. Method available

Determines the width of the vertical scrollbar. Since different browsers interpret this width differently (and it is difficult to calculate it in all browsers) this can be changed.

#### `scrollTimeout`
**Type:** integer
**Default:** `200` (milliseconds)
**Changeable:** Yes

This controls the timeout handler when `scroll` is set to `1`.

#### `scrollrows`
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

When enabled, selecting a row with setSelection scrolls the grid so that the selected row is visible. This is especially useful when we have a verticall scrolling grid and we use form editing with navigation buttons (next or previous row). On navigating to a hidden row, the grid scrolls so that the selected row becomes visible.

### `toolbar`
**Type:** array
**Default:** `[false, '']`
**Changeable:** No

This option defines the toolbar of the grid. This is an array with two elements in which the first element's value enables the toolbar and the second defines the position relative to the body layer (table data). Possible values are `'top'`, `'bottom'`, and `'both'`. When we set it like

```
toolbar: [true,”both”]
```

two toolbars are created – one on the top of table data and the other at the bottom of the table data. When we have two toolbars, then we create two elements (div). The id of the top bar is constructed by concatenating the string `“t_”` and the id of the grid, like `“t_” + id_of_the_grid` and the id of the bottom toolbar is constructed by concatenating the string `“tb_”` and the id of the grid, like `“tb_” + id_of_the grid`. In the case where only one toolbar is created, we have the id as `“t_” + id_of_the_grid`, independent of where this toolbar is located (top or bottom)

## Pager

### `pager`
**Type:** mixed
**Default:** `''`
**Changeable:** No

Defines that we want to use a pager bar to navigate through the records. This must be a valid HTML element. Note that the navigation layer (the “pager” div) can be positioned anywhere you want, determined by your HTML; in  most examples, the pager will appear after the body layer. Valid values are

 - Javascript object, e.g. `pager`
 - jQuery selector, e.g. `#pager` (recommended)
 - jQuery object, e.g. `$('#pager')`

See Pager. Currently only one pagebar is possible.

### `pagerpos`
**Type:** string
**Default:** `'center'`
**Changeable:** No

Determines the position of the pager in the grid. By default the pager element when created is divided in 3 parts (one part for pager, one part for navigator buttons and one part for record information).

### `pgbuttons`
**Type:** boolean
**Default:** `true`
**Changeable:** No

Determines if the pager buttons should be shown in the pager bar.

### `pginput`
**Type:** boolean
**Default:** `true`
**Changeable:** No

Determines if the input box, where the user can change the number of the requested page, should be shown in the pager bar.

### `pgtext`
**Type:** string
**Default:** _See lang file_
**Changeable:** Yes

Show information about current page status. The first value is the current loaded page. The second value is the total number of pages.

### `rowList`
**Type:** array
**Default:** `[]`
**Changeable:** No

An array to construct a select box element in the pager for changing the number of the visible rows. When changed during the execution, this parameter replaces the `rowNum` parameter that is passed to the URL. If the array is empty, this element does not appear in the pager. Typically you can set this like `[10, 20, 30]`. If the `rowNum` parameter is set to 30 then the selected value in the select box is 30.

### `toppager`
**Type:** boolean
**Default:** `false`
**Changeable:** No

When enabled this option places a pager element at top of the grid, below the caption (if available). If another pager is defined, both can coexist and are kept in sync. The id of the newly created pager is the combination `grid_id + “_toppager”`.

### `viewrecords`
**Type:** boolean
**Default:** `false`
**Changeable:** No

If `true`, jqGrid displays the beginning and ending record number in the grid, out of the total number of records in the query. This information is shown in the pager bar (bottom right by default) in this format: “View X to Y out of Z”. If this value is `true`, there are other parameters that can be adjusted:

#### `emptyrecords`
**Type:** string
**Default:** _see lang file_
**Changeable:** No

The string to display when the returned (or the current) number of
records in the grid is zero. This option is valid only if the `viewrecords` option is set to `true`.

#### `recordpos`
**Type:** string
**Default:** `'right'`
**Changeable:** No

Determines the position of the record information in the pager. Can be `left`, `center` or `right`.

#### `recordtext`
**Type:** string
**Default:** _See lang file_
**Changeable:** Yes

Text that can be shown in the pager. This text appears only if the total number of records is greater then zero. In order to show or hide some information the items in `{}` mean the following:

 - `{0}`: the start position of the records depending on page number and number of requested records
 - `{1}`: the end position
 - `{2}`: total records returned from the server.


## AJAX

### `ajaxGridOptions`
**Type:** object
**Default:** `{}`
**Changeable:** Yes

This option allows to set global AJAX settings for the grid when
requesting data. Note that with this option it is possible to
overwrite all current AJAX settings in the grid including the `error`, `complete` and `beforeSend` events.

### `ajaxSelectOptions`
**Type:** object
**Default:** `{}`
**Changeable:** Yes

This option allows to set global AJAX settings for the select element when the select is obtained via `dataUrl` option in `editoptions` or `searchoptions` objects

### `autoencode`
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

When set to `true`, incoming data from the server and posted data from
editing modules are HTML encoded. For example `<` will be converted to `&lt;`.

### `loadonce`
**Type:** boolean
**Default:** `false`
**Changeable:** No

If this flag is set to `true`, the grid loads the data from the server only once (using the appropriate `datatype`). After the first request, the `datatype` parameter is automatically changed to `'local'` and all further manipulations are done on the client side. The functions of the pager (if present) are disabled.

### `loadtext`
**Type:** string
**Default:** `'Loading…'`
**Changeable:** No

The text which appears when requesting and sorting data. This parameter is located in language file.

### `loadui`
**Type:** string
**Default:** `'enable'`
**Changeable:** Yes

This option controls what to do when an AJAX operation is in progress.

 - `'disable'`: disables the jqGrid progress indicator. This way you can use your own indicator.
 - `'enable'`: shows the text set in the `loadtext` property in the center of the grid.
 - `'block'`: displays the text set in the `loadtext` property and blocks all actions in the grid until the AJAX request completes. Note that this disables paging, sorting and all actions on toolbar, if any.

### `mtype`
**Type:** string
**Default:** `'GET'`
**Changeable:** Yes

Defines the type of request to make (“POST” or “GET”)

### `page`
**Type:** integer
**Default:** `1`
**Changeable:** Yes

Set the initial page number when we make the request. This parameter is passed to the URL for use by the server routine retrieving the data.

### `prmNames`
**Type:** object
**Default:** _see below_
**Changeable:** Yes

This customizes names of the fields sent to the server on a POST request. For example, with this setting, you can change the sort order element from `sidx` to `mysort` by setting

```
prmNames: {sort: “mysort”}
```

The string that will be POST-ed to the server will then be

```
myurl.php?page=1&rows=10&mysort=myindex&sord=asc
```

rather than

```
myurl.php?page=1&rows=10&sidx=myindex&sord=asc
```

So the value of the column on which to sort upon can be obtained by looking at `$_POST['mysort']` in PHP. When some parameter is set to `null`, it will be not sent to the server. For example if we set

```
prmNames: {nd: null}
```

the `nd` parameter will not be sent to the server. For `npage` option see the `scroll` option.

These options have the following meaning and default values:

 - `page`: the requested page (default value `'page'`)
 - `rows`: the number of rows requested (default value `'rows'`)
 - `sort`: the sorting column (default value `'sidx'`)
 - `order`: the sort order (default value `'sord'`)
 - `search`: the search indicator (default value `'_search'`)
 - `nd`: the time passed to the request (for IE browsers not to cache the request) (default value `'nd'`)
 - `id`: the name of the id when posting data in editing modules (default value `'id'`)
 - `oper`: the operation parameter (default value `'oper'`)
 - `editoper`: the name of operation when the data is posted in edit mode (default value `'edit'`)
 - `addoper`: the name of operation when the data is posted in add mode (default value `'add'`)
 - `deloper`: the name of operation when the data is posted in delete mode (default value `'del'`)
 - `totalrows`: the number of the total rows to be obtained from server - see `rowTotal` (default value `'totalrows'`)
 - `subgridid`: the name passed when we click to load data in the subgrid (default value `'id'`)

### `postData`
**Type:** object
**Default:** `{}`
**Changeable:** Yes

This array is appended directly to the URL. This is an associative array and can be used this way: `{name1: value1…}`. See API methods for manipulation.

### `rowTotal`
**Type:** integer
**Default:** `null`
**Changeable:** Yes

This parameter can instruct the server to load the total number of rows needed to work on. Note that `rowNum` determines the total records displayed in the grid, while `rowTotal` determines the total number of rows on which we can operate. When this parameter is set, we send an additional parameter to the server named `totalrows`. You can check for this parameter, and if it is available you can replace the `rows` parameter with it. Mostly this parameter can be combined with `loadonce` set to `true`.

### `url`
**Type:** string
**Default:** `null`
**Changeable:** Yes

The URL of the file that returns the data needed to populate the grid. May be set to `'clientArray'` to manually post data to server; see Inline Editing.

## Grouping

### `grouping`
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

Enables grouping in grid. Please refer to the [Grouping page](./grouping.md).

### `groupingView`
**Type:** object
**Default:** `null`
**Changeable:** Yes

The grouping view options, see the [Grouping page](./grouping.md) for more information.

## Search

### `ignoreCase`
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

By default the local searching is case-sensitive. To make the local search and sorting not case-insensitive set this options to `true`

### `searchdata`
**Type:** object
**Default:** `{}`
**Changeable:** Yes

This property contains the searched data in `name: value` pairs.

## Editing

### `cellEdit`
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

Enables (disables) cell editing. See Cell Editing for more details

### `cellsubmit`
**Type:** string
**Default:** `'remote'`
**Changeable:** Yes

Determines where the contents of the cell are saved. Possible values are `'remote'` and `'clientArray'`. See Cell Editing for more details.

### `cellurl`
**Type:** string
**Default:** `null`
**Changeable:** Yes

The URL where the cell is to be saved. See Cell Editing for more details

### `editurl`
**Type:** string
**Default:** `null`
**Changeable:** Yes

Defines the URL for inline and form editing. May be set to `'clientArray'` to manually post data to server, see Inline Editing.

### `inlineData`
**Type:** object
**Default:** `{}`
**Changeable:** Yes

An array used to add content to the data posted to the server when we are in inline editing.

### `savedRow`
**Type:** object
**Default:** `{}`
**Changeable:** No

This is a readonly property and is used in inline and cell editing modules to store the data, before editing the row or cell. See Cell Editing and Inline Editing.

## Tree Grid

### `ExpandColClick`
**Type:** boolean
**Default:** `true`
**Changeable:** No

When `true`, the node is expanded or collapsed when we click anywhere on the text in the expanded column. In this case it is not necessary to click exactly on the icon.

### `ExpandColumn`
**Type:** string
**Default:** `null`
**Changeable:** No

Indicates which column (name from `colModel`) should be used to expand the tree grid. If not set the first one is used. Valid only when the `treeGrid` option is set to `true`.

### `treedatatype`
**Type:** mixed
**Default:** `null`
**Changeable:** No

Gives the initial data type (see `datatype` option). Usually this should not be changed. During the reading process this option is equal to the `datatype` option.

### `treeGrid`
**Type:** boolean
**Default:** `false`
**Changeable:** No

Enables (disables) the tree grid format. For more details see Tree Grid

### `treeGridModel`
**Type:** string
**Default:** `nested`
**Changeable:** No

Determines the method used for the treeGrid. The value can be either nested or adjacency. See Tree Grid

### `treeIcons`
**Type:** array
**Default:** _see below_
**Changeable:** No

This array sets the icons used in the tree grid. The icons should be a valid names from UI theme roller images. The default values are:

```javascript
{
    plus: 'ui-icon-triangle-1-e',
    minus: 'ui-icon-triangle-1-s',
    leaf: 'ui-icon-radio-off'
}
```

### `treeReader`
**Type:** array
**Default:** _see below_
**Changeable:** No

Extends the `colModel` defined in the basic grid. The fields described here are appended to end of the `colModel` array and are hidden. This means that the data returned from the server should have values for these fields. For a full description of all valid values see Tree Grid.

### `tree_root_level`
**Type:** integer
**Default:** `0`
**Changeable:** No

Defines the level where the root element begins when treeGrid is enabled.

## Subgrid

### `subGrid`
**Type:** boolean
**Default:** `false`
**Changeable:** No

If the `subGrid` option is enabled, an additional column at left side is added to the basic grid. This column contains a 'plus' image which indicates that the user can click on it to expand the row. By default all rows are collapsed. See Subgrid

### `subGridOptions`
**Type:** object
**Default:** _see Subgrid_
**Changeable:** Yes

A set of additional options for the subgrid. For more information and default values see Subgrid.

### `subGridModel`
**Type:** array
**Default:** `[]`
**Changeable:** No

This property, which describes the model of the subgrid, has an effect only if the `subGrid` property is set to `true`. It is an array in which we describe the column model for the subgrid data. For more information see Subgrid.

### `subGridType`
**Type:** mixed
**Default:** `null`
**Changeable:** Yes

This option allows loading a subgrid as a service. If not set, the `datatype` parameter of the parent grid is used.

### `subGridUrl`
**Type:** string
**Default:** `''`
**Changeable:** Yes

This option has effect only if the `subGrid` option is set to
`true`. This option points to the URL from which we get the data for
the subgrid. jqGrid adds the id of the row to this URL as parameter. If there is a need to pass additional parameters, use the `params` option in `subGridModel`. See Subgrid

### `subGridWidth`
**Type:** integer
**Default:** `20`
**Changeable:** No

Defines the width of the subgrid column if subgrid is enabled.

## Performance

### `deepempty`
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

This option should be set to `true` if an event or a plugin is attached to the table cell. The option uses jQuery empty for the row and all its child elements. This of course has speed overhead, but prevents memory leaks. This option should be set to `true` if sortable rows and/or columns are activated.

### `gridview`
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

Reading a relatively large data set can cause performance problems, because every row is inserted into the grid separately. With the `gridview` option (set to `true`), the rows can be inserted all at once. The result is a grid that is 5 to 10 times faster. Of course, there are some limitations: If set to `true` we can not use `treeGrid`, `subGrid`, or the `afterInsertRow` event.

## Information

### `gridstate`
**Type:** string
**Default:** `visible`
**Changeable:** No

Contains the current state of the grid (i.e. when used with `hiddengrid`, `hidegrid` and `caption` options). Can have either of two states: `visible` or `hidden`.

### `lastpage`
**Type:** integer
**Default:** `0`
**Changeable:** No

Contains the total number of pages returned from the request. If you use a function as `datatype`, `your_grid.setGridParam({lastpage: your_number})` can be used to specify the max pages in the pager.

### `lastsort`
**Type:** integer
**Default:** `0`
**Changeable:** No

Contains the index of last sorted column beginning from 0.

### `reccount`
**Type:** integer
**Default:** `0`
**Changeable:** No

Contains the exact number of rows in the grid. Do not confuse this with `records` parameter. Although in many cases they may be equal, there are cases where they are not. For example, if you define `rowNum` to be `15`, but the request to the server returns 20 records, the `records` parameter will be `20`, but the `reccount` parameter will be `15` (the grid you will have 15 records and not 20).

### `records`
**Type:** integer
**Default:** `0`
**Changeable:** No

Contains the number of records returned as a result of a query to the server.

### `selarrrow`
**Type:** array
**Default:** `[]`
**Changeable:** No

Contains the currently selected rows when `multiselect` is set to `true`. This is a one-dimensional array and the values in the array correspond to the selected ids in the grid.

### `selrow`
**Type:** string
**Default:** `null`
**Changeable:** No

Contains the id of the last selected row. If you sort or use paging, this is set to `null`.

### `totaltime`
**Type:** integer
**Default:** `0`
**Changeable:** No

Contains the loading time of the records - currently available only
when we load XML or JSON data. The measurement begins when the request is complete and ends when the last row is added.

***
Content licensed under [Creative Commons Non Commercial Share Alike](http://creativecommons.org/licenses/by-nc-sa/3.0/). Original content taken from [jqGrid wiki](http://www.trirand.com/jqgridwiki/).

---
title: Grouping
section: Configuration
---

The simplest way to group in jsgrid is to enable grouping with the
grid option `grouping` and define a field name on which grouping
occurs. The name value specified should correspond to the name in the
`colModel` The definition is done with the `groupField` array which is a part of the grid option `groupingView`.

It is important to note that if you want the grouping to be correct, then the data should come from server to the grid sorted by that field. When we are in local mode (the data is an array) the data is grouped (sorted) automatically so there is no need to define any additional sort column.

In order to inform the server that we want to have a grouped data, jqGrid adds to the `sidx` parameter the `groupField` name on which we group. This done only if we have enabled the grouping and the data is remote.

## Limitations

When `grouping` is enabled, the following options will be set explicitly in the code:
* `scroll` = `false`
* `rownumbers` = `false`
* `treeGrid` = `false`
* `gridview` = `true` (The `afterInsertRow` event also does not fire)

Please refer to the [options](./options.md) page for more information.

## Grouping options
All grouping options are set as grid options and can be changed dynamically using the `setGridParam` method.
Two options are related to grouping:

  - `grouping`
  - `groupingView`

The first option `grouping` is boolean and enables or disables the
grouping feature. The default value is `false`.

The `groupingView` option is an object and has a lot of sub-options.
Below is a example on how this should be used:

```javascript
$("#grid").jqGrid({
  //...
  groupingView : {
	 groupField : ['name', 'ínvdate'],
	 groupOrder : ['asc', 'desc']
  }
  //...
});
```

Below is the list of the options that can be set in `groupingView`:

### `groupField`
**Type:** array
**Default:** `[]`

Defines the name from [Column model](./colModel.md) on which we group. The first value is the first level, the second value is the second level and so on.

### `displayField`
**Type:** array
**Default:** `null`

Defines the column we use for the display data for the group.

### `titleField`
**Type:** array
**Default:** `null`

If specified defines the column we use for the title for the group - otherwise there is no title for the group header. This allows us to truncate the display value and still display the full value to the user if they hover.

### `groupOrder`
**Type:** array
**Default:** `[]`

Defines the initial sort order of the group level. Can be `'asc'` for ascending or `'desc'` for descending order. If the grouping is enabled the default value is `'asc'`.

### `groupText`
**Type:** array
**Default:** `[]`

Defines the grouping header text for the group level that will be
displayed in the grid. By default if defined the value is `'{0}'`,
which means that the group value name will be displayed.  It is
possible to specify another value `{1}` which means that the total
count of this group will be displayed, too. It is possible to set
any valid HTML content.

### `groupColumnShow`
**Type:** array
**Default:** `[]`

Shows or hides the column on which we group. The value here should be a boolean `true`/`false` for the group level. If the grouping is enabled we set this value to `true`.

### `groupSummary`
**Type:** array
**Default:** `[]`

Enable or disable the summary row of the current group level. If grouping is set, the default value for the group is `false`.

#### `groupSummaryPos`
**Type:** array
**Default:** `[]`

Set the position of the summary row at current group level. Possible
 values are:
 - `'header'` - The summary values are placed in the group header row.
 - `'footer'` - An additional row at end of the group level is built and the summary values are placed there

#### `showSummaryOnHide`
**Type:** boolean
**Default:** `false`

Show or hide the summary row when we collapse the group.

### `hideFirstGroupCol`
**Type:** boolean
**Default:** `false`

If set to `true` the values in the first column are replaced with empty ones so that we have a pretty view. This usually is set if the first column is a group column.

### `groupCollapse`
**Type:** boolean
**Default:** `false`

Defines if the grid should initially show or hide the rows in the group.

### `plusicon`
**Type:** string
**Default:** `'ui-icon-circlesmall-plus'`

Set the icon from jQuery UI theme that will be used if the grouped row is collapsed.

### `minusicon`
**Type:** string
**Default:** `'ui-icon-circlesmall-minus'`

Set the icon from jQuery UI theme that will be used if the grouped row is expanded.

### `isInTheSameGroup`
**Type:** array
**Default:** `null`

The elements of the array correspond to the number of the
groups. Every element of this array is a function which should return
`true` or `false`. In case if it returns `false`, the element will not
be added to the group. Parameters passed to this function are : previous value, current value, group index, group object.

### `formatDisplayField`
**Type:** array
**Default:** `null`

The elements of the array correspond to the number of the
groups. Every element should return a value which will be displayed as
the grouped value. Parameters passed to this function are: current value, source value, `colModel` option, group index and group object.

## `colModel` Options

If `groupSummary` is enabled, we use additional options
in the  [Column model](./colModel.md) to configure the summary
field.

### `summaryType`
**Type:** mixed
**Default:** `null`

The option determines what type of calculation we should do with the current group value applied to column. Currently we support the following build in functions:

 - `'sum'` - apply the sum function to the current group value and return the result
 - `'count'` - apply the count function to the current group value and return the result
 - `'avg'` - apply the average function to the current group value and return the result
 - `'min'` - apply the min function to the current group value and return the result
 - `'max'` - apply the max function to the current group value and return the result

The option can be defined as a function. If defined we pass three parameters to it - the current value, the name and the record object. The function should return value. Note that this value will be used again for the group value until it changes.

Below is a example on using this function - simulating the `sum` function.

```javascript
function mysum(val, name, record)
{
    return parseFloat(val||0) + parseFloat((record[name]||0));
}

$("#grid").jqGrid({
  //...
  colModel : [
     //{..},
     {name: 'amount', index: 'amount', width: 80, align: "right", sorttype: 'number', formatter: 'number', summaryType: mysum},
     //...
  ],
  //...
});
```

### `summaryTpl`
**Type:** string
**Default:** `'{0}'`

This option acts as a template which can be used in the summary footer
row. The default means that this will print the summary value. The parameter can contain any valid HTML code.

### `summaryRound`
**Type:** integer
**Default:** `undefined`

This option determines the length of the remaining part after the
decimal point.

### `summaryRoundType`
**Type:** string
**Default:** `'round'`

This is the rounding method selector. Possible values are:

 - `'round'` - just round it and do not keep trailing zeroes
 - `'fixed'` - round it and keep the given fixed number of digits even zeroes


This parameter works only if the `summaryRound` is defined.


***
Content licensed under [Creative Commons Non Commercial Share Alike](http://creativecommons.org/licenses/by-nc-sa/3.0/). Original content taken from [jqGrid wiki](http://www.trirand.com/jqgridwiki/).

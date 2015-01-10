---
title: Configuration // Grouping
section: Configuration
---

# Grouping

The simplest way to group in grid.js is to enable grouping with the grid option `grouping` and define a field name on which grouping occurs. The name value specified should correspond to the name in the colModel
The definition is done with array `groupField` which is a part of the grid option `groupingView`.

It is important to note that if you want the grouping to be correct, then the data should come from server to the grid sorted by that field. When we are in local mode (the data is an array) the data is grouped (sorted) automatically so there is no need to define any additional sort column.

In order to inform the server that we want to have a grouped data, jqGrid add to the `sidx` parameter the groupField name on which we group. This done only if we have enabled the grouping and the data is remote.

## Limitations

When the grouping is enabled, the following options will be set explicitly in the code:
* `scroll` = `false`
* `rownumbers` = `false`
* `treeGrid` = `false`
* `gridview` = `true` (The `afterInsertRow` event also does not fire)

Please refer to the [options](./Options.html) page for more information.

## Grouping options
All options in grouping are set as grid options and can be changed dynamically using the setGridParam method.
Two options are related to grouping 

  - grouping
  - groupingView

The first option `grouping` is boolean and enables or disables the grouping feature into the grid. The default value of this option is `false`. To enable grouping set it to `true`.

The `groupingView` option is an object and has a lot of sub-options.
Below is a example on how this should be used:

	$("#grid").jqGrid({ 
	  ...
	  groupingView : { 
		 groupField : ['name', 'ínvdate'],
		 groupOrder : ['asc', 'desc'] 
	  }
	  ...
	});

Below is the list of the options that are part of `groupingView` option

### Grouping view options

#### groupField
**Type:** array
**Default:** `[]`
**Changeable:** Yes

Defines the name from [Column model](./colModel.html) on which we group. The first value is the first lavel, the second values is the second level and so on.

#### displayField
**Type:** array
**Default:** `null`
**Changeable:** Yes

If specified defines the column we use for the display data for the group.

#### titleField
**Type:** array
**Default:** `null`
**Changeable:** Yes

If specified defines the column we use for the title for the group - otherwise there is no title for the group header. This allows us to truncate the display value and still display the full value to the user if they hover.

#### groupOrder
**Type:** array
**Default:** `[]`
**Changeable:** Yes

Defines the initial sort order of the group level. Can be asc for ascending or desc for descending order. If the grouping is enabled the default value is asc.

#### groupText
**Type:** array
**Default:** `[]`
**Changeable:** Yes

Defines the grouping header text for the group level that will be displayed in the grid. By default if defined the value if {0} which means that the group value name will be displayed.  It is possible to specify another value {1} which meant the the total count of this group will be displayed too. It is possible to set here any valid html content.

#### groupColumnShow
**Type:** array
**Default:** `[]`
**Changeable:** Yes

Shows or hides the column on which we group. The value here should be a boolean true/false for the group level. If the grouping is enabled we set this value to true.

#### groupSummary
**Type:** array
**Default:** `[]`
**Changeable:** Yes

Enable or disable the summary (footer) row of the current group level. If grouping is set the default value for the group is false.

#### groupSummaryPos
**Type:** array
**Default:** `[]`
**Changeable:** Yes

Set the position of the summary row at current group level. Possible values - header or footer. If set to header the summary values are placed at the same row where the group values is. If footer is set additional row at end of the group level is builded and the summary values are placed here

#### hideFirstGroupCol
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

If set to true the values in the first column are replaced with empty ones so that we have a pretty view. This usually is set if the first column is a group column.

#### showSummaryOnHide
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

Show or hide the summary (footer) row when we collapse the group.

#### groupCollapse
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

Defines if the initially the grid should show or hide the detailed rows of the group.

#### plusicon
**Type:** string
**Default:** `'ui-icon-circlesmall-plus'`
**Changeable:** Yes

Set the icon from jQuery UI theme roller that will be used if the grouped row is collapsed.

#### minusicon
**Type:** string
**Default:** `'ui-icon-circlesmall-minus'`
**Changeable:** Yes

Set the icon from jQuery UI theme roller that will be used if the grouped row is expanded.

#### isInTheSameGroup
**Type:** array
**Default:** `null`
**Changeable:** Yes

The elements of the array correspond to the number of the groups. Every element of this array is a function which should return true or false. In case if it return false the element will be added in the groupt. Parameters passed to this function are : previous value, current value, group index, group object.

#### formatDisplayField
**Type:** array
**Default:** `null`
**Changeable:** Yes

The elements of the array correspond to the number of the groups.Every element should return a value which will be display grouped value. Parameters passed to this function are: current value, source value, colModel option, group index and group object.

***
Content licensed under [Creative Commons Non Commercial Share Alike](http://creativecommons.org/licenses/by-nc-sa/3.0/). Original content taken from [jqGrid wiki](http://www.trirand.com/jqgridwiki/).

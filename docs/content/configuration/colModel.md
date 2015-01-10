---
title: Configuration // Column Model
section: Configuration
---

# ColModel
The colModel property defines the individual grid columns as an array of properties. This is the most important part of the grid.
	jQuery("#gridid").jqGrid({
	...
	   colModel: [ {name:'name1', index:'index1'...}, {...}, ... ],
	...
	});
	
The available colModel properties are listed here, in alphabetical order. The only required property is name. The colModel options can also be get or set using getColProp and setColProp.

### align
**Type:** string
**Default:** `left`
**Changeable:** Yes


Defines the alignment of the cell in the Body layer, not in header cell. Possible values: left, center, right.

### cellattr
**Type:** function
**Default:** `'left'`
**Changeable:** Yes

This function adds attributes dynamically to the cell during the rendering of the data. For example all valid attributes for the table cell can be used or a style attribute with different properties. The function should return string.
Parameters passed to this function are:  
* `rowId`  - the id of the row 
* `val`  - the value which will be added in the cell
* `rawObject` - the raw object of the data row - i.e if datatype is `json` - `array`, if datatype is `xml` `xml node`.
* `cm` - all the properties of this column listed in the colModel
* `rdata` - the data row which will be inserted in the row. This parameter is array of type `name`:`value`, where name is the name in colModel.

### classes
**Type:** string
**Default:** `''`
**Changeable:** Yes

This option allow to add classes to the column. If more than one class will be used a space should be set. By example classes:'class1 class2' will set a class1 and class2 to every cell on that column. In the grid css there is a predefined class ui-ellipsis which allow to attach ellipsis to a particular row.

### datefmt
**Type:** string
**Default:** ISO 8601 Date (yyyy-mm-dd)
**Changeable:** Yes

Governs format of `sorttype:date` (when `datetype` is set to `local`) and editrules `{date:true}` fields. Determines the expected date format for that column. Uses a PHP-like date formatting. Currently "/", "-", and "." are supported as date separators.
Valid formats are:
* `y`, `Y`, `yyyy` for four digit years
* `yy`, `YY` for two digit years
* `m`, `mm` for months
* `d`, `dd` for days.

### defval
**Type:** string
**Default:** `''`
**Changeable:** Yes

The default value for the search field. This option is used only in Custom Searching and will be set as the initial search.

### editoptions
**Type:** array
**Default:** `[]`
**Changeable:** Yes

Array of allowed options (attributes) for `edittype` option.

### editrules
**Type:** array
**Default:** `[]`
**Changeable:** Yes

Sets additional rules for the editable field.

### edittype
**Type:** string
**Default:** `'text'`
**Changeable:** Yes

Defines the edit type for inline and form editing. Possible values: `'text'`, `'textarea'`, `'select'`, `'checkbox'`, `'password'`, `'button'`, `'image'` and `'file'`.

### firstsortorder
**Type:** string
**Default:** `null`
**Changeable:** Yes

If set to asc or desc, the column will be sorted in that direction on first sort.Subsequent sorts of the column will toggle as you'd expect.

### fixed
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

If set to `true` this option does not allow recalculation of the width of the column if `shrinkToFit` option is set to `true`. Also the width does not change if a setGridWidth method is used to change the grid width.

### formoptions
**Type:** array
**Default:** `[]`
**Changeable:** Yes

Defines various options for form editing.

### formatoptions
**Type:** array
**Default:** `null`
**Changeable:** Yes

Format options can be defined for particular columns, overwriting the defaults from the language file.

### formatter
**Type:** mixed
**Default:** `null`
**Changeable:** Yes

The predefined types (string) or custom function name that controls the format of this field.

### frozen
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

If set to true determines that this column will be frozen after calling the setFrozenColumns method.

### hidedlg
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

If set to true this column will not appear in the modal dialog where users can choose which columns to show or hide.

### hidden
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

Defines if this column is hidden at initialization.

### index
**Type:** string
**Default:** `''`
**Changeable:** Yes

The index name when sorting. Passed as sidx parameter.

### key
**Type:** boolean
**Default:** `false`
**Changeable:** Yes

Overwrite the id (defined in readers) from server. Can be set as id for the unique row id. Only one column can have this property. This option have higher priority as those from the readers. If there are more than one key set the grid finds the first one and the second is ignored.

### label
**Type:** string
**Default:** `null`
**Changeable:** No

When colNames array is empty, defines the heading for this column. If both the colNames array and this setting are empty, the heading for this column comes from the name property.

### name
**Type:** string
**Default:** Required field
**Changeable:** No

Set the unique name in the grid for the column. This property is required. As well as other words used as property/event names, the reserved words (which cannot be used for names) include subgrid, cb and rn.

### resizable
**Type:** boolean
**Default:** `true`
**Changeable:** No

Defines if the column can be resized.

### search
**Type:** boolean
**Default:** `true`
**Changeable:** Yes

When used in search modules, disables or enables searching on that column.

### searchoptions
**Type:** array
**Default:** `[]`
**Changeable:** Yes

Defines the search options used searching.

### sortable
**Type:** boolean
**Default:** `true`
**Changeable:** Yes

Defines if this column can be sorted.

### sortfunc
**Type:** function
**Default:** `null`
**Changeable:** Yes

Custom function to make custom sorting when datatype is local. Three parameters a, b and direction are passed. The //a// and //b// parameters are values to be compared direction is numeric 1 and -1 for ascending and descending order. The function should return 1, -1 or 0

### sorttype
**Type:** mixed
**Default:** `'text'`
**Changeable:** Yes

Used when datatype is `'local'`. Defines the type of the column for appropriate sorting. 
Possible values:
* int/integer - for sorting integer
* float/number/currency - for sorting decimal numbers
* date - for sorting date
* text - for text sorting
* function - defines a custom function for sorting. To this function we pass the value to be sorted and it should return a value too.

### stype
**Type:** string
**Default:** `'text'`
**Changeable:** Yes

Determines the type of the element when searching.

### surl
**Type:** string
**Default:** `''`
**Changeable:** Yes

Valid only in Custom Searching and `edittype` : `'select'` and describes the url from where we can get already-constructed select element.

### title
**Type:** boolean
**Default:** `true`
**Changeable:** Yes

If this option is false the title is not displayed in that column when we hover a cell with the mouse.

### unformat
**Type:** function
**Default:** `null`
**Changeable:** Yes

Custom function to "unformat" a value of the cell when used in editing. (Unformat is also called during sort operations. The value returned by unformat is the value compared during the sort.)

### viewable
**Type:** boolean
**Default:** `true`
**Changeable:** Yes

This option is valid only when the `viewGridRow` method is activated. When the option is set to `false` the column does not appear in the view form.

### width
**Type:** number
**Default:** `150`
**Changeable:** No

Set the initial width of the column, in pixels. This value currently cannot be set as a percentage.

### xmlmap
**Type:** string
**Default:** `null`
**Changeable:** Yes

Defines the xml mapping for the column in the incomming xml file. Use a CSS specification for this.


***
Content licensed under [Creative Commons Non Commercial Share Alike](http://creativecommons.org/licenses/by-nc-sa/3.0/). Original content taken from [jqGrid wiki](http://www.trirand.com/jqgridwiki/).

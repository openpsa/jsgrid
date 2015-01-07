---
title: Demos / Grouping Display
---
# Default Options + Grouping with custom display value column

```javascript
	$(document).ready(function () {
		$('#groupingDisplay').jqGrid({
			url:'./data.json',
			datatype: 'json',
			colNames: ['Grouping value', 'Grouping title', 'Display name', 'Value'],
			colModel: [{name: 'groupingValue', hidden: true},
			{name: 'title', hidden: true},
			{name: 'displayName', hidden: true},
			{name: 'value', width: 300}],
			pager: '#groupingDisplayPager',
			grouping: true,
			groupingView: {
				groupField: ['groupingValue'],
				displayField:['displayName'],
				groupColumnShow:[false]
			}
		});
	});
```
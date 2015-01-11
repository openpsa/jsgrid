---
title: Demos / Grouping Display
section: Demos
---
# Default Options + Grouping with custom display value column

```javascript
	$(document).ready(function () {
		$('#grid').jqGrid({
			url:'./data/grouping.json',
			datatype: 'json',
			colNames: ['Grouping value', 'Grouping title', 'Display name', 'Value'],
			colModel: [{name: 'groupingValue', hidden: true},
			{name: 'title', hidden: true},
			{name: 'displayName', hidden: true},
			{name: 'value', width: 300}],
			grouping: true,
			groupingView: {
				groupField: ['groupingValue'],
				displayField:['displayName'],
				groupColumnShow:[false]
			}
		});
	});
```

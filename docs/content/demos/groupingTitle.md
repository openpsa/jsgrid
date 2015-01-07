---
title: Demos / Grouping Title
section: Demos
---
# Default Options + Grouping with custom display value and title columns

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
				titleField:['title'],
				groupColumnShow:[false]
			}
		});
	});
```

---
title: Demos / Grouping
---
# Default Options + Basic Grouping

```javascript
	$(document).ready(function () {
		$('#grouping').jqGrid({
			url:'./grouping.json',
			datatype: 'json',
			colNames: ['Grouping value', 'Grouping title', 'Display name', 'Value'],
			colModel: [{name: 'groupingValue', hidden: true},
			{name: 'title', hidden: true},
			{name: 'displayName', hidden: true},
			{name: 'value', width: 300}],
			pager: '#groupingPager',
			grouping: true,
			groupingView: {
				groupField: ['groupingValue'],
				groupColumnShow:[false]
			}
		});
	});
```
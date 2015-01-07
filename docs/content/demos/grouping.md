---
title: Demos / Grouping
section: Demos
---
# Default Options + Basic Grouping


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
			pager: '#groupingPager',
			grouping: true,
			groupingView: {
				groupField: ['groupingValue'],
				groupColumnShow:[false]
			}
		});
	});
```

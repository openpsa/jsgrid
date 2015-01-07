---
title: Demos / Grouping Title
---
# Default Options + Grouping with custom display value and title columns

```javascript
	$(document).ready(function () {
		$('#groupingTitle').jqGrid({
			url:'./data.json',
			datatype: 'json',
			colNames: ['Grouping value', 'Grouping title', 'Display name', 'Value'],
			colModel: [{name: 'groupingValue', hidden: true},
			{name: 'title', hidden: true},
			{name: 'displayName', hidden: true},
			{name: 'value', width: 300}],
			pager: '#groupingTitlePager',
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
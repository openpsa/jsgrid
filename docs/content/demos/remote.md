---
title: Remote Data
section: Demos
---

Click one of the buttons and see the request / response in your debug
console. Please note that sorting won't work here because the backend
always returns static dummy data (but you can see the parameters being
set in your debug console).

```javascript
$(document).ready(function () {
    $("#grid").jqGrid({
	caption:'Remote data example',
        colModel: [
            { label: 'Inv No', name: 'id', width: 75, key: true },
            { label: 'Date', name: 'invdate', width: 90 },
            { label: 'Client', name: 'name', width: 100 },
            { label: 'Amount', name: 'amount', width: 80 },
            { label: 'Tax', name: 'tax', width: 80 },
            { label: 'Total', name: 'total', width: 80 },
            { label: 'Notes', name: 'note', width: 150 }
        ]
    });

    $('<button type="button" class="btn btn-default">Get JSON</button>')
        .on('click', function(){
           $('#grid').jqGrid('setGridParam', {
                datatype: 'json',
                url: './data/basic.json'}).trigger('reloadGrid');
            })
            .insertAfter($('#show-code'));

    $('<button type="button" class="btn btn-default">Get XML</button>')
        .on('click', function(){
             $('#grid').jqGrid('setGridParam', {
                 datatype: 'xml',
                 url: './data/basic.xml'}).trigger('reloadGrid');
            })
            .insertAfter($('#show-code'));
});
```

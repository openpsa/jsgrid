---
title: Demos / Remote
section: Demos
---

# Default Options + Remote Data

<button type="button" id="buttonJSON">Get store1 invoices (JSON)</button>
<button type="button" id="buttonXML">Get store2 invoices (XML)</button>

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
        ],
        pager: '#pager'
    });

    $('button#buttonJSON').on('click', function(){
	$('#grid').jqGrid('setGridParam',{url: './data/basic.json'}).trigger('reloadGrid');
    });

    $('button#buttonXML').on('click', function(){
	$('#grid').jqGrid('setGridParam',{url: './data/basic.xml'}).trigger('reloadGrid');
    });
});
```

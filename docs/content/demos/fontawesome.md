---
title: FontAwesome
section: Demos
---

This demo replaces the default jQuery UI icons with FontAwesome

```javascript
    $('head').append($('<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"></link>'));
    $('head').append($('<link href="../iconsets/fontawesome.css" rel="stylesheet"></link>'));
    var mydata = [
        { id: "1.0",  invdate: "2007-10-01", name: "test1", note: "note1",  amount: "", tax: "", closed: true,  ship_via: "TN", total: "" },
            { id: "2.0",  invdate: "2007-10-02", name: "test1", note: "note2",  amount: "300.00", tax: "20.00", closed: false, ship_via: "FE", total: "320.00" },
        { id: "3.0",  invdate: "2007-09-01", name: "test3", note: "note3",  amount: "400.00", tax: "30.00", closed: false, ship_via: "FE", total: "430.00" },
        { id: "4.0",  invdate: "2007-10-04", name: "test2", note: "note4 note4 note4",  amount: "200.00", tax: "10.00", closed: true,  ship_via: "TN", total: "210.00" },
        { id: "5.0",  invdate: "2007-10-31", name: "test2", note: "note5",  amount: "300.00", tax: "20.00", closed: false, ship_via: "FE", total: "320.00" },
        { id: "6.0",  invdate: "2007-09-06", name: "test3", note: "note6",  amount: "400.00", tax: "30.00", closed: false, ship_via: "FE", total: "430.00" },
        { id: "7.0",  invdate: "2007-10-04", name: "test3", note: "note7",  amount: "200.00", tax: "10.00", closed: true,  ship_via: "TN", total: "210.00" },
        { id: "8.0",  invdate: "2007-10-03", name: "test1", note: "note8",  amount: "300.00", tax: "20.00", closed: false, ship_via: "FE", total: "320.00" },
        { id: "9.0",  invdate: "2007-09-01", name: "test3", note: "note9 note9 note9 note9",  amount: "400.00", tax: "30.00", closed: false, ship_via: "TN", total: "430.00" },
        { id: "10.0", invdate: "2007-09-08", name: "test2", note: "note10", amount: "500.00", tax: "30.00", closed: true,  ship_via: "TN", total: "530.00" },
        { id: "11.0", invdate: "2007-09-08", name: "test2", note: "note11", amount: "500.00", tax: "30.00", closed: false, ship_via: "FE", total: "530.00" },
        { id: "12.0", invdate: "2007-09-10", name: "test3", note: "note12", amount: "500.00", tax: "30.00", closed: false, ship_via: "FE", total: "530.00" }
    ],
    $grid = $("#grid"),
        initDateEdit = function (elem) {
            $(elem).datepicker({
                dateFormat: "dd-M-yy",
                autoSize: true,
                changeYear: true,
                changeMonth: true,
                showButtonPanel: true,
                showWeek: true
            });
        },
        initDateSearch = function (elem) {
            setTimeout(function () {
                $(elem).datepicker({
                    dateFormat: "dd-M-yy",
                    autoSize: true,
                    changeYear: true,
                    changeMonth: true,
                    showWeek: true,
                    showButtonPanel: true
                });
            }, 100);
        },
        integerTemplate = {formatter: "integer", align: "right", sorttype: "integer",
            editrules: {number: true, required: true},
            searchoptions: { sopt: ["eq", "ne", "lt", "le", "gt", "ge"] }},
            numberTemplate = {formatter: "number", align: "right", sorttype: "number",
            editrules: {number: true, required: true},
            searchoptions: { sopt: ["eq", "ne", "lt", "le", "gt", "ge"] }};

    $grid.jqGrid({
        datatype: "local",
        data: mydata,
        colNames: ["", "Client", "Date", "Price", "Tax", "Total", "Shiping", "Shipped via", "Notes"],
        colModel: [
            { name: "act", template: "actions", formatoptions: { keys: true } },
            { name: "name", align: "center", editable: true, width: 65, editrules: {required: true}, frozen: true },
            { name: "invdate", width: 80, align: "center", sorttype: "date", frozen: true,
                formatter: "date", formatoptions: { newformat: "d-M-Y" }, editable: true, datefmt: "d-M-Y",
                editoptions: { dataInit: initDateEdit },
                searchoptions: { sopt: ["eq", "ne", "lt", "le", "gt", "ge"], dataInit: initDateSearch } },
            { name: "amount", width: 75, editable: true, template: numberTemplate },
            { name: "tax", width: 52, editable: true, template: integerTemplate },
            { name: "total", width: 60, template: numberTemplate, summaryTpl: "<i>{0}</i>", summaryType: "sum" },
            { name: "closed", width: 70, align: "center", editable: true, formatter: "checkbox",
                edittype: "checkbox", editoptions: {value: "Yes:No", defaultValue: "Yes"},
                stype: "select", searchoptions: { sopt: ["eq", "ne"], value: ":Any;true:Yes;false:No", clearSearch: false } },
            { name: "ship_via", width: 105, align: "center", editable: true, formatter: "select",
                edittype: "select", editoptions: { value: "FE:FedEx;TN:TNT;IN:Intim", defaultValue: "IN" },
                stype: "select", searchoptions: { sopt: ["eq", "ne"], value: ":Any;FE:FedEx;TN:TNT;IN:IN", clearSearch: false } },
            { name: "note", width: 60, sortable: false, editable: true, edittype: "textarea" }
        ],
        cmTemplate: { editable: true, autoResizable: true },
        rowNum: 10,
        rowList: [5, 10, 20],
        pager: "#pager",
        gridview: true,
        toppager: true,
        toolbar: [true, "both"],
        footerrow: true,
        multiselect: true,
        rownumbers: true,
        sortname: "invdate",
        viewrecords: true,
        sortorder: "desc",
        grouping: true,
        groupingView: {
            groupField: ["name"],
            groupCollapse: false,
            groupColumnShow: [true],
            groupSummary: [true]
        },
        subGrid: true,
        subGridRowExpanded: function (subgridDivId, rowId) {
            $("#" + $.jgrid.jqID(subgridDivId)).html("<em>simple subgrid data</em>");
        },
        caption: "Everything and the kitchen sink",
        height: "auto",
        shrinkToFit: false,
        autoresizeOnLoad: true
    }).jqGrid("navGrid", "#pager")
    .jqGrid("filterToolbar");
```

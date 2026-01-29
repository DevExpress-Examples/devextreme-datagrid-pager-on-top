<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/1116758312/25.2.2%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1316720)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# DevExtreme DataGrid - Display a Pager Above the Grid

The DevExtreme [DataGrid](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid) component displays its built-in pager below the grid. This example hides the built-in pager and implements a standalone [Pagination](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxPagination) component in an external container above the grid.

![DevExtreme DataGrid - Implement a Pager Above the Grid](images/pager-on-top.png)

## Implementation Details

- **ASP.NET Core and jQuery**: Handle [DataGrid.onOptionChanged](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onOptionChanged) and [Pagination.onOptionChanged](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#onOptionChanged) events.
- **Angular, Vue, and React**: Handle the **DataGrid.onOptionChanged** event and implement two-way property binding for [Pagination.pageIndex](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#pageIndex) and [Pagination.pageSize](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxPagination/Configuration/#pageSize) properties.

## Files to Review

- **Angular**
    - [app.component.html](Angular/src/app/app.component.html)
    - [app.component.ts](Angular/src/app/app.component.ts)
- **React**
    - [App.tsx](React/src/App.tsx)
- **Vue**
    - [App.vue](Vue/src/App.vue)
    - [Home.vue](Vue/src/components/HomeContent.vue)
- **jQuery**
    - [index.html](jQuery/src/index.html)
    - [index.js](jQuery/src/index.js)
- **ASP.NET Core**    
    - [Index.cshtml](ASP.NET%20Core/Views/Home/Index.cshtml)

## Documentation

- [Getting Started with DataGrid](https://js.devexpress.com/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/)
- [Getting Started with Pagination](https://js.devexpress.com/jQuery/Documentation/Guide/UI_Components/Pagination/Getting_Started_with_Pagination/)
- [DataGrid - API Reference](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/)
- [Pagination - API Reference](https://js.devexpress.com/jQuery/Documentation/ApiReference/UI_Components/dxPagination/api/)

<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=devextreme-datagrid-pager-on-top&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=devextreme-datagrid-pager-on-top&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->

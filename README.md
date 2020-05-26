
live at [handsontable_vs_reactdatagrid.onrender.com](https://handsontable_vs_reactdatagrid.onrender.com)

this is a website to compare two excel-type React spreadsheet components:

- [adazzle/react-data-grid](https://adazzle.github.io/react-data-grid/) ([git](https://github.com/adazzle/react-data-grid))
- [Handsontable](https://handsontable.com/) ([git](https://github.com/handsontable/handsontable))

purpose is to compare performance with large number of rows, via an html \<input\> 


my approximate unscientific results.  for 500,000 rows:

time to load

- reactdatagrid: 2 seconds
- handsontable: 5 seconds

time to re-render after data change
- reactdatagrid: instantaneous
- handsontable: 5 seconds




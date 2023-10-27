SELECT table1.column, table2.column, table3.column, table4.column
FROM table1
INNER JOIN table2 ON table1.column1 = table2.column1
INNER JOIN table3 ON table2.column2 = table3.column2
INNER JOIN table4 ON table3.column3 = table4.column3;

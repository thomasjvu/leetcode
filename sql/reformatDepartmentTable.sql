-- LeetCode #1179. Reformat Department Table
/* Instructions
Table: Department

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| revenue     | int     |
| month       | varchar |
+-------------+---------+
(id, month) is the primary key of this table.
The table has information about the revenue of each department per month.
The month has values in ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].

 

Write an SQL query to reformat the table such that there is a department id column and a revenue column for each month.

Return the result table in any order.

The query result format is in the following example.

 

Example 1:

Input: 
Department table:
+------+---------+-------+
| id   | revenue | month |
+------+---------+-------+
| 1    | 8000    | Jan   |
| 2    | 9000    | Jan   |
| 3    | 10000   | Feb   |
| 1    | 7000    | Feb   |
| 1    | 6000    | Mar   |
+------+---------+-------+
Output: 
+------+-------------+-------------+-------------+-----+-------------+
| id   | Jan_Revenue | Feb_Revenue | Mar_Revenue | ... | Dec_Revenue |
+------+-------------+-------------+-------------+-----+-------------+
| 1    | 8000        | 7000        | 6000        | ... | null        |
| 2    | 9000        | null        | null        | ... | null        |
| 3    | null        | 10000       | null        | ... | null        |
+------+-------------+-------------+-------------+-----+-------------+
Explanation: The revenue from Apr to Dec is null.
Note that the result table has 13 columns (1 for the department id + 12 for the months).

*/

-- Solution
SELECT id, 
  SUM(CASE WHEN month = 'jan' THEN revenue ELSE NULL end) as JAN_REVENUE,
  SUM(CASE WHEN month = 'feb' THEN revenue ELSE NULL end) as FEB_REVENUE,
  SUM(CASE WHEN month = 'mar' THEN revenue ELSE NULL end) as MAR_REVENUE,
  SUM(CASE WHEN month = 'apr' THEN revenue ELSE NULL end) as APR_REVENUE,
  SUM(CASE WHEN month = 'may' THEN revenue ELSE NULL end) as MAY_REVENUE,
  SUM(CASE WHEN month = 'jun' THEN revenue ELSE NULL end) as JUN_REVENUE,
  SUM(CASE WHEN month = 'jul' THEN revenue ELSE NULL end) as JUL_REVENUE,
  SUM(CASE WHEN month = 'aug' THEN revenue ELSE NULL end) as AUG_REVENUE,
  SUM(CASE WHEN month = 'sep' THEN revenue ELSE NULL end) as SEP_REVENUE,
  SUM(CASE WHEN month = 'oct' THEN revenue ELSE NULL end) as OCT_REVENUE,
  SUM(CASE WHEN month = 'nov' THEN revenue ELSE NULL end) as NOV_REVENUE, 
  SUM(CASE WHEN month = 'dec' THEN revenue ELSE NULL end) as DEC_REVENUE
FROM Department
GROUP BY id
ORDER BY id

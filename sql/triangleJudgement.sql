-- LeetCode #610. Triangle Judgement
/* Instructions
SQL Schema

Table: Triangle

+-------------+------+
| Column Name | Type |
+-------------+------+
| x           | int  |
| y           | int  |
| z           | int  |
+-------------+------+
(x, y, z) is the primary key column for this table.
Each row of this table contains the lengths of three line segments.

 

Write an SQL query to report for every three line segments whether they can form a triangle.

Return the result table in any order.

The query result format is in the following example.

 

Example 1:

Input: 
Triangle table:
+----+----+----+
| x  | y  | z  |
+----+----+----+
| 13 | 15 | 30 |
| 10 | 20 | 15 |
+----+----+----+
Output: 
+----+----+----+----------+
| x  | y  | z  | triangle |
+----+----+----+----------+
| 13 | 15 | 30 | No       |
| 10 | 20 | 15 | Yes      |
+----+----+----+----------+

*/

-- Solution
SELECT *,
IF (x + y > z AND x + z > y AND y + z > x, 'YES', 'NO') as triangle
FROM Triangle

-- Explanation
-- Use the SELECT keyword and the Asterisk * to select all columns
-- Also, have another column, triangle, which checks if the sum of each of 2 sides are greater than the remaining 3rd side, and if it is, return Yes in that column, and if not, return 'No' in that column
-- Get this data FROm the Triangle table

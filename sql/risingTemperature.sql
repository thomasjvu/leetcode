-- LeetCode #197. Rising Temperature
/* Instructions
Table: Weather

+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| recordDate    | date    |
| temperature   | int     |
+---------------+---------+
id is the primary key for this table.
This table contains information about the temperature on a certain day.

 

Write an SQL query to find all dates' Id with higher temperatures compared to its previous dates (yesterday).

Return the result table in any order.

The query result format is in the following example.

 

Example 1:

Input: 
Weather table:
+----+------------+-------------+
| id | recordDate | temperature |
+----+------------+-------------+
| 1  | 2015-01-01 | 10          |
| 2  | 2015-01-02 | 25          |
| 3  | 2015-01-03 | 20          |
| 4  | 2015-01-04 | 30          |
+----+------------+-------------+
Output: 
+----+
| id |
+----+
| 2  |
| 4  |
+----+
Explanation: 
In 2015-01-02, the temperature was higher than the previous day (10 -> 25).
In 2015-01-04, the temperature was higher than the previous day (20 -> 30).

*/

-- Solution
SELECT x.id
FROM Weather x
INNER JOIN Weather y ON x.recordDate = DATE_ADD(y.recordDate, INTERVAL 1 DAY)
WHERE x.temperature > y.temperature

-- SELECT the `id` column FROM the Weather table with an alias of X.
-- Use INNER JOIN to join the `Weather` table to itself, giving the second instance of the table the alias `y`. 
-- Use the `ON` keyword to specify the join condition we want to join rows where the `recordDate` column of `x` is equal to the recordDate of column `y` plus one day.
-- Use the `WHERE` clause to filter the results of the join to only include rows where the temperature in `x` is greater than the temperature in `y`.

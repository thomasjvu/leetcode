-- LeetCode #1667. Fix Names in a Table
/* Instructions
Table: Users

+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| user_id        | int     |
| name           | varchar |
+----------------+---------+
user_id is the primary key for this table.
This table contains the ID and the name of the user. The name consists of only lowercase and uppercase characters.

 

Write an SQL query to fix the names so that only the first character is uppercase and the rest are lowercase.

Return the result table ordered by user_id.

The query result format is in the following example.

 

Example 1:

Input: 
Users table:
+---------+-------+
| user_id | name  |
+---------+-------+
| 1       | aLice |
| 2       | bOB   |
+---------+-------+
Output: 
+---------+-------+
| user_id | name  |
+---------+-------+
| 1       | Alice |
| 2       | Bob   |
+---------+-------+

*/

-- Solution
SELECT user_id, CONCAT(UPPER(SUBSTR(name, 1, 1)), LOWER(SUBSTR(name, 2, length(name))))
FROM Users
ORDER BY user_id

-- Explanation
-- Use the SELECT statement to create a new table with the updated `name` column, which is generated using the `CONCAT` function
-- `CONCAT` concatenates strings together. In this case, it concatenates an uppercase version of the first letter of the name with the lowercase version of the rest of the name
-- The `UPPER` function converts the first letter of the name to uppercase, while the `LOWER` function converts the rest of the name to lowercase
-- The `SUBSTR` function is used to extract a part of the name from the `Users` table. It takes three arguments: the string to extract from, the starting position, and the length of the substring.
-- The `ORDER BY` clause is used to sort the resulting table by `user_id` in ascending order by default

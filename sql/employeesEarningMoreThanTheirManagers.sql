-- LeetCode #181. Employees Earning More Than Their Managers
/* Instructions
Table: Employee

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| salary      | int     |
| managerId   | int     |
+-------------+---------+
id is the primary key column for this table.
Each row of this table indicates the ID of an employee, their name, salary, and the ID of their manager.

 

Write an SQL query to find the employees who earn more than their managers.

Return the result table in any order.

The query result format is in the following example.

 

Example 1:

Input: 
Employee table:
+----+-------+--------+-----------+
| id | name  | salary | managerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | Null      |
| 4  | Max   | 90000  | Null      |
+----+-------+--------+-----------+
Output: 
+----------+
| Employee |
+----------+
| Joe      |
+----------+
Explanation: Joe is the only employee who earns more than his manager.


*/

-- Solution
SELECT e.name AS Employee
FROM Employee e
INNER JOIN Employee m
ON e.managerId = m.id
WHERE e.salary > m.salary

-- Explanation
-- SELECT the name column from the employee table AS Employee
-- To compere internal values within the table, use INNER JOIN
-- We want to join the column where the managerId is equal to the id
-- Then, return values where the employee (e) salary is greater than manager (m) salary

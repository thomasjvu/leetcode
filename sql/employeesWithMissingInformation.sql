-- LeetCode #1965. Employees With Missing Information
/* Instructions
Table: Employees

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| employee_id | int     |
| name        | varchar |
+-------------+---------+
employee_id is the primary key for this table.
Each row of this table indicates the name of the employee whose ID is employee_id.

 

Table: Salaries

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| employee_id | int     |
| salary      | int     |
+-------------+---------+
employee_id is the primary key for this table.
Each row of this table indicates the salary of the employee whose ID is employee_id.

 

Write an SQL query to report the IDs of all the employees with missing information. The information of an employee is missing if:

    The employee's name is missing, or
    The employee's salary is missing.

Return the result table ordered by employee_id in ascending order.

The query result format is in the following example.

 

Example 1:

Input: 
Employees table:
+-------------+----------+
| employee_id | name     |
+-------------+----------+
| 2           | Crew     |
| 4           | Haven    |
| 5           | Kristian |
+-------------+----------+
Salaries table:
+-------------+--------+
| employee_id | salary |
+-------------+--------+
| 5           | 76071  |
| 1           | 22517  |
| 4           | 63539  |
+-------------+--------+
Output: 
+-------------+
| employee_id |
+-------------+
| 1           |
| 2           |
+-------------+
Explanation: 
Employees 1, 2, 4, and 5 are working at this company.
The name of employee 1 is missing.
The salary of employee 2 is missing.

*/

-- Solution
SELECT e.employee_id FROM Employees e
LEFT JOIN Salaries s on s.employee_id = e.employee_id
WHERE s.salary IS NULL
UNION
SELECT s.employee_id FROM Salaries s
LEFT JOIN Employees e on e.employee_id = s.employee_id
WHERE e.name IS NULL
ORDER BY employee_id

-- Explanation
-- The first query joins the Employees and Salaries table using a LEFT JOIN.
-- It selects the employee_id column from Employees table where the corresponding row in the Salaries table has a NULL value in the salary column, indicating that the salary information is missing for that employee
-- UNION is a set operator that combines the result set from the previous query with the result from the next query.
-- The second query joins the Salaries and Employees table on the employee_id column using a LEFT JOIN.
-- It selects the employee_id column from the Salaries table where the corresponding row in Employees table has a NULL value in the name column, indicating that the name information is missing for that employee
-- The ORDER BY statement orders the final result set by employee_id in ascending order.
-- By using LEFT JOINs, we are aable to combine the two tables and match up the employee information.

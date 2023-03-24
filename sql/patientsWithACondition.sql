-- LeetCode #1527. Patients With a Condition
/* Instructions
Table: Patients

+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| patient_id   | int     |
| patient_name | varchar |
| conditions   | varchar |
+--------------+---------+
patient_id is the primary key for this table.
'conditions' contains 0 or more code separated by spaces. 
This table contains information of the patients in the hospital.

 

Write an SQL query to report the patient_id, patient_name and conditions of the patients who have Type I Diabetes. Type I Diabetes always starts with DIAB1 prefix.

Return the result table in any order.

The query result format is in the following example.

 

Example 1:

Input: 
Patients table:
+------------+--------------+--------------+
| patient_id | patient_name | conditions   |
+------------+--------------+--------------+
| 1          | Daniel       | YFEV COUGH   |
| 2          | Alice        |              |
| 3          | Bob          | DIAB100 MYOP |
| 4          | George       | ACNE DIAB100 |
| 5          | Alain        | DIAB201      |
+------------+--------------+--------------+
Output: 
+------------+--------------+--------------+
| patient_id | patient_name | conditions   |
+------------+--------------+--------------+
| 3          | Bob          | DIAB100 MYOP |
| 4          | George       | ACNE DIAB100 | 
+------------+--------------+--------------+
Explanation: Bob and George both have a condition that starts with DIAB1.

*/

-- Solution
SELECT patient_id, patient_name, conditions
FROM Patients
WHERE conditions LIKE 'DIAB1%' OR CONDITIONS LIKE '% DIAB1%'

-- Explanation
-- Use the SELECT statement to return the patient_id, patient_name, and conditions column
-- Use the FROM statement to choose to get data from the Patients table
-- Use the WHERE statement to add the condition
-- Use the LIKE keyword followed by 'STRING%' syntax to return items that contain the string
-- Use the OR keyword to acocunt for the case where DIAB1 is not the first health condition, in which case we use LIKE '% DIAB1' to see if the conditions contains DIAB1 with a space in front.
-- This returns a table of patients who have Type 1 Diabetes as a condition

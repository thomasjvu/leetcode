-- LeetCode #196. Delete Duplicate Emails
/* Instructions
Table: Person

+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
id is the primary key column for this table.
Each row of this table contains an email. The emails will not contain uppercase letters.

 

Write an SQL query to delete all the duplicate emails, keeping only one unique email with the smallest id. Note that you are supposed to write a DELETE statement and not a SELECT one.

After running your script, the answer shown is the Person table. The driver will first compile and run your piece of code and then show the Person table. The final order of the Person table does not matter.

The query result format is in the following example.

 

Example 1:

Input: 
Person table:
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
Output: 
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
Explanation: john@example.com is repeated two times. We keep the row with the smallest Id = 1.

*/

-- Solution
DELETE p1 FROM Person p1, Person p2
WHERE p1.Email = p2.Email AND p1.Id > p2.Id

-- Explanation
-- The query selects two copies of the "Person" table: p1 and p2
-- It then joins the two copies using the WHERE clause, which specifies that the email address in p1 must be equal to the email address in p2, and...
-- the ID in p1 must be greater than the ID in p2
-- This effectively creates a table with all of the pairs of rows where there is a duplicate email address, with the row with the larger id in p1
-- Finally, the DELETE statement deletes all of the rows from p1 that are in this table.
-- Since this table only includes rows with duplicate email addresses, this has the effect of deleting all of the duplicates, except for the row with the smallest id for each unique email


-- LeetCode #1729. Find Followers Count
/* Instructions
Table: Followers

+-------------+------+
| Column Name | Type |
+-------------+------+
| user_id     | int  |
| follower_id | int  |
+-------------+------+
(user_id, follower_id) is the primary key for this table.
This table contains the IDs of a user and a follower in a social media app where the follower follows the user.

 

Write an SQL query that will, for each user, return the number of followers.

Return the result table ordered by user_id in ascending order.

The query result format is in the following example.

 

Example 1:

Input: 
Followers table:
+---------+-------------+
| user_id | follower_id |
+---------+-------------+
| 0       | 1           |
| 1       | 0           |
| 2       | 0           |
| 2       | 1           |
+---------+-------------+
Output: 
+---------+----------------+
| user_id | followers_count|
+---------+----------------+
| 0       | 1              |
| 1       | 1              |
| 2       | 2              |
+---------+----------------+
Explanation: 
The followers of 0 are {1}
The followers of 1 are {0}
The followers of 2 are {0,1}
*/

-- Solution
SELECT user_id, COUNT(follower_id) AS followers_count
FROM Followers
GROUP BY user_id
ORDER BY user_id

-- SELECT the user_id column FROM the Followers table
-- SELECT the COUNT of each follower_id aliased AS followers_counted FROM the Followers table
-- GROUP BY user_id
-- and oRDER BY user_id in ascending order (default)

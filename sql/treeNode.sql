-- LeetCode #608. Tree Node
/* Instructions
Table: Tree

+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| p_id        | int  |
+-------------+------+
id is the primary key column for this table.
Each row of this table contains information about the id of a node and the id of its parent node in a tree.
The given structure is always a valid tree.

 

Each node in the tree can be one of three types:

    "Leaf": if the node is a leaf node.
    "Root": if the node is the root of the tree.
    "Inner": If the node is neither a leaf node nor a root node.

Write an SQL query to report the type of each node in the tree.

Return the result table in any order.

The query result format is in the following example.

 

Example 1:

Input: 
Tree table:
+----+------+
| id | p_id |
+----+------+
| 1  | null |
| 2  | 1    |
| 3  | 1    |
| 4  | 2    |
| 5  | 2    |
+----+------+
Output: 
+----+-------+
| id | type  |
+----+-------+
| 1  | Root  |
| 2  | Inner |
| 3  | Leaf  |
| 4  | Leaf  |
| 5  | Leaf  |
+----+-------+
Explanation: 
Node 1 is the root node because its parent node is null and it has child nodes 2 and 3.
Node 2 is an inner node because it has parent node 1 and child node 4 and 5.
Nodes 3, 4, and 5 are leaf nodes because they have parent nodes and they do not have child nodes.

Example 2:

Input: 
Tree table:
+----+------+
| id | p_id |
+----+------+
| 1  | null |
+----+------+
Output: 
+----+-------+
| id | type  |
+----+-------+
| 1  | Root  |
+----+-------+
Explanation: If there is only one node on the tree, you only need to output its root attributes.

*/

-- Solution
SELECT t.id,
    CASE 
        WHEN p_id IS NULL THEN 'Root'
        WHEN EXISTS (SELECT 1 FROM Tree WHERE p_id = t.id) THEN 'Inner'
        ELSE 'Leaf'
    END as type
FROM Tree t

-- Explanation
-- Use the SELECT keyword to select the ID from the TREE (abbreviated as t)
-- Use the CASE keyword to give multiple conditional statements
-- Use the WHEN keyword to give the condition of p_id being null, which we know will be the root
-- Use the WHEN EXISTS to check if there is at least one row in the Tree table where the p_id column matches the id column of the current row.
-- Otherwise if none of those other conditions are true, the ELSE condition is excuted and the corresponding type is 'Leaf'
-- We give an alias "type" to the results of the case statement
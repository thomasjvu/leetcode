# LeetCode #193. Valid Phone Numbers
: '
Given a text file file.txt that contains a list of phone numbers (one per line), write a one-liner bash script to print all valid phone numbers.

You may assume that a valid phone number must appear in one of the following two formats: (xxx) xxx-xxxx or xxx-xxx-xxxx. (x means a digit)

You may also assume each line in the text file must not contain leading or trailing white spaces.

Example:

Assume that file.txt has the following content:

987-123-4567
123 456 7890
(123) 456-7890

Your script should output the following valid phone numbers:

987-123-4567
(123) 456-7890

 '

# Solution
grep -e "^[0-9]\{3\}\-[0-9]\{3\}\-[0-9]\{4\}$" -e "^([0-9]\{3\}) [0-9]\{3\}\-[0-9]\{4\}$" file.txt

# Explanation
# The `grep` command can be used to find or search a regular expression or string in a text file.
# The `-e` flag is used to specify a regular expression pattern that contains special characters and to accept multiple regex
# The `^` indicates the start of the string
# The `$` indicates the end of the string
# The [0-9]\{3\} represents three numbers `\{3}\` between the range of 0-9 `[0-9]`
# This grep command accepts two regular expressions that checks the different phone number formats

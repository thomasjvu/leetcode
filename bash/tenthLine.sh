# Read from the file file.txt and output the tenth line to stdout

# Solution
awk "NR==10" file.txt

# Explanation
# If the variable NR (number rows) is equal to 10, then the command prints that line in file.txt



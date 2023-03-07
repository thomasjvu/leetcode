// LeetCode #929. Unique Email Addresses
/* Instructions
Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

    For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.

If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

    For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.

If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

    For example, "m.y+name@email.com" will be forwarded to "my@email.com".

It is possible to use both of these rules at the same time.

Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.

 

Example 1:

Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.

Example 2:

Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
Output: 3

 

Constraints:

    1 <= emails.length <= 100
    1 <= emails[i].length <= 100
    emails[i] consist of lowercase English letters, '+', '.' and '@'.
    Each emails[i] contains exactly one '@' character.
    All local and domain names are non-empty.
    Local names do not start with a '+' character.
    Domain names end with the ".com" suffix.
*/

// Solution
const numUniqueEmails = (emails) => {

    // Create new array to hold all valid emails
    const validEmails = []

    for (let i = 0; i < emails.length; i++) {
        // Parse out the domain name from the given emails and assign it to a variable
        emails[i] = emails[i].split('@')
        let domain = emails[i][1]
        // Replace any '.' in the first half of the given email address
        emails[i][0] = emails[i][0].replace(/\./g, '')
        // Split the first half of the domain name by any '+' symbols, and retrieve the first half
        emails[i] = emails[i][0].split('+')
        // Push the valid email address into the valid emails array (first half + domain)
        validEmails.push(emails[i][0] + '@' + domain)
    }

    // Create a new set object from the valid emails
    let uniqueEmails = new Set ([...validEmails])

    // Return the size of the set
    return uniqueEmails.size

}

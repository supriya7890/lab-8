const fs = require('fs');
const request = require('request');
// Function to check if a string is a palindrome
function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
// Function to list all files in a directory
function listFiles(dirPath) {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(files);
    });
}
// Function to read the contents of a file asynchronously
function readFile(filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}
// Function to make an HTTP request asynchronously and log the status and response
function makeRequest(url) {
    request(url, (err, res, body) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`Status: ${res.statusCode}`);
        console.log(`Response: ${body}`);
    });
}
// Testing the functions
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('hello')); // false
listFiles('./'); // lists all files in the current directory
readFile('./test.txt'); // reads the contents of test.txt file in the current directory
makeRequest('https://www.youtube.com/'); // makes an HTTP GET request to Youtube's homepage

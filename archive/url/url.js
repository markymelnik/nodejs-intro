import { URL } from 'node:url'
const myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log(myURL.protocol);
console.log(myURL.username);
console.log(myURL.password);
console.log(myURL.host);
console.log(myURL.hostname);
console.log(myURL.port);
console.log(myURL.origin);
console.log(myURL.pathname);
console.log(myURL.search);
console.log(myURL.hash);
console.log(myURL.href);

const firstURL = new URL('https://example.org');
firstURL.pathname = './a/b/c';
firstURL.search = '?d=e';
firstURL.hash = '#fgh';
console.log(firstURL.href);

const secondURL = new URL('/foo', 'https://bar.org');
console.log(secondURL.href);
import path from 'path';
import url from 'url';

const urlString = 'https://www.google.com/search?q=Hellow+world';

// URL
const urlObj = new URL(urlString);
console.log(urlObj)

// format()

console.log(url.format(urlString));

// import.meta.url

console.log(import.meta.url);

// fileUrlToPath()

console.log(url.fileURLToPath(import.meta.url))

// search query

console.log(urlObj.search)

// search text

const params = new URLSearchParams(urlObj.search);
console.log(params.get('q'))
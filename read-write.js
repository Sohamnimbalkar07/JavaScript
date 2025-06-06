const fs = require('fs');

const readable = fs.createReadStream('bigfile.txt');
const writable = fs.createWriteStream('output.txt');

readable.pipe(writable);

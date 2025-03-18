const fs = require('fs');

//Read to a file using streams
const readStream = fs.createReadStream('./docs/file3.txt', { encoding: 'utf8'});
//We can also create a write stream
const writeStream = fs.createWriteStream('./docs/file4.txt');

/*readStream.on('data', (chunk) => {
    console.log("-------- NEw Chunk -------");
    console.log(chunk);
    writeStream.write('\nNew Chunk\n');
    writeStream.write(chunk);
});*/

//piping
readStream.pipe(writeStream);


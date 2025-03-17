//importing a file module
const fs = require('fs');

//Reading files
/*
fs.readFile('./docs/file1.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
console.log('Last Line');
*/

//Writing files
/*
fs.writeFile('./docs/file1.txt', 'Thabiso, Lepoto', () =>{
    console.log("File was written");
});

fs.writeFile('./docs/file2.txt', 'Xolane, Shabalala', () =>{
    console.log("File was written");
});
*/

//directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) =>{
        if(err){
            console.log(err);
        }
        console.log("Directory created");
    });
}else{
    console.log("Folder does exist");
}

//deleting the file
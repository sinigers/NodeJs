const fs = require('fs');
const { mkdir } = require('fs/promises');

//reading files
// fs.readFile('./docs/blog1.txt', (err, data) =>{
//     if(err){
//         console.log(err);
//     }
//     // console.log(data);
//     console.log(data.toString());
// });


//writing files
// fs.writeFile('./docs/blog1.txt', 'Hello, world', () =>{
//     console.log('file was written');
// });

// fs.writeFile('./docs/blog2.txt', 'Hello, world', () =>{
//     console.log('file was written');
// });


//directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
    if(err){
    console.log(err);    
    }
     console.log('folder created');
 });
}else{
    fs.rmdir('./assets', (err) =>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    });
};



//deleting filesS
if(fs.existsSync('./dox/dleteme.txt')){
    fs.unlink('./dox/dleteme.txt', err =>{
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    })
}
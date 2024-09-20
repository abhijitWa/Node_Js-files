const fs = require('fs');
fs.appendFile('Abhijit.txt','\nAdeded data succesfully.',(err) =>{
    if (err) {
        console.error('Error appending to the file:', err);
        return;
    }
    console.log('Content appended succesfully.');
});





   
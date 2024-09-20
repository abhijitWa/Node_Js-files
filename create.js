const fs = require('fs');
fs.appendFile('Savitri.txt', \nAdeded data succesfully.',(err) => {
    if (err) {
        console.error('Error appending to the file:', err);
        return;
    }
    console,log('Content appended successfully.');
});
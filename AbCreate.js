const fs = require('fs');
//const filePath = 'example.txt';
//const content = 'Hello, world!';

fs.writeFile('Abhijit.txt', 'Hello Abhi', (err) => {
    if (err) {
        console.error('Error creating the file:', err);
        return;
    }
    console.log('File created successfully.');
});
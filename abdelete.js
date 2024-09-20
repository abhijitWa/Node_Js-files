const fs = require('fs');
//const filePath = 'example.txt';
//const content = 'Hello, world!';

fs.unlink('abhijit.txt', (err) => {
    
    if (err) {
        console.error('Error creating the file:', err);
        return;
    }
    console.log('File Deleted successfully.');
});
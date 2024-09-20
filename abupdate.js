const fs = require('fs');
fs.writeFile('Abhijit.txt', 'updatedContent', (err) => {
    if (err) {
        console.error('Error updating the file:', err);
        return;
    }
    console.log('File updated successfully.');
});
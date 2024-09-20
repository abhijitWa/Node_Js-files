const http = require('http');
const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

// Create a server
const server = http.createServer((req, res) => {
    if (req.method.toLowerCase() === 'post') {
        // Create an instance of formidable.IncomingForm
        const form = new formidable.IncomingForm();

        // Specify where to upload the files
        form.uploadDir = path.join(__dirname, '/uploads');
        fs.mkdirSync(form.uploadDir, { recursive: true }); // Create uploads directory if it doesn't exist

        // Parse the incoming request
        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error parsing the file: ' + err.message);
                return;
            }

            // Move the uploaded file to the desired location
            const oldPath = files.uploadedFile.path;
            const newPath = path.join(form.uploadDir, files.uploadedFile.name);

            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Error moving the file: ' + err.message);
                    return;
                }

                // Respond with success
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('File uploaded successfully to ' + newPath);
            });
        });
    } else {
        // Serve a simple HTML form for uploading files
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <form action="/" method="post" enctype="multipart/form-data">
                <input type="file" name="uploadedFile" />
                <button type="submit">Upload File</button>
            </form>
        `);
    }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

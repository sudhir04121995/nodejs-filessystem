
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8080;

app.get('/time', (req, res) => {
   let date = new Date();
   let content = date.toUTCString();
   
   let filePath = path.join(__dirname, "newNodeTimeFile.txt");

   fs.writeFile(filePath, content, (err) => {
       if (err) {
           res.send(`Error occurred in writing the file: ${err}`);
       } else {
           fs.readFile(filePath, "utf-8", (err, data) => {
               if (err) {
                   res.send(`Error occurred in reading the file: ${err}`);
               } else {
                   res.send(data);
               }
           });
       }
   });
});

app.listen(PORT, () => console.log(`Server running successfully on localhost:${PORT}`));

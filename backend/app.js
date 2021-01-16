const express = require("express");
const cors = require("cors");

const path = require("path");
const dotenv = require("dotenv");
const bodyParse = require("body-parser");
const connectDB = require("./config/db");
const colors = require("colors");
const fileupload = require("express-fileupload");
const program = require("./routes/programRoute");
const user = require("./routes/users");
const uploads = require('./routes/uploadRoutes')
const pdf = require('html-pdf');
var options = { format: 'Letter',"border": "1", };

const pdfTemplate = require('./documents','utf8');
const app = express();
// Load env vars
dotenv.config({
    path: "./config/config.env",
});
//Body parser
app.use(bodyParse.json());
//CORS
app.use(cors());

//Load DB
connectDB();
//Routes
app.use("/api/v1/user", user);
app.use("/api/v1/program", program);
app.use('/api/v1/upload', uploads);
//Start Node Server

//File Upload
app.use(fileupload());
//Static Folder
app.use('/public', express.static('public'));



app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), options).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }
        res.send(Promise.resolve());
    });
});
app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})





const Port = process.env.PORT || 8001;
const server = app.listen(Port, () => {
    console.log(`Server running on port ${Port}`.blue.bold);
});

//Handle unhandled promise rejectons
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`);
    //Close server & exit process
    server.close(() => process.exit(1));
});

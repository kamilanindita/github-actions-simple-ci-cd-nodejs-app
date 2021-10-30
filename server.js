const express = require('express');
const http = require('http')
const httpStatus = require('http-status');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req,res) => {
    res.status(httpStatus.OK).send('This App is running');
});

app.get('/hello/:name', (req,res) => {
    res.status(httpStatus.OK).json({
        message: 'OK',
        data: `Hello, ${req.params.name} !`
    });
})


const server = http.createServer(app)
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`This app running on port:${PORT}`)
});

module.exports = app
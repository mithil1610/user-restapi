const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const userRouter = require('./routes/userRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/users', userRouter);

app.use(express.static(__dirname + '/public'));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}/`);
});
const express = require('express');
const bodyParser = require('body-parser');

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the details of all the users to you!');
})
.post((req, res, next) => {
    res.end('Will add the user: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /users');
})
.delete((req, res, next) => {
    res.end('Deleting all the users!');
});

userRouter.route('/:userId')
.get((req, res, next) => {
    res.end('Will send details of the user: ' + req.params.userId + ' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /users/' + req.params.userId);
})
.put((req, res, next) => {
    res.write('Updating the user: ' + req.params.userId + '\n');
    res.end('Will update the user: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting user: ' + req.params.userId);
});

module.exports = userRouter;
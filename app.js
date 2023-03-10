/* =================================================
|  Name:         Chase Timmons                     |
|  Student ID:   1220666252                        |
|  Date Created: 2/25/22                           |
|  Description:  Retrieve and add loan data to     |
|                MongoDB database                  |
==================================================*/

const express = require('express');
const morgan = require('morgan');

const loanRouter = require('./routes/loanRoutes');

const app = express();

// allows for the parsing of body data for posting
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/', (req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use('/', (req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
//app.use('/api/v1/courses', courseRouter);
//app.use('/api/v1/users', userRouter);
app.use('/api/v1/loans', loanRouter);

module.exports = app;

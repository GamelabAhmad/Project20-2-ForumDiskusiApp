var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/loginRoutes');
var registerRouter = require('./routes/registerRoutes');
var usersRouter = require('./routes/userRoutes');
var categoriesRouter = require('./routes/categoryRoutes');
var discussionsRouter = require('./routes/discussionRoutes');
var answersRouter = require('./routes/answerRoutes');


var app = express();

// Middleware setup
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', indexRouter);
app.use('/', loginRouter)
app.use('/', registerRouter);
app.use('/', usersRouter);
app.use('/', categoriesRouter); // Tambahkan route untuk categories
app.use('/', discussionsRouter);
app.use('/', answersRouter);


// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Respond with JSON
  res.status(err.status || 500).json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;

require('dotenv').config()

var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

// session
var session = require('express-session');
var redis = require('redis');
var RedisStore = require('connect-redis')(session);
var redisClient = redis.createClient({
    host: 'redis',
    port: process.env.REDIS_PORT,
});


var app = express()

app.use(session({
  secret: 'secret',
  cookie: {
    secure: true,
    maxage: 30 * 60_000 // 30min
  },
  store: new RedisStore({
    client: redisClient
  })
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


var v1IndexRouter = require('./routes/v1/index')
var v1UsersRouter = require('./routes/v1/users')

app.use('/v1', v1IndexRouter)
app.use('/v1/users', v1UsersRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

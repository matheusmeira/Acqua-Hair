const logger = require('morgan'),
  path = require('path'),
  compression = require('compression'),
  methodOverride = require('method-override'),
  session = require('express-session'),
  flash = require('express-flash'),
  bodyParser = require('body-parser'),
  expressValidator = require('express-validator'),
  passport = require('passport');

export default {
  configDefault(app) {
    app.set('port', process.env.PORT || 3000);
    app.set('graphql', 5000);
    app.use(compression());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(expressValidator());
    app.use(methodOverride('_method'));
    app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());
  },
};

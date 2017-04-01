import express from 'express';
import dotenv from 'dotenv';
import configApp from './config/express-config';
import configDB from './config/mongo-config';
import configPassport from './config/passport';
import configGraphQL from './graphql';

process.env.NODE_ENV = 'development';

// Load environment variables from .env file
dotenv.load();

var app = express();

// Application Default Configuration
configApp.configDefault(app);

// MongoDB Configuration
configDB.configDefault();

// Passport OAuth strategies
configPassport.configDefault();

// GraphQL API Controllers
configGraphQL.registerRoutes(app);

app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;

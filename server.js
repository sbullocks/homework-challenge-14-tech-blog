// Dependencies
const express = require('express');
const session = require('express-session');
const routes = require('./controllers');

// Import express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });
const path = require('path');

// Import the custom helper methods
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
// Create a new sequelize store using the express-session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db. Configure and link a session object with the sequelize store.
const sess = {
    secret: 'Super secret secret',
    // Express session will use cookies by default, but we can specify options for those cookies by adding a cookies property to our session options.
    cookie: {
      // maxAge sets the maximum age for the cookie to be valid. Here, the cookie (and session) will expire after one hour. The time should be given in milliseconds.
      maxAge: 60 * 60 * 1000,
      // httpOnly tells express-session to only store session cookies when the protocol being used to connect to the server is HTTP.
      httpOnly: true,
      // secure tells express-session to only initialize session cookies when the protocol being used is HTTPS. Having this set to true, and running a server without encryption will result in the cookies not showing up in your developer console.
      secure: false,
      // sameSite tells express-session to only initialize session cookies when the referrer provided by the client matches the domain out server is hosted from.
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    // Sets up session store
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

// Add express-session and store as Express.js middleware
app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

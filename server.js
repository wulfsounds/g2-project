const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 3600000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Set up Handlebars with custom Helpers
const hbs = exphbs.create({ helpers });

// Designate template engine for Express.js
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// GET Splash Page (redirect to weekly view if user loggedIn)
app.get('/', (req,res) => {
  if (req.session.loggedIn) {
    res.redirect('/weekly');
    return;
  }
  
  res.sendFile(path.join(__dirname, '/public/html/splash.html'))
})

// GET Day Calendar View
app.get('/day', (req, res) => {
    if(req.session.loggedIn) {
      res.sendFile(path.join(__dirname, '/public/html/dayCal.html'));
      return;
    }
})

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


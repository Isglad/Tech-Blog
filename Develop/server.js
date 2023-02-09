const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

const hbs = exphbs.create({});


// app.use(require('./controllers'))


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./controllers');

app.use(routes)

const session = require('express-session');

const sequelizeStore = require('connect-session-sequelize')(session.Store)

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Add express-session and store as Express.js middleware
app.use(session(sess));

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

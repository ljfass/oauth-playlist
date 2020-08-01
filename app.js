const express = require('express');

const app = express();
const router = require('./routes/index');
const passportSetup = require('./config/passport-setup')

// set up view engine

app.set('view engine', 'ejs');

app.use('/', router);

// auth route
app.use('/auth', require('./routes/auth-routes'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
const express = require('express');
const rp = require('request-promise');
const cors = require('cors')

const app = express();
app.use(cors());

const secret = 'SECRET_KEY';

app.get('/', (req, res) => res.send('reCAPTCHA Development Server is listening you!'));

app.get('/validate_captcha', (req, res) => {

  const options = {
    method: 'POST',
    uri: 'https://www.google.com/recaptcha/api/siteverify',
    qs: {
      secret,
      response: req.query.token
    },
    json: true
  };

  rp(options)
    .then(response => res.json(response))
    .catch(() => {});

});

app.listen(3000, () => console.log('reCAPTCHA Development Server is listening on localhost:3000, open your browser on http://localhost:3000/'))
require('dotenv').config();
const express = require('express');
const router = require('./app/router');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('integration'));

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

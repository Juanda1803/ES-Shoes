const express = require('express');
const app = express();
const morgan = require('morgan');

const config = require('./config');
const moviesApi = require('./routes');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

moviesApi(app);

app.listen(config.port, () => {
  console.log(`Server is listening in http://localhost:${config.port}`);
});

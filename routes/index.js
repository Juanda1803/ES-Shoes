const express = require('express');
const { moviesMock } = require('../utils/mocks/clients');
const _ = require('underscore');

const moviesApi = (app) => {
  const router = express.Router();
  app.use('/api/movies', router);

  // GET
  router.get('/', async (req, res, next) => {
    try {
      const movies = await Promise.resolve(moviesMock);
      res.status(200).json({
        data: movies,
        message: 'movies listed',
      });
    } catch (err) {
      next(err);
    }
  });

  // POST
  router.post('/', (req, res) => {
    const {
      name,
      typeOfArrangement,
      value,
      payment,
      phone,
      description,
      date,
    } = req.body;
    if (name && typeOfArrangement && value && payment && date) {
      const id = moviesMock.length + 1;
      const newMovie = { id, ...req.body };
      console.log(newMovie);
      moviesMock.push(newMovie);
    } else {
      res.send('Wrong Request');
    }
  });

  // PUT
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const {
      name,
      typeOfArrangement,
      value,
      payment,
      phone,
      description,
      date,
    } = req.body;

    if (name && typeOfArrangement && value && payment && date) {
      _.each(moviesMock, (movie, i) => {
        if (movie.id == id) {
          movie.name = name;
          movie.typeOfArrangement = typeOfArrangement;
          movie.value = value;
          movie.payment = payment;
          movie.phone = phone;
          movie.description = description;
          movie.date = date;
        }
      });
      res.json(moviesMock);
    } else {
      res.status(500).json({ error: 'There was an error' });
    }
  });

  // DELETE
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(moviesMock, (movie, i) => {
      if (movie.id == id) {
        moviesMock.splice(i, 1);
      }
    });
    res.send(moviesMock);
  });
};

module.exports = moviesApi;

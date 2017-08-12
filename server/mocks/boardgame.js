/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let boardgameRouter = express.Router();

  boardgameRouter.get('/', function(req, res) {
    res.send({
      'boardgame': []
    });
  });

  boardgameRouter.post('/', function(req, res) {
    console.log(req.body)
    res.send({
      data: {
        attributes:
        {name: "a"},
        type: "boardgames"
      }
    })
  });

  boardgameRouter.get('/:id', function(req, res) {
    res.send({
      'boardgame': {
        id: req.params.id
      }
    });
  });

  boardgameRouter.put('/:id', function(req, res) {
    res.send({
      'boardgame': {
        id: req.params.id
      }
    });
  });

  boardgameRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/boardgame', require('body-parser').json());
  app.use('/api/boardgame', boardgameRouter);
};

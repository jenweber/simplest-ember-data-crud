/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let boardgamesRouter = express.Router();
  let idCounter = 0;

  boardgamesRouter.get('/', function(req, res) {
    res.send({
      'boardgames': []
    });
  });

  boardgamesRouter.post('/', function(req, res) {
    console.log(req.body)
    idCounter += 1
    res.send({
      data: {
        attributes:
        {
          name: req.body.data.attributes.name,
          id: idCounter
        },
        type: "boardgames"
      }
    })
    res.status(201).end();
  });

  boardgamesRouter.get('/:id', function(req, res) {
    res.send({
      'boardgames': {
        id: req.params.id
      }
    });
  });

  boardgamesRouter.put('/:id', function(req, res) {
    res.send({
      'boardgames': {
        id: req.params.id
      }
    });
  });

  boardgamesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/boardgames', require('body-parser').json({ type: 'application/*+json' }), boardgamesRouter);
  // app.use('/api/boardgames', boardgamesRouter);
};

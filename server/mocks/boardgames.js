/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let boardgamesRouter = express.Router();
  let idCounter = 2;

  boardgamesRouter.get('/', function(req, res) {
    res.send({
      data: [
        {
          id: 1,
          attributes:
          {
            title: "Castle Ravenloft",
          },
          type: "boardgames"
        },
        {
          id: 2,
          attributes:
          {
            title: "Dragoon",
          },
          type: "boardgames"
        },
      ]
    });
    res.status(200).end();
  });

  boardgamesRouter.post('/', function(req, res) {
    console.log(req.body)
    idCounter += 1
    res.send({
      data: {
        id: idCounter,
        attributes:
        {
          title: req.body.data.attributes.title,
        },
        type: "boardgame"
      }
    })
    res.status(201).end();
  });

  boardgamesRouter.get('/:id', function(req, res) {
    res.send({
      data: {
        id: 1,
        attributes:
        {
          title: "Castle Ravenloft",
        },
        type: "boardgames"
      }
    });
    res.status(200).end();
  });

  boardgamesRouter.patch('/:id', function(req, res) {
    console.log('PATCH')
    res.send({
      data: {
        id: req.body.data.id,
        attributes:
        {
          title: req.body.data.attributes.title,
        },
        type: "boardgame"
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

const db = require("../models");
const router = require('express').Router();
// Defining methods for the contactsController

router.get('/', function(req, res) {
    db.Contact
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });

  router.get('/:id', function(req, res) {
    db.Contact
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });

 router.post('/' , function(req, res) {
    db.Contact
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  });
 
  module.exports = router;

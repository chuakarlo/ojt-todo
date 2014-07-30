'use strict';
var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Todo     = mongoose.model('Todo');

/* GET home page. */
router.get('/', function(req, res) {
	Todo.find({}, function(err, todos){
		res.render('todos', {title: 'Todos', todos: todos});
	});
});

/* DELETE todo */
router.get('/delete/:id', function(req, res) {
	Todo.findByIdAndRemove(req.params.id, function(err) {
		if (!err) {
			res.redirect('/todos');
		}
	});
});

/* UPDATED todo */
router.get('/done/:id', function(req, res) {
	Todo.findByIdAndUpdate(req.params.id, {status: 'done'}, function(err, afr) {
		if (!err) {
			console.log(afr);
			res.redirect('/todos');
		}
	});
});

module.exports = router;

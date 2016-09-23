var Question = require('../models/questions.js'),
    Answer = require('../models/answers.js');

function mainControllerCustr(Question, Answer){
  this.index = function(req, res){
    Question.find(function(err, questions){
      if(err) return res.json(err);
      if(!questions.length){
        res.json({errors: "No questions in database yet"});
        return;
      }
      res.json(questions);
    })
  };

  this.createQuestion = function(req, res){
    Question.create(req.body, function(err, question){
      if(err) return res.json(err);
      res.json(question);
    })
  };

  this.showQuestion = function(req, res){
    Question.findById(req.params.q_id).populate('_answers').exec(function(err, question){
      if(err) return res.json(err);
      if(!question) return res.json({errors: "Having trouble finding this question!"});
      res.json(question);
    })
  };
  this.createAnswer = function(req, res){
    var answer = req.body;
    answer._question = req.params.q_id;
    console.log(answer);
    Answer.create(answer, function(err, answer){
      if(err) return res.json(err);
      Question.update({_id: req.params.q_id}, {$push: {_answers: answer._id}}, function(err, question){
        if(err) return res.json(err);
        if(!question) return res.json({errors: "Having trouble finding this question."});
        res.json(question);
      })
    })
  };

  this.likeAnswer = function(req, res){
    var answer_id = req.body.a_id;
    var answer = Answer.findById(answer_id, function(err, answer){
      if(err) return res.json(err);
      if(!answer) return res.json({errors: "Having trouble finding this answer"});
      answer.likes ++;
      answer.save(function(err){
        if(err) return res.json(err);
        res.json(answer);
      })
    })
  }
}

module.exports = new mainControllerCustr(Question, Answer);
var mCtrl = require('../controllers/mainController.js');

module.exports = function(app){
  app.get('/questions', mCtrl.index);
  app.get('/questions/:q_id', mCtrl.showQuestion);
  app.post('/questions', mCtrl.createQuestion);
  app.post('/questions/:q_id', mCtrl.createAnswer);
  app.patch('/answers/like', mCtrl.likeAnswer);
}
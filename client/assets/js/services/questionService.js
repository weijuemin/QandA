app.service('questionService', ['$http', function($http){
  this.index = function(callback){
    if(typeof callback !== 'function'){
      return "Wrong arg type.";
    }
    $http.get('/questions').then(function(res){
      if(res.data.errors){
        callback(res.data.errors, null);
      }else{
        callback(null, res.data);
      }
    })
  };
  this.createQuestion = function(qData, callback){
    if(typeof callback !== 'function'){
      return "Wrong arg type.";
    }
    $http.post('/questions', qData).then(function(res){
      if(res.data.errors){
        callback(res.data.errors, null);
      }else{
        callback(null, res.data);
      }
    })
  };
  this.showQuestion = function(q_id, callback){
    if(typeof callback !== 'function'){
      return "Wrong arg type.";
    }
    $http.get(`/questions/${q_id}`).then(function(res){
      if(res.data.errors){
        callback(res.data.errors, null);
      }else{
        callback(null, res.data);
      }
    })
  }
}])
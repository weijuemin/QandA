app.service('answerService', ['$http', function($http){

  this.createAnswer = function(q_id, answerData, callback){
    if(typeof callback !== 'function'){
      return "Wrong arg type.";
    }
    $http.post(`/questions/${q_id}`, answerData).then(function(res){
      if(res.data.errors){
        callback(res.data.errors, null);
      }else{
        callback(null, res.data);
      }
    })
  };
  this.like = function(a_id, callback){
    if(typeof callback !== 'function'){
      return "Wrong arg type.";
    }
    var data = {
      a_id: a_id
    };
    $http.patch('/answers/like', data).then(function(res){
      if(res.data.errors){
        callback(res.data.errors, null);
      }else{
        callback(null, res.data);
      }
    })
  }
}])
app.controller('mainController', ['$scope', '$cookies', '$location', '$routeParams', 'questionService', 'answerService', function($scope, $cookies, $location, $routeParams, qServ, aServ){

  var myCookie = $cookies.getObject('user');
  if(myCookie){
    if($location.url() === '/login'){
      $location.url('/dashboard');
    }
    $scope.curUser = myCookie;
  }else{
    if($location.url() !== '/login'){
      $location.url('/login');
    }
  };

  function getQuestions(){
    qServ.index(function(err, questions){
      if(err){
        $scope.errors = err;
      }else{
        $scope.questions = questions;
      }
    })
  }
  getQuestions();

  $scope.createQuestion = function(){
    var question = $scope.question;
    if(!question.description){
      delete question.description;
    }
    qServ.createQuestion(question, function(err, question){
      if(err){
        $scope.errors = err;
      }else{
        $scope.question = {};
        $location.url('/dashboard');
      }
    })
  };

  $scope.showQuestion = function(){
    var q_id = $routeParams.q_id;
    qServ.showQuestion(q_id, function(err, question){
      if(err){
        $scope.errors = err;
      }else{
        $scope.question = question;
      }
    })
  };
  if($routeParams.q_id){
    $scope.showQuestion();
  }

  $scope.createAnswer = function(){
    var q_id = $routeParams.q_id;
    var answer = $scope.answer;
    if(!answer.details){
      delete answer.details;
    }
    answer.user = $scope.curUser.name;
    aServ.createAnswer(q_id, answer, function(err, answer){
      if(err){
        $scope.errors = err;
      }else{
        $scope.answer = {};
        $location.url('/dashboard');
      }
    })
  }
  $scope.likeAnswer = function(a_id){
    aServ.like(a_id, function(err, answer){
      if(err){
        $scope.errors = err;
      }else{
        $scope.showQuestion();
      }
    })
  }
  $scope.logout = function(){
    $cookies.remove('user');
    $scope.curUser = undefined;
    $location.url('/login');
  }
}])
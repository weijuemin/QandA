var app = angular.module('app', ['ngRoute', 'ngCookies'])

.config(function($routeProvider){
  $routeProvider
    .when('/login', {
      templateUrl:'../../../partials/session/login.html',
      controller:'sessionController'
    })
    .when('/dashboard', {
      templateUrl:'../../../partials/main/dashboard.html',
      controller:'mainController'
    })
    .when('/new_question', {
      templateUrl:'../../../partials/main/new_question.html',
      controller:'mainController'
    })
    .when('/questions/:q_id', {
      templateUrl:'../../../partials/main/show_question.html',
      controller:'mainController'
    })
    .when('/questions/:q_id/answer', {
      templateUrl:'../../../partials/main/new_answer.html',
      controller:'mainController'
    })
    .otherwise({
      redirectTo:'/login'
    })
})
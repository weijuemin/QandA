app.controller('sessionController', ['$scope', '$cookies', '$location', function($scope, $cookies, $location){
  
  var myCookie = $cookies.getObject('user');
  if(myCookie){
    if($location.url() === '/login'){
      $location.url('/dashboard');
    }
  }else{
    if($location.url() !== '/login'){
      $location.url('/login');
    }
  }

  $scope.login = function(){
    $cookies.putObject('user', $scope.user);
    $location.url('/dashboard');
  };
}])
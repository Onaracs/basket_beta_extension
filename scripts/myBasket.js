var basketNG = angular.module('basketNg', []);

basketNG.factory('sharedLinks',  ['http', function($http){
  var sharedLinks = {}
  sharedLinks.get = function(){
    var request = $http({
                    method: 'get',
                    url: '/localhost:3000/users_inbox_links'});
    console.log("Request!");
    console.log(request);
    return request;
  }
  return sharedLinks
}]);

basketNG.controller('linksController', ['$scope', 'sharedLinks', function($scope, sharedLinks) {
  // console.log(sharedLinks.request);
  $scope.fetchLinks = function(){
    console.log("Woo I've been clicked!");
    sharedLinks.get().then(function(response){
      $scope.links = response
    });
  };
}]);
angular.module('SaveCtrl', [
  'getBaskets'
])

.controller('SaveCtrl', ['$scope', 'getUsersBaskets', function(
  $scope, 
  getUsersBaskets
) {

  // Make call to Rails API to get a list of the users baskets
  getUsersBaskets().then(function(result) {
    console.log(result);
    $scope.baskets = result.data;
  });

}])
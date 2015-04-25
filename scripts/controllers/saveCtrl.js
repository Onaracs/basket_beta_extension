angular.module('SaveCtrl', [
  'getBaskets'
])

.controller('SaveCtrl', ['$scope', 'getUsersBaskets', function(
  $scope, 
  getUsersBaskets
) {

  $scope.message = '';
  // Make call to Rails API to get a list of the users baskets
  getUsersBaskets().then(function(result) {
    $scope.baskets = result.data;
  });

  $scope.showSubmit = function(basket) {
    $scope.selectedBasket = basket;

    $scope.showMessage = true;
  }

  $scope.saveLink = function(basketID) {
    console.log('Going to save the link!');
    console.log(basketID);
    console.log($scope.message);
  }

}])
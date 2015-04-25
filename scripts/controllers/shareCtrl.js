angular.module('ShareCtrl', [
  'getFriends'
])

.controller('ShareCtrl', ['$scope', 'getUsersFriends', function(
  $scope,
  getUsersFriends
) {

  getUsersFriends().then(function(response) {
    console.log(response);
  })

}])
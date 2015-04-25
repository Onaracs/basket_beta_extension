var app = angular.module('app', [
  'ui.router',
  'ShareCtrl',
  'SaveCtrl',
  'BasketCtrl',
  'getBaskets'
]);

app.config(function(
	$stateProvider, 
	$urlRouterProvider
) {

	$urlRouterProvider.otherwise('save');

	$stateProvider
    .state('share', {
      url: '/share',
      controller: 'ShareCtrl',
      templateUrl: 'views/shareLink.html'
    })
	  .state('save', {
	    url: '/save',
	    controller: 'SaveCtrl',
	    templateUrl: 'views/saveBaskets.html'
	  })
    .state('baskets', {
      url: '/baskets',
      controller: 'BasketCtrl',
      templateUrl: 'views/myBaskets.html'
    })
})

app.controller('toggleCtrl', ['$scope', function($scope) {
  $scope.tab = 1;

  $scope.setTab = function(tabNumber) {
    $scope.tab = tabNumber;
  };

  $scope.isSet = function(tabNumber) {
    return tabNumber === $scope.tab;
  };
}]);

// basketNG.controller('linksController', ['$scope', 'sharedLinks', function($scope, sharedLinks) {
//   // console.log(sharedLinks.request);
//   $scope.fetchLinks = function(){
//     console.log("Woo I've been clicked!");
//     sharedLinks.get().then(function(response){
//       $scope.links = response
//     });
//   };
// }]);
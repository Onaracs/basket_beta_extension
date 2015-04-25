angular.module('getFriends', [])

.factory('getUsersFriends', ['$http', function($http) {

  return function() {
    var url = 'http://localhost:3000/ng_users_friends'

    var promise = $http({
      url: url,
      method: 'GET'
    }).success(function(response) {

      return response;

    }).error(function(response) {

      return {'status':false};

    })

    return promise;
  }

}])
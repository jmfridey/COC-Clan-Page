app.factory('getPlayers', function($q, $http, $routeParams) {
  var playerService = {
    returnedData: [],
    getData: function(forceRefresh) {
      if(forceRefresh) {
        var playerTag = window.encodeURIComponent($routeParams.playerTag);
        var url = 'php/coc-clan.php?player=' + playerTag;
        $http.get(url)
        .then(function(response) {
          var data = response.data;
          playerService.returnedData = [];
          angular.copy(response.data, playerService.returnedData);
        },
        function(error) {
          return error.data;
        });
      } else {

      };
    }
  };
  return playerService;
});


app.factory('getClan', function($q, $http, $routeParams) {

  var clanService = {
    returnedData: [],
    getData: function(forceRefresh) {
      var deferred = $q.defer();

      if(forceRefresh) {
        $http.get('php/coc-clan.php')
        .then(function(response) {
          var data = response.data;
          angular.copy(data, clanService.returnedData)
          deferred.resolve(clanService.returnedData);
        },
        function(error) {
          return error.reason;
        });
      } else {
        deferred.resolve(clanService.returnedData);
      }
      return deferred.promise;
    }
  };

  clanService.getData(true);
  return clanService;

});

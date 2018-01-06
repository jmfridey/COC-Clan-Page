var app = angular.module('clashData', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    controller: 'clashClan',
    templateUrl: 'views/clashClan.html'
  })
  .when('/builder-base', {
    controller: 'clashClanBase',
    templateUrl: 'views/clashClanBase.html'
  })
  .when('/player/:playerTag/', {
    controller: 'clashPlayer',
    templateUrl: 'views/clashPlayer.html',
  })
  .when('/player/:playerTag/builder-base/', {
    controller: 'clashPlayerBase',
    templateUrl: 'views/clashPlayerBase.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});

app.filter('urlencode', function() {
  return function(input) {
    return window.encodeURIComponent(input);
  }
});

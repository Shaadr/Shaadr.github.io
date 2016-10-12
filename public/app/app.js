angular.module('gooTube', ['ui.router'])

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './views/home.html',
        controller:'homeCtrl'
      })
      .state('search', {
        url: '/search',
        templateUrl: './views/search.html',
        controller:'searchCtrl'
      })
      .state('404', {
        url: '/404',
        templateUrl: './views/404.html',
        controller: '404Ctrl'
      })
      .state('clock', {
        url:'/clock',
        templateUrl: './views/clock.html',
        controller: 'clockCtrl'
      })


  })

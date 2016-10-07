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

  // $(function() {
  //   $("form").on('submit', function(e) {
  //     e.preventDefault();
  //     //prepare request
  //     var resquest = gapi.client.youtube.search.list({
  //       part: "snippet",
  //       type: 'video',
  //       q: encodeURIComponent($('search').val()).replace(/$20/g, "+"),
  //       maxResults: 8,
  //       order: "viewCount"
  //     })
  //     //execute the resquest
  //     request.execute(function(response) {
  //       console.log(response)
  //     })
  //   })
  // })
  //
  // function init() {
  //   gapi.client.setApiKey('AIzaSyAnq1Bc7Tj9uknrfNaOUGiu4O-JaYwDnKM');
  //   gapi.client.load('youtube', 'v3', function() {
  //     //youtube api is ready
  //   })
  // }

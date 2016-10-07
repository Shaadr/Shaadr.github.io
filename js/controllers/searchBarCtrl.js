'use strict';

function init() {
  window.initGapi(); //calls init func defined on window
}

  angular.module('gooTube')
  .controller('searchBarCtrl', function($scope, $window, $sce, mainServ) {

    $window.initGapi = function() {
      $scope.$apply($scope.getChannel);
    };

    $scope.getVideos = function() {
      mainServ.googleApiClientReady().then(function(data) {
        $scope.video = data;
      }, function(error) {
        conosle.log('Failed: ' + error)
      })
      }

      

})

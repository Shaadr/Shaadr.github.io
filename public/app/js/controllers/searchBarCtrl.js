'use strict';


  angular.module('gooTube')
  .controller('searchBarCtrl', function($scope, mainServ) {


      $scope.vids = function(searchText){
        mainServ.getClips(searchText).then(function(response) {
          console.log(response);
          $scope.movies = response;
        })
      }



})

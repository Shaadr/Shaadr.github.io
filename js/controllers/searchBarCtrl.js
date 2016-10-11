'use strict';


  angular.module('gooTube')
  .controller('searchBarCtrl', function($scope, mainServ) {


      $scope.vids = function(){
        mainServ.getClips().then(function(response) {
          console.log(response);
          $scope.movies = response.items;
        })
        console.log($scope.videos)
      }


  $scope.getOutput = function(item){
  	$scope.title = item.snippet.title;
  	$scope.description = item.snippet.description;
  	$scope.thumb = item.snippet.thumbnails.high.url;
  	$scope.channelTitle = item.snippet.channelTitle;
  	$scope.videoDate = item.snippet.publishedAt;

	// Build Output String
  	var output = '<li>' +
  	'<div class="list-left">' +
  	'<img src="'+thumb+'">' +
  	'</div>' +
  	'<div class="list-right">' +
  	'<h3><a href="https://www.youtube.com/embed/'+videoId+'">'+title+'</a></h3>' +
  	'<small>By <span class="cTitle">'+channelTitle+'</span> on '+videoDate+'</small>' +
  	'<p>'+description+'</p>' +
  	'</div>' +
  	'</li>' +
  	'<div class="clearfix"></div>' +
  	'';

	return output;
}


})

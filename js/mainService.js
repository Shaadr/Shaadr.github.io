angular.module('gooTube')
.service('mainServ', function($http, $q){

  var deferred = $q.defer();
  this.googleApiClientReady = function() {
    gapi.client.setApiKey('AIzaSyAnq1Bc7Tj9uknrfNaOUGiu4O-JaYwDnKM');
    gapi.client.load('youtube', 'v3', function() {
      var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: $('#query').val(),
        order:'date',
        type:'video'
      });
      requst.execute(function(response) {
        deferred.reslove(response.result);
      })
    })
    return deferred.promise;
  }




})

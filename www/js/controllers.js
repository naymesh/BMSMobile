angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('StudyListController', ['$scope', '$http', '$stateParams', 'contextService', function($scope, $http, $stateParams, contextService) {

  var studyListURL = contextService.getBaseUrl() + '/studies/list?programId=1';

  $http.get(studyListURL).success(
    function (data, status, headers, config) {
        $scope.studyList = data;
    }
  );

}])

.controller('ProgramListController', ['$scope', '$http', '$stateParams', 'contextService', function($scope, $http, $stateParams, contextService) {

  $http.get(contextService.getBaseUrl() + '/programs').success(
    function (data, status, headers, config) {
        $scope.programs = data;
    }
  );

}])

.controller('StudyDetailsController', ['$scope', '$http', '$stateParams', 'contextService', function($scope, $http, $stateParams, contextService) {

  var studyListURL = 
    contextService.getBaseUrl() + '/studies/list?programId=1';
  
  $http.get(studyListURL).success(
    function (data, status, headers, config) {
      $scope.studyDetails = data[0];
    }
  );

  var studyObservationsURL = contextService.getBaseUrl() + '/study/123/observationunits';
  $http.get(studyObservationsURL).success(
    function (data, status, headers, config) {
        $scope.observationList = data;      
    }
  );

  $scope.saveObservations = function (observations) {
      $http.put(studyObservationsURL, observations).success(
        function (data, status, headers, config) {
          alert("Server responded:" + JSON.stringify(data));      
        }
      );

  };
}])

.controller('SettingsController', ['$scope', '$http', '$stateParams', 'contextService', function($scope, $http, $stateParams, contextService) {
  //TODO
}]);

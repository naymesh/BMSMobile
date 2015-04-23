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

  contextService.setSelectedCrop($stateParams.cropType);
  var studyListURL = contextService.getBaseUrl() + '/study/'+ contextService.getSelectedCrop() + '/list';

  if($stateParams.programUniqueId) {
    studyListURL += "?programUniqueId=" + $stateParams.programUniqueId;
  }

  $http.get(studyListURL).success(
    function (data, status, headers, config) {
        $scope.studyList = data;
  });

}])

.controller('ProgramListController', ['$scope', '$http', '$stateParams', 'contextService', function($scope, $http, $stateParams, contextService) {

  $http.get(contextService.getBaseUrl() + '/program/list').success(
    function (data, status, headers, config) {
        $scope.programs = data;
   });

}])

.controller('StudyDetailsController', ['$scope', '$http', '$stateParams', 'contextService', function($scope, $http, $stateParams, contextService) {

  //TODO replace with get study details service. For now just get list, find by id and display summary.
  $http.get(contextService.getBaseUrl() + '/study/'+ contextService.getSelectedCrop() + '/list').success(
    function (data, status, headers, config) {
      for(var i = 0; i <  data.length; i++) {
        if(data[i].id == parseInt($stateParams.studyId, 10)) {
          $scope.studyDetails = data[i];
          break;
        }
      }
    });
}])

.controller('SettingsController', ['$scope', '$http', '$stateParams', 'contextService', function($scope, $http, $stateParams, contextService) {
  //TODO
}]);

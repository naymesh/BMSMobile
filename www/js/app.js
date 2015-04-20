// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.factory('contextService', function() {

  var selectedCrop = '';

  return {
    getBaseUrl : function() {
      return "http://localhost:19080/bmsapi";
      // For android emulator uncomment following line and comment the above line
      // return "http://10.0.2.2:19080/bmsapi";
    },

    getSelectedCrop : function(crop) {
      return selectedCrop;
    },

    setSelectedCrop : function(crop) {
      selectedCrop = crop;
    }

  };
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.settings', {
      url: "/settings",
      views: {
        'menuContent': {
          templateUrl: "templates/settings.html",
          controller: 'SettingsController'
        }
      }
  })


  .state('app.programList', {
      url: "/programList",
      views: {
        'menuContent': {
          templateUrl: "templates/programList.html",
          controller: 'ProgramListController'
        }
      }
  })

  .state('app.studyList', {
      url: "/studyList/:cropType",
      views: {
        'menuContent': {
          templateUrl: "templates/studyList.html",
          controller: 'StudyListController'
        }
      }
  })

  .state('app.studyDetails', {
    url: "/studyDetails/:studyId",
    views: {
      'menuContent': {
        templateUrl: "templates/studyDetails.html",
        controller: 'StudyDetailsController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/programList');
});

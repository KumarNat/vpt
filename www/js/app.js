// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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

    .state('app.appointments', {
      url: "/appointments",
      views: {
        'menuContent': {
          templateUrl: "templates/appointments.html",
          controller: 'AppointmentsCtrl'
        }
      }
    })
    
    
    .state('app.walkins', {
      url: "/walkins",
      views: {
        'menuContent': {
          templateUrl: "templates/walkins.html",
          controller: 'WalkinsCtrl'
        }
      }
    })
    
    .state('app.messages', {
      url: "/messages",
      views: {
        'menuContent': {
          templateUrl: "templates/messages.html",
          controller: 'MessagesCtrl'
        }
      }
    })
    
	.state('app.walkin', {
		url: "/walkins/:playlistId",
		views: {
		  'menuContent': {
			templateUrl: "templates/walkin.html",
			controller: 'WalkinsCtrl'
		  }
		}
	})
	
	.state('app.message', {
		url: "/messages/:playlistId",
		views: {
		  'menuContent': {
			templateUrl: "templates/message.html",
			controller: 'MessagesCtrl'
		  }
		}
	})
	
	.state('app.appointment', {
		url: "/appointments/:playlistId",
		views: {
		  'menuContent': {
			templateUrl: "templates/appointment.html",
			controller: 'AppointmentsCtrl'
		  }
		}
	});
	
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/appointments');
});

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
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

.controller('MyCtrl', function($scope) {


  var menu = ["Appointments","Walk-Ins","Messages","Check-In"];
  
  //,"","","" 
  
var SubMenu = new Array(4)

SubMenu [0] = new Array(4)
SubMenu [0][0] = "Confirm"
SubMenu [0][1] = "Reschedule"
SubMenu [0][2] = "Add to Calendar"
SubMenu [0][3] = "Map It"

SubMenu [1] = new Array(2)
SubMenu [1][0] = "Beryl"
SubMenu [1][1] = "engineer"

SubMenu [2] = new Array(3)
SubMenu [2][0] = "Ann"
SubMenu [2][1] = "surgeon"
SubMenu [2][2] = "sf"

SubMenu [3] = new Array(2)
SubMenu [3][0] = "Bill"
SubMenu [3][1] = "taxman"

  $scope.groups = [];
for (var i=0; i<menu.length; i++) {
    $scope.groups[i] = {
      name: menu[i],
      items: []
    };
    for (var j=0; j<SubMenu[i].length; j++) {
      $scope.groups[i].items.push(SubMenu[i][j]);
    }
    }
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
  
  	{ title: 'Appointments', id: 1 , icon : 'ion-email',count : '',url : 'appointments'},
    { title: 'Walk-Ins', id: 2  , icon : 'ion-email',count : '',url : 'walkins'},
    { title: 'Messages', id: 3  , icon : 'ion-email',count : '2',url : 'messages'},
    { title: 'Check-In', id: 4  , icon : 'ion-email',count : '',url : ''},
    { title: 'Settings', id: 5  , icon : 'ion-email',count : '',url : ''},
    { title: 'Contact Us', id: 6  , icon : 'ion-email' ,count : '',url : ''},
    { title: 'Our Team', id: 7  , icon : 'ion-email' ,count : '',url : ''}
  ];
  
  $scope.getIcon = function(playlists) {
    return playlists.icon;
  };
  
})



.controller('AppointmentsCtrl', function($scope) {
  $scope.appointments = [
  
  	{ title: 'Appointment1', id: 1, status : 'confirmed', therapist : 'Raja', date : '05/07/2015', time : '18:30', added : '01/07/2015 15:36'},
    { title: 'Appointment2', id: 1, status : 'not-confirmed', therapist : 'Raja', date : '05/07/2015', time : '18:30', added : '01/07/2015 15:36'},
    { title: 'Appointment3', id: 1, status : 'confirmed', therapist : 'Raja', date : '05/07/2015', time : '18:30', added : '01/07/2015 15:36'},
    { title: 'Appointment4', id: 1, status : 'not-confirmed', therapist : 'Raja', date : '05/07/2015', time : '18:30', added : '01/07/2015 15:36'},
    { title: 'Appointment5', id: 1, status : 'not-confirmed', therapist : 'Raja', date : '05/07/2015', time : '18:30', added : '01/07/2015 15:36'},
    { title: 'Appointment6', id: 1, status : 'confirmed', therapist : 'Raja', date : '05/07/2015', time : '18:30', added : '01/07/2015 15:36'},
    { title: 'Appointment7', id: 1, status : 'confirmed', therapist : 'Raja', date : '05/07/2015', time : '18:30', added : '01/07/2015 15:36'},
  ];
  
 $scope.isConfirmed = function(appointments) {
    return appointments.status === 'not-confirmed';
  };
  
  $scope.toggle = function(appointments) {
   
   if(appointments.status === 'confirmed')
    appointments.status = 'not-confirmed';
    else
    appointments.status = 'confirmed';
  };
  
   $scope.close = function() {
  		$ionicHistory.goBack();
  };
  
   $scope.viewDetail = function(appointments) {
      $state.go("#/app/appointments/:"+appointments.id); 
    };
 
})


.controller('WalkinsCtrl', function($scope) {
  $scope.walkins = [
  
  	{ title: 'Walkin 1', id: 1, status : 'confirmed', therapist : 'Raja', date : '05/07/2015', time : '18:30', added : '01/07/2015 15:36'},
    { title: 'Walkin 2', id: 1, status : 'not-confirmed', therapist : 'Raja', date : '05/07/2015', time : '18:30', added : '01/07/2015 15:36'},
    { title: 'Walkin 3', id: 1, status : 'confirmed', therapist : 'Raja', date : '05/07/2015', time : '18:30', added : '01/07/2015 15:36'},
    { title: 'Walkin 4', id: 1, status : 'not-confirmed', therapist : 'Raja', date : '05/07/2015', time : '18:30', added : '01/07/2015 15:36'},
    { title: 'Walkin 5', id: 1, status : 'not-confirmed', therapist : 'Raja', date : '05/07/2015', time : '18:30', added : '01/07/2015 15:36'},
    { title: 'Walkin 6', id: 1, status : 'confirmed', therapist : 'Raja', date : '05/07/2015', time : '18:30', added : '01/07/2015 15:36'},
    { title: 'Walkin 7', id: 1, status : 'confirmed', therapist : 'Raja', date : '05/07/2015', time : '18:30', added : '01/07/2015 15:36'},
  ];
  
 $scope.isConfirmed = function(walkins) {
    return walkins.status === 'confirmed';
  };
  
   $scope.toggle = function(walkins) {
   
   if(walkins.status === 'confirmed')
    walkins.status = 'not-confirmed';
    else
    walkins.status = 'confirmed';
  };
})



.controller('MessagesCtrl', function($scope) {
  $scope.messages = [
  
  	{ title: 'Message 1', body: 'Message 1', id: 1, status : 'read', date : '05/07/2015', time : '18:30', hasAttach : true},
    { title: 'Message 2', body: 'Message 1',  id: 1, status : 'not-read', date : '05/07/2015', time : '18:30', hasAttach : false},
    { title: 'Message 3', body: 'Message 1', id: 1, status : 'read', date : '05/07/2015', time : '18:30', hasAttach : false},
    { title: 'Message 4', body: 'Message 1', id: 1, status : 'not-read', date : '05/07/2015', time : '18:30', hasAttach : true},
    { title: 'Message 5', body: 'Message 1', id: 1, status : 'not-read', date : '05/07/2015', time : '18:30', hasAttach : true},
    { title: 'Message 6', body: 'Message 1', id: 1, status : 'read', date : '05/07/2015', time : '18:30', hasAttach : false},
    { title: 'Message 7', body: 'Message 1', id: 1, status : 'read', date : '05/07/2015', time : '18:30', hasAttach : true},
  ];
  
 $scope.isRead = function(Message) {
    return Message.status === 'not-read';
  };
  
   $scope.hasAttach = function(Message) {
    return Message.hasAttach;
  };
  
   $scope.read = function(Message) {
       Message.status = 'read';
  };
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
});

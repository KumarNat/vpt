angular.module('vptwi.services', [])

.factory('WalkIns', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // <!-- appointment details: status, date, time, dateformatted, timeFormatted, location/venue/place, therapistId, therapistName, emrId, clinicId -->
  
		
  var walkIns = [{
    id: 0,
    dateformatted: 'June 30th',
	timeformatted: '10:30am',
    location: 'therapistName',
    therapistName: 'therapistName',
	status: 'Confirmed'
  }, {
    id: 1,
    dateformatted: 'July 2nd',
	timeformatted: '10:30am',
    location: 'therapistName',
    therapistName: 'therapistName',
	status: 'Not Confirmed'
  },{
    id: 2,
    dateformatted: 'July 6th',
	timeformatted: '10:30am',
    location: 'therapistName',
    therapistName: 'therapistName',
	status: 'Not Confirmed'
  }, {
    id: 3,
    dateformatted: 'July 8th',
	timeformatted: '12 noon',
    location: 'therapistName',
    therapistName: 'therapistName',
	status: 'Not Confirmed'
  }, {
    id: 4,
    dateformatted: 'July 10th',
	timeformatted: '10:30am',
    location: 'therapistName',
    therapistName: 'therapistName',
	status: 'Not Confirmed'
  }];

  return {
    all: function() {
      return walkIns;
    },
    remove: function(walkIn) {
      walkIns.splice(walkIns.indexOf(walkIn), 1);
    },
    get: function(apptId) {
      for (var i = 0; i < walkIns.length; i++) {
        if (walkIns[i].id === parseInt(walkInId)) {
          return walkIns[i];
        }
      }
      return null;
    }
  };
});

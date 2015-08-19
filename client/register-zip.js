//zipcode registration page stuff

//prevent the page from reloading after submiting
Template.registerZip.events({
	"submit form": function (event, template) {
		event.preventDefault();
		console.log(template.find("#zip"));
	}
});


// if (Meteor.isClient) {
	// Meteor.call(
		// 'sendEmail',
		////to
		// user.email, //fix this once userdata is sorted
		////from
		// '',
		////subject
		// 'Frost is Coming',
		////text
		// 'Get ready to rumble ' username '. Things are going to get chilly soon and your plants will need a helping hand to get though it. Your first frost date is ' //grab date from API and stick here
		// );
// }







//just some reminders on stuff:
// o = {
// 	p: 1,
// 	p2: 3
// }

// o.p == 1


// o = {
// 	'omg! wtf': 34,
// 	0: 'A'
// }

// o["omg! wtf"] == 34
// o[0] == 'A'


// arr = {
// 	0: 'first element',
// 	1: 'second element',
// 	length: 2
// }

// arr[0] == 'first element'
// arr.length == 2


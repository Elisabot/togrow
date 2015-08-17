Template.registerZip.events({
	"submit form": function (event, template) {
		event.preventDefault();
		console.log(template.find("#zip"));
	}
});


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


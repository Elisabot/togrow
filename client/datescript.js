if (Meteor.isClient) {



	//Binds zipForm to function onFormSubmit
	$( "#zipForm" ).submit(onFormSubmit)

	//When the user enters a zipcode the following occurs:
	function onFormSubmit ( formSubmitEvent ) {
		console.log("Form submitted and man handled...");
		//prevent the page from reloading on submission
		formSubmitEvent.preventDefault();


		//Get info from zipcode box
		var zip = $( "#zip" ).val();
		console.log("zip:", zip);

		$.get("http://maps.googleapis.com/maps/api/geocode/json", 
			{ address: zip }, 
			onGeocodeResponse);
	}

	function onGeocodeResponse ( data ) {
		console.log(data);
		var longitude = data.results[0].geometry.location.lng;
		var latitude = data.results[0].geometry.location.lat;
		var location = data.results[0].formatted_address;
		console.log(longitude, latitude, location);

		$.get("http://farmsense-prod.apigee.net/v1/frostdates/stations/", 
			{ lat: latitude, lon: longitude },
			onFarmStationResponse);

	}

	//response from farm sense 
	function onFarmStationResponse ( data ) {
		data = JSON.parse(data);
		var station = data[0];
		console.log(station);

		$.get("http://farmsense-prod.apigee.net/v1/frostdates/probabilities/", 
			{ station: station.id, season: 1 },
			onFarmProbabilityResponse);
	}

	function onFarmProbabilityResponse ( data ) {
		data = JSON.parse(data);
		//next line is totally experimental
		var temperature = data[3];
		console.log(data);
	}
}

if (Meteor.isServer) {
	//mailgun hookup
	Meteor.startup(function () {
		process.env.MAIL_URL='smptp://postmaster%40sandbox09466a9725354139b690759ab4885905.mailgun.org:3513ff37a2f2618eaa5588c3137f1451@smtp.mailgun.org:587'
	  });
}

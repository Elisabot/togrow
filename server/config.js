if (Meteor.isServer) {
	Meteor.startup(function () {
		Accounts.config({
			process.env.MAIL_URL='smptp://postmaster@sandbox09466a9725354139b690759ab4885905.mailgun.org:3513ff37a2f2618eaa5588c3137f1451@smtp.mailgun.org:'
			sendVerificationEmail:true;
		})
	})
}
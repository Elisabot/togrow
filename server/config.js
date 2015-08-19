if (Meteor.isServer) {
	Meteor.startup(function () {
		process.env.MAIL_URL='smtp://postmaster@sandbox09466a9725354139b690759ab4885905.mailgun.org:3513ff37a2f2618eaa5588c3137f1451@smtp.mailgun.org:587'
		Accounts.emailTemplates.siteName = "ToGrow";
		Accounts.config({
			sendVerificationEmail:true
		})
	});
	Meteor.methods({
		sendEmail: function (to, from, subject, text) {
			check([to, from, subject, text], [String]);

			//allow other method calls to run without waiting for email sending to complete
			this.unblock();

			Email.send({
				to: to,
				from: from,
				subject: subject,
				text: text
			});
		}
	});
}
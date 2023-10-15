import nodemailer from 'nodemailer'; 
import Transport from "nodemailer-sendinblue-transport";

const emailService = (sendTo, subject, htmlTemp) => {
	const transporter = nodemailer.createTransport(
		new Transport({ apiKey: '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' })
	);

	const footer = `<p>This email was sent from Brain vault.</p>`;

	const options = {
		from: process.env.SEND_FROM,
		to: sendTo,
		subject: subject,
		html: `${htmlTemp} <br/> <br/>${footer}`,
	};

	transporter.sendMail(options, function (err, info) {
		if (err) {
			console.log(err);
			return err;
		}
		console.log(info);
		return info.response;
	});
};

export default emailService;
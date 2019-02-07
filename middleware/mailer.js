
const nodemailer = require('nodemailer')

const mailer = (req,res) => {
	const output = `
		<p>You have a new quote request</p>
		<h3>Contact Details</h3>
		<ul>
			TESTING: Below is the whole request body to see which fields are making it through the email:
			${JSON.stringify(req.body)}
			
			<li>Name: ${req.body.name}</li>
			<li>Address: ${req.body.address}</li>
			<li>Suburb: ${req.body.suburb}</li>
			<li>Email: ${req.body.email}</li>
			<li>Property Type: ${req.body.propertyType}</li>
			<li>Services Required: ${req.body.service}</li>		
			<li>Inspection Date: ${req.body.dateOfInspection}</li>
			<li>Inspection Time: ${req.body.timeOfInspection}</li>
			<li>Phone: ${req.body.phone}</li>
		</ul>
		<h3>Message</h3>
		<p>${req.body.message}</p>
		<br/><br/>
		<p> ***QUOTE FORM*** </p>
		<br/><br/>
		<h3>Services and Rates:</h3>
		<p>______</p>
		<p>______</p>
		<p>______</p>
		<h3>Extra Charges:</h3>
		<p>______</p>
		<h3>Total Quote:</h3>
		<p>______</p>
		<h3>Booking Date and Time:</h3>
		<p>______</p>
		<h3>Approval Signature:</h3>
		<p>______</p>

	`
	let transporter = nodemailer.createTransport({
		host: "smtp-mail.outlook.com",
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
		  user: 'beththeboo94@hotmail.com', // generated ethereal user
		  pass: 'Boovic94' // generated ethereal password
		},
		tls: {
			rejectUnauthorized: false
		}
	  });
	
	  // setup email data with unicode symbols
	  let mailOptions = {
		from: '"Test" , <beththeboo94@hotmail.com>', // sender address
		to: "huythanhdao@gmail.com, jaouad.pxy@gmail.com", // list of receivers
		subject: `Quote Request` , // Subject line
		text: "Someone is requesting a quote:", // plain text body
		html: output // html body
	  };
	
	  // send mail with defined transport object
	  transporter.sendMail(mailOptions, (error, info) => {
		  if (error) {
			  return console.log(error)
		  }
		  console.log('Message sent: %s', info.messageID)
		  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
		  res.render('contact')
		  })
		  
	}
    
module.exports = mailer
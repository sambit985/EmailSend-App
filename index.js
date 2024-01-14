//send emial using nodemailer
//import module what is required for send an email
const nodemailer = require("nodemailer");

//create function to do an action
const sendEmail = async () => {
  //Need transporter so crete transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kumarsambit678@gmail.com",
      pass: "wfpiqbdmounurvfc",
    },
  });

  //Need mail options
  const mailOptions = {
    from: "kumarsambit678@gmail.com",
    to: "sambit@vixr.io",
    subject: "Nodemailer App Test",
    text: "This email send by using nodemailer to check whether the app is working fine or not. Do not send reply back !!! Have a good day",
  };

  //Send mail using transporter
  try {
    await transporter.sendMail(mailOptions);
    console.log("Send email successfully");
  } catch (error) {
    console.log("Error while sending an email usnig nodemailer:-", error);
  }
};

// Invoke the function
sendEmail();

var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'ishmamali2200@gmail.com',
        pass: 'ishmamali786'
    }
})
var mailOptions = {
    from: 'ishmamali2200@gmail.com',
    to: 'ishmamali2200@gmail.com',
    subjject: 'test node mail',
    text: 'hello this is me ishmam ali khan'
}
transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log('email has been sent', info.response);
    }
})
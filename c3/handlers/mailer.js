const { sendMail } = require ("../pkg/mailer");
const { validate, MailgunFields } = require ("../pkg/mailer/validate");

const sendWelcomeMail = async (req, res) => {
    try{
        
        await validate(req.body, MailgunFields); //VALIDATES FIELDS to, firstname, lastname, email
        const result = await sendMail(
            req.body.to,
            "WELCOME",
            req.body.message
        );
        return res.status(201).send(result);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

const sendPasswordResetMail = async (req, res) => {
    try{
        const result = await sendMail(  //to, firstname, lastname, email
            req.body.to,
            "PASSWORD_RESET",
            req.body.message
        );
        return res.status(201).send(result);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    sendPasswordResetMail,
    sendWelcomeMail
}
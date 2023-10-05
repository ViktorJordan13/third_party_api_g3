const fs = require("fs");
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

const config = require("../config");

const mailTemplate = {
    PASSWORD_RESET: {
        title: "Your password reset link has been generated",
        template: "reset_password.html",
    },
    WELCOME: {
        title: "Welcome to the class of learning mailgun",
        template: "welcome.html",
    }
}

const sendMail = async (to, type, data) => {
    // to -> to whom the mail is sent
    // type -> it will refer to the corresponding template based on the type 
    // data -> data sent from the user
    const mg = mailgun.client({
        username: "api",
        key:
            config.getSection("development").api_key ||
            "" //api_key value goes here
    });

    let title = mailTemplate[type].title;
    let templatePath = `${__dirname}/../../email_templates/${mailTemplate[type].template}`;
    let content = await readTemplate(templatePath);

    const { user, link } = data;
    const userFullName = user.fullname.split(" ");
    const firstName = userFullName[0];
    const lastName = userFullName[1];

    let regexName = new RegExp(`\{\{first_name\}\}`, "g");
    let regexSurname = new RegExp(`\{\{last_name\}\}`, "g");
    let regexLink = new RegExp(`\{\{link\}\}`, "g");

    content = content.replace(regexName, firstName);
    content = content.replace(regexSurname, lastName);
    content = content.replace(regexLink, link);

    let options = {
        from: config.getSection("development").sender_email,
        to: to,
        subject: title,
        html: content,
    };

    try{
        const res = await mg.messages.create(
            config.getSection("development").domain,
            options
        );

        return res;
    }catch(err){
        throw err;
    }

}

const readTemplate = async (file) => {
    return new Promise((success, fail) => {
        fs.readFile(file, "utf-8", (err, data) => {
            if(err) return fail(err);
            return success(data);
        });
    });
}

module.exports = {
    sendMail,
}
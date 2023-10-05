const { Validator } = require("node-input-validator");

const AccountSignUp = {  //Kreirate nov account, odnosno se registriranje
    email: "required|email", //test@gmail.com
    password: "required|string",
    fullname: "required|string"
}

const AccountLogin = {
    email: "required|email",
    password: "required|string"
}

const validate = async (data, schema) => {
    //data = { "email": "test@gmail.com", "password": "test"}
    //schema = {
        // email: "required|email", //test@gmail
        //password: "required|string"
   // }
    let v = new Validator(data, schema);
    let e = v.check(); //v.check ke gi sporedi dvete polinja dali imaat isti klucevi
    if(!e){
        throw{
            code: 400,
            error: v.errors,
        };
    }
};

module.exports = {
    AccountLogin,
    AccountSignUp,
    validate
}
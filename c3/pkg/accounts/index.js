const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    email: String,
    password: String,
    fullname: String
});

const Account = mongoose.model("accounts", accountSchema);

const create = async(acc) => {
    const account = new Account(acc);
    return account.save();
};

const update = async(id, newData) => {
    return await Account.updateOne({ _id: id}, newData);
};

const remove = async (id) => {
    return await Account.deleteOne({ _id: id });
};

const getById = async(id) => {
    return await Account.findOne({ _id: id });
};

const getByEmail = async(email) => {
    return await Account.findOne( {email: email} );
};

const getAll = async () => {
    return await Account.find({});
}

module.exports = {
    create,
    update,
    remove,
    getAll,
    getByEmail,
    getById
};
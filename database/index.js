const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout');

const userInfoSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    line1: String,
    line2: String,
    city: String,
    state: String,
    zipcode: Number,
    cell: String,
    ccnumb: String,
    expdate: String,
    cvv: Number,
    billzip: Number
});

const UserInfo = mongoose.model('UserInfo', userInfoSchema);

const save = (dataObj) => {
    let docData = {
        name: dataObj.name,
        email: dataObj.email,
        password: dataObj.password,
        line1: dataObj.line1,
        line2: dataObj.line2,
        city: dataObj.city,
        state: dataObj.state,
        zipcode: dataObj.zipcode,
        cell: dataObj.cell,
        ccnumb: dataObj.ccnumb,
        expdate: dataObj.expdate,
        cvv: dataObj.cvv,
        billzip: dataObj.billzip
    }
    let newDocument = new UserInfo(docData);
    return newDocument.save();
}

const find = () => {
    // return the document for that name in the db
    // return UserInfo.find({name: searchName});
    return UserInfo.find({});
}

module.exports.save = save;
module.exports.find = find;

/* =================================================
|  Name:         Chase Timmons                     |
|  Student ID:   1220666252                        |
|  Date Created: 2/25/22                           |
|  Description:  Retrieve and add loan data to     |
|                MongoDB database                  |
==================================================*/

const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    customerName: String,
    phoneNumber: String,
    address: String,
    loanAmount: Number,
    interest: Number,
    loanTermYears: Number,
    loanType: String,
    description: String,
    createdDate: Date,
    insertedDate: Date
});

const Loan = mongoose.model('Loan', loanSchema);
module.exports = Loan;
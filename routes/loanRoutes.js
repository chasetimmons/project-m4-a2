/* =================================================
|  Name:         Chase Timmons                     |
|  Student ID:   1220666252                        |
|  Date Created: 2/25/22                           |
|  Description:  Retrieve and add loan data to     |
|                MongoDB database                  |
==================================================*/

const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

router
  .route('/')
  .get(loanController.getAllLoans)
  .post(loanController.createLoan);

router
  .route('/:id')
  .get(loanController.getLoanById)
  .patch(loanController.updateLoanById)
  .delete(loanController.deleteLoanById);

module.exports = router;

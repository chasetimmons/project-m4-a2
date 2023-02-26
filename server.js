/* =================================================
|  Name:         Chase Timmons                     |
|  Student ID:   1220666252                        |
|  Date Created: 2/25/22                           |
|  Description:  Retrieve and add loan data to     |
|                MongoDB database                  |
==================================================*/

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

// connect to the database
const mongoose = require('mongoose');

// asynchronous connection - USER AND PASSWORD REMOVED FOR GitHub
mongoose.connect('mongodb+srv://<user>:<pass>@cluster0.qopgnyc.mongodb.net/demodb', {useNewUrlParser: true})
    .then(() => console.log('MongoDB connection successful'))
    .catch((err) => console.error(err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

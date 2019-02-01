const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://user:usermygallery1@ds163054.mlab.com:63054/picture-gallery', { useNewUrlParser :true })
.then(() => {console.log('Connected to MongoDB')}).catch( e => {
    console.log('Error while DB connecting');
    console.log(e);
})

const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended:true
})
app.use(urlencodedParser);
app.use(bodyParser.json());

//Definition router
var router = express.Router();
app.use('/login', router);
require(__dirname + '/Routes/routes')(router);

var port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Running on port ${port}`));
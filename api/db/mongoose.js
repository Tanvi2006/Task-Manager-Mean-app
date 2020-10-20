// This file will handle connection logic to the MongoDB database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://127.0.0.1/TaskManager", 
{
    useNewUrlParser: true
}).then(() => {
    console.log("connected to mongoDb");
}).catch((e) => {
    console.log("error while connecting to mongodb");
    console.log(e);
})

// To prevent deprication warning(from MongoDb native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify',false);

module.exports = {
    mongoose
};
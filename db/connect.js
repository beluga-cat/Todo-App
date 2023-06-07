const mongoose = require('mongoose');
// manual way
// const connectionString = 'mongodb+srv://<userID>:<password>@nodeexpressproject.pwocnnz.mongodb.net/<ClusterName>?retryWrites=true&w=majority'



const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then(() => console.log('Connected to DB...')).catch((err) => console.log(err));
}



module.exports = connectDB;
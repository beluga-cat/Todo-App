const mongoose = require('mongoose');

// const connectionString = 'mongodb+srv://ahmed:SlickNick1024@nodeexpressproject.pwocnnz.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'


const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then(() => console.log('Connected to DB...')).catch((err) => console.log(err));
}



module.exports = connectDB;
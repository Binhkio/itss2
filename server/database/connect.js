const mongoose = require('mongoose');

const url = `mongodb+srv://root:123@itss2.44apa8r.mongodb.net/itss?retryWrites=true&w=majority&appName=ITSS2`

const connectToDatabase = async () => {
    try {
        await mongoose.connect(url);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToDatabase;

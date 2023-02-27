const express = require('express');

const app = express();
const Mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserRoute = require('./Routes/User');


dotenv.config();
Mongoose.set('strictQuery', true);
Mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("mongodb connected");
}).catch((err) => {
    console.log("no mongo connection" + err);
})



app.use(express.json());
app.use('/user',UserRoute);




app.listen(5000 || process.env.PORT, () => {
    console.log("server started ....");
})
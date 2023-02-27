const Mongoose = require('mongoose');


const CartSchema = new Mongoose.Schema(
    {
        userId:{
            type: Object,
            required:true
        },
        name: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true
        },
        image: {
            type: String,
        },
        category: {
            type: String,
        }
    },
    {timestamps:true}
);

module.exports = Mongoose.model("cart",CartSchema);
const mongoose = require("mongoose");

const productSchema =  mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter product Name"]
    },
    description:{
        type:String,
        required:[true,"Please enter product description"]
    },
    price:{
        type:Number,
        required:[true,"Please enter produvt price"],
        maxLength:[8,"price cannot exceed"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
],
category:{
    type:String,
    required:[true,"please enter product category"]
},
Stock:{
    type:Number,
    required:[true,"Please enter stock"],
    maxLength:[4,"stock cannot exceed 4 character"],
    default:1
},
numofReviews:{
    type:Number,
    default:0
},
reviews:[
    {
        name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,

        },
        comment:{
            type:String,
            required:true
        }
    }
],
createdAt:{
    type:Date,
    default:Date.now
}



})
module.exports = mongoose.model("Product",productSchema);
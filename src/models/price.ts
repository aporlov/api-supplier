/*
Price model
*/
const mongoose = require('mongoose') ; // 
const Schema = mongoose.Schema;
const CostSchema = new Schema({
        cl_id: {
          type: String,
           required: true        
        }, 
        value: {
            type: Number,
            required: true
        },
         _id: false
});
// Getter
//CostSchema.path('value').get(function(num) {
// return (num / 100).toFixed(2);
//});
// Setter
//CostSchema.path('value').set(function(num) {
 // return num * 100;
//});
const PriceSchema = new Schema({
    code: {
           type: String,
           required: true
        },
    name: {
           type: String,
           required: true
        },
    supplier_inn: {
            type: String,
            required: true
    },
    supplier_name:{
            type: String,
            required: true
    },
    price_name:{
            type: String,
            required: true
    },
    price_data:{
            type: Date,
            default: Date.now
    },
    manufacturer:{
            type: String,
            required: true
    },
    pakage:{
            type: String,
            required: true
    },
    quantity:{
            type: Number,
            required: false
    },
    multiplicity:{
            type: Number,
            required: false
    },
    minpart:{
            type: Number,
            required: false
    },
    datareal:{
            type: String,
            required: true
    },
    note:{
        type: String,
        required: false
    },
    bad:{
        type: Boolean,
        required: false
    },
    gnvls:{
        type: Boolean,
        required: false
    },
    costs: [CostSchema]
});


module.exports = mongoose.model('Price', PriceSchema);
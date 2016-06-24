/*
Client model.
*/
var mongoose = require('mongoose') ; // 
var Schema = mongoose.Schema;
var StoreSchema = new Schema({
        st_id: {
          type: String,
           required: true        
        }, 
        st_name: {
            type: String,
            required: true
        },
        st_addr: {
            type: String,
            required: true
        },
         _id: false
});

const ClientSchema = new Schema({
    supplier_inn: {
           type: String,
           required: true
        },
    supplier_name: {
            type: String,
            required: true
    },
    cl_id: {
            type: String,
            required: true
    },   
    stories: [StoreSchema] 
});


module.exports = mongoose.model('Client', ClientSchema);
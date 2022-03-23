const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {boolean}=require('joi')
bcrypt = require('bcrypt')
SALT_WORK_FACTOR = 10;


const TodoSchema = new Schema
({  
    userid:{type: Schema.Types.ObjectId, ref: 'User' },
    date:{type:Date},
    title: { type: String },
    data: { type: String},
    is_delete:{type: Boolean, default: false}


})

module.exports = mongoose.model('Todo', TodoSchema);

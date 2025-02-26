const mongoose=require('mongoose')

const ContactModel=new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true

    },
    phone: {
        type:String,
        unique:true,
        required:true
    }
})

const contact =mongoose.model("contacts",ContactModel)
module.exports =Contacts
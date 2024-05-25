const mongoose=require('mongoose')
const incomeSchema = new mongoose.Schema({

   //  sources:String,
   //  title:String,
   //  amount:Number,
   //  date: Date
   
   sources:{
      type:String,
      trim:true
     },
  
   
   
   title:{
    type: String,
    default:'income',
    required:true,
    trim:true,
    maxLength:50
   },
  
   amount:{
    type:Number,
    required:true,
    maxLength:20,
    trim:true
   },

   date:{
    type:Date,
    required:true,
    maxLength:20,
    trim:true
   },

},
// {
//    timestamps: true // Automatically add createdAt and updatedAt fields
//  }
 )


module.exports = mongoose.model('Income',incomeSchema)
const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Title is required']
    },
    description:{
        type:String,
        required:[true,'Description is required']
    },
    difficulty:{
        type:String,
        enum:['easy','medium','hard'],
        required:[true,'Difficulty is required'],
        default:'easy'
    },
   testCases:[
    {
        input:{
            type:String,
            required:[true,'Input is required']
        },
        output:{
            type:String,
            required:[true,'Output is required']
        }
        
    }
   ],
   editorial:{
       type:String
   }
});

const Problem = mongoose.model('Problem',problemSchema);

module.exports = Problem;
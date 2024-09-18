const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/College').
  then( () => console.log("Database Created!!!")).
     catch( (error) => console.log(error));

const StudentSchema = new mongoose.Schema({
    UserName: {
        type: String,
    },
    Password: {
        type: Number
    }
});     

const StudentModel = new mongoose.model('Student',StudentSchema);
module.exports = StudentModel;

























// mongoose.connect('mongodb://localhost:27017/College').
//   then( () => console.log("Connection Successfull...")).
//     catch( () => console.log("Connection Failed..."));

// const StudentSchema = mongoose.Schema({
//     FirstName :{
//         type: String,
//         required: true,
//         minlength: 2
//     },
//     LastName: {
//         type: String,
//         required: true,
//         minlength: 2
//     },
//     Phone: {
//         type: Number,
//         unique: true,
//         minlength: [10,"Minimum ten digit required"],
//         maxlength: [10,"Maximum ten digit required"]
//     },
//     Email: {
//         type: String,
//         required: true,
//         unique: [true,"Plese Enter Valid Email"]
//     },
//     Age: {
//         type: Number,
//         validate(value){
//             if(value < 18){
//                 throw new Error("Age Required Minimum 18 Year!!!!");
//             }
//         }
//     }
// });    

// const model = new mongoose.model('Student',StudentSchema);

// const RecardSaved = async() => {
//     try{
//         const StudentData = new model(
//             {
//                 FirstName: "Aman Kumar",
//                 LastName: "Singh",
//                 Phone: 241442253,
//                 Email: "amansingh123@gmail.com",
//                 Age: 20
//             }
//         );
        
//         const data = await StudentData.save();
//             console.log('data------------->',data);
//     }catch(error){
//         console.log(error);   
//     }
// }
// RecardSaved();

// const RecardSaved = async( _id ) => {
//     try{
//         const n = await model.deleteOne(
//             {
//                 _id
//             },
//         );
//     }catch(error){
//         console.log(error);   
//     }
// }
// RecardSaved('661cc48d10ec17d6429527c3');




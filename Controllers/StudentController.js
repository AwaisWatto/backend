
const Student= require("../Models/StudentModel")
const bcrypt = require('bcrypt');



class STUDENT {

  createStudent = async (req) => {

    let student= req
    console.log(student)


    if(!student.firstName || !student.lastName || !student.phone || !student.email){
      return "Required data missing"
    }

    let saltRounds=10;

    let myPlaintextPassword= student.password;

    let res =new  Promise((resolve,reject )=>{

    bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
      // Store hash in your password DB.
      console.log("SIMPLE PASSWORD", student.password)
      student.password= hash
      resolve(hash)
      console.log("HASH PASSWORD", hash, "AFTER", student.password)
  });

    })

    console.log("PROMISE",await res)
    student.password = await res


    try {
      const res= await new Student(student).save();
      return res;
    } catch (error) {
       throw new Error(error);
  }
  };
  


  updatestudent =  (req) => {
    let data= req
    console.log(data)
    try {
      return student.findByIdAndUpdate(data._id, data.student, {
    new: true,
  })
    .then((student) => {
        console.log("student SUCCESS", student)
      return student;
    })
    .catch((err) => {
      console.log("ERROR", err)
      return false;
    });

    
    } catch (error) {
       throw new Error(error);
  }
  };
  
  
  deleteStudent =  (req) => {
    let data= req
    console.log(data)
    try {
      return Student.remove({_id: data._id })
    .then((student) => {
      console.log("student SUCCESS", student)
      return student;
    })
    .catch((err) => {
      console.log("ERROR", err)
      return false;
    });


    } catch (error) {
       throw new Error(error);
  }
  };

  

}

module.exports = new STUDENT();

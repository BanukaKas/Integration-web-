const db = require('../utils/db')
const bcrypt = require('bcryptjs')

//Inquiery Route

exports.addInquiery = (req,res)=>{
    const{fullname,companyname,jobtitle,phone,email,message} = req.body;

    if(!fullname || !companyname || !jobtitle || !phone || !email || !message){
        return res.status(400).json({message:"All fields are required"});
    }

    db.query(
        "INSERT INTO inquiries (fullname,companyname,jobtitle,phone,email,message) VALUES (?,?,?,?,?,?)",
        [fullname,companyname,jobtitle,phone,email,message],
        (err,result) => {
            if (err) return res.status(500).json({error:err});

            res.status(201).json({message:"Inquiery sent successfully"});
        }
    );

}

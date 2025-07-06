import User from "../models/userModel.js"
import bcrypt from "bcrypt"
import JWT from "jsonwebtoken";




export const RegisterUser =  async (req,res,next)=>{

  try{
 
 const { fullName,email,phone,password } = req.body;


 if(!fullName || !email || !phone || !password){
    const error = new Error("All Feilds Required");
    error.statusCode=400
    return next(error);
 }

const existingUser = await User.findOne({email})
if(existingUser){
    const error = new Error("Email Already Register");        
    error.statusCode=409;
    return next(error);
}

const hashedPassword = await bcrypt.hash(password,10);

const newUser = await User.create({
    fullName,
    email,
    phone,
    password:hashedPassword,
});


res.status(201).json({message:"Registration Successfull"})
  }
  catch(error){
    next(error);
  }

};

export const LoginUser = async (req,res,next)=>{
  try{
    const { email,password } = req.body;

    if(!email || !password){
      const error = new Error("All Feild Required");
      error.statusCode=400;
      return next(error);
    }

    const user = await User.findOne({email});
    if(!user){
      const error  =new Error("user Not Register");
      error.statusCode=400;
      return next(error);
    }

    const isverified = await bcrypt.compare(password,user.password);

    if(!isverified){
      const error = new Error("Invalid Username or Password");
      error.statusCode=401;
      return next(error);
    }

    genToken(user._id, res)

    res
      .status(200)
      .json({ message : `welcome Back ${user.fullname}`,data: user});

}
catch (error){
  next(error);
}
};

export const LogoutUser = (req,res)=>{};


export const UpdateUser = (req,res)=>{};
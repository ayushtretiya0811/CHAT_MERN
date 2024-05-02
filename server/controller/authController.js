import  {comparePassword, hashPassword}  from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
export  const registerController = async (req, res) => {
    try {
        const {name, email, password} = req.body
        if(!name){
            return res.send({ 
                message: 'name is required',
                success: false
            })
        }
        
        if(!email){
            return res.send({ 
                message: 'email is required',
                success: false
            })
        }
        
        if(!password){
            return res.send({ 
                message: 'password is required',
                success: false
            })
        }
        const existuser = await userModel.findOne({email : email})
        if(existuser){
            return res.send({ 
                message: 'user already exist',
                success: false
            })
        }
    const hashedpassword = await hashPassword(password)
    const user = await new userModel({name, email, password: hashedpassword}).save();
    res.status(201).send({
        success: true,
        message: 'User Register Successfully',
        user
    })

      
    } catch (error) {
        console.log(error)
        res.status(404).send({ 
        message: 'error.In Register',
        success: false,
        error
        
    })
    }
    
}

export const loginController = async (req, res) => {
    try {
        const {email, password} = req.body
        if(!email || !password){
            return res.status(404).send({ 
                message: 'email and password is required',
                success: false
            })
        }
        const user = await userModel.findOne({email})
        if(!user){
            return res.send({ 
                message: 'email is not registered',
                success: false
            })
        }
        const match = await comparePassword(password, user.password)
        if(!match){
            return res.send({ 
                message: 'password does not match',
                success: false
            })
        }
        const token = jwt.sign({_id: user._id}, process.env.JWT, {expiresIn: '7d'})
        res.setHeader('Authorization', `Bearer ${token}`);

        const userInfo = {
            name: user.name,
            email: user.email,
            // Add any other user information you want to store
        };
        res.status(200).send({
            success: true,
            message: 'login successfully',
            user: userInfo,
            token
        })
}
catch(error){
    console.log(error)
    res.status(404).send({ 
        message: 'error.while login',
        success: false,
        error
        
    })
}
}




export const test = async ( req, res) => {
try {
    
    res.status(200).send({
        success: true,
        message: 'this is test  pages from protected rout'
    })
} catch (error) {
    console.log(error)
    
    res.status(404).send({ 
        message: 'error.while test',
        success: false,
        error
        
    })
}
}



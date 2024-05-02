import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js';
export const requiredSignIn = async (req, res, next) => {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        return res.status(401).send({
            success: false,
            message: 'No token provided or token does not start with Bearer'
        });
    }
    const token = req.headers.authorization.split(' ')[1];
    try {
        const decode = jwt.verify(token, process.env.JWT);
        console.log("Token:", token);
        console.log("Token:", decode);

console.log("Secret Key:", process.env.JWT);
        if(!decode){
            res.status(401).send({
                success: false,
                message: 'you are not authorized'
            })
        }
        req.user = decode
        next();
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Internal server error',
            error : error.message
        })
    }

}
export const isAdmin = async (req, res, next) =>{
    try {
        const user = await userModel.findById(req.user._id)
        if(user.isAdmin === true){
            next()
        }
        else{
            res.status(401).send({
                success: false,
                message: 'you are not admin'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Internal server error',
        })
    }
    }
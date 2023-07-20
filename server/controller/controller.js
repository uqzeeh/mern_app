const bcrypt = require('bcrypt');
const User = require('../modal/schema');
const jwt = require('jsonwebtoken')

//controller for register
exports.register = async (req, res)=>{
    try {

        let {email, password, passwordCheck, username} = req.body

        // validate request
        if(!req.body){
            res.status(406).json({err: "You have to fill the registration form"})
            return
        }
        if(!email || !password || !passwordCheck)
            return res.status(406).json({err: "Not all fields have been entered"});
        if(password.length < 8)
            return res.status(406).json({err: "the password need to be 8 character long"})
        if(password !== passwordCheck)
            return res.status(406).json({err: "Password does not match"})
        
        // hashing password
        const hash = await bcrypt.hashSync(password, 10);
        // using document structure
        const newUser = new User({
            email,
            password: hash,
            username
        })
        newUser
        .save(newUser)
        .then(register=>{
            res.json(register)
        })
        .catch(error=>{
            res.status(406).jsons({err: error.message || "something went wrong while registration"})
        })
    } catch (error) {
        res.status(500).json({err: error.message || "Error while registration"});
    }
    // res.json({message:"register user response"})
}

//controller for login
exports.login =async (req, res)=>{
    try {
        if(!req.body){
            res.status(406).json({err: "you have to fill the email and password field"})    
            return;
        }
        const {email, password} = req.body;

        if(!email || !password)
            return res.status(406).json({err:"not all fields have been entered"})

        const user =await User.findOne({email});

        if(!user)
            return res.status(406).json({err :"No Account with this email"})

        
        //compare the password
        const isMatch = bcrypt.compare(password, user.password);

        if(!isMatch)
        return res.status(406).json({err:"invalid credentials"})

        // create jwt token
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET)

        res.json({token,username:user.username, email:user.email})
        
    } catch (error) {
        res.status(500).json({err:error.message || "Error while Login"})
    }
    
}

// Delete user controleer

// exports.delete = async(req,res) =>{
//     try {
//         await User.findByIdAndDelete(req.user_id);
//         res.json({msg:"user deleted successfully"})
        
//     } catch (error) {
//         res.status(500).json({err:error.message || "error while deleting the user"})   
//     }
// }
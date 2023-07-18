const bcrypt = require('bcrypt');
const User = require('../modal/schema');

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
exports.login = (req, res)=>{
    try {
        if(!req.body){
            res.status(406).json({err: "you have to fill the email and password field"})    
            return;
        }
        const {email, password} = req.body;

        if(!email || !password)
            return res.status(406).json({err:"not all fields have been entered"})

        const user = "$2b$10$vru44/4o7rAGS2AAmio3ZuxdZuKrH6/WvY1rppFstApvcroR5foj."
        //compare the password
        const isMatch = bcrypt.compare(password, user);

        res.json({email,isMatch})
        
    } catch (error) {
        res.status(500).json({err:error.message || "Error while Login"})
    }
    
}
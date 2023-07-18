//controller for register
exports.register = (req, res)=>{
    try {

        let {email, password, passwordCheck, username} = req.body

        // validate request
        if(!req.body){
            res.status(406).json({err: "You have to fill the registration form"})
            return
        }
        if(!email || !password || !passwordCheck)
            return res.status(406).json({err: "Not all fields have been entered"});
        if(passwordCheck.length < 8)
            return res.status(406).json({err: "the password need to be 8 character long"})
        if(password !== passwordCheck)
            return res.status(406).json({err: "Password does not match"})
        
        res.json({email, password, passwordCheck, username});
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

        res.json({email,password})
        
    } catch (error) {
        res.status(500).json({err:error.message || "Error while Login"})
    }
    
}
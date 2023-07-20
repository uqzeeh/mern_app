const jwt = require('jsonwebtoken')

// create a middle ware
const auth = (req, res, next) => {
    const token = req.header('x-access-token')
    if(!token){
        return res.status(406).json({err: "no authentication token, authorization denied"})
    }
}
module.exports = auth
const config = require('config');
const jwt = require('jsonwebtoken');

const auth = (req,res,next) => {
    const token = req.header('x-auth-token');
    console.log(token);
    // Check token
    if(!token) res.status(401).json({msg: 'No token, authorization denied'});

    try {
        const decoded = jwt.verify(token,config.get('secret'));
        req.user = decoded;
        next();
    } catch(e) {
        res.status(400).json({msg: 'Token is not valid'});
    }
}

module.exports = auth;
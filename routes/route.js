const AuthController = require('../controllers/AuthController')

exports.route = (req,res) =>{
    // Auth Route 
    if(req.url =='/login'){ AuthController.Login(res)}

}
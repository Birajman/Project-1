const AuthService = require('../services/auth_service')

class authRoute {
    constructor(){
        this.auth_svc = new AuthService();
    }

    login = (req, res, next) =>{
        try{
           let data = req.body;
           let result = this.auth_svc.loginValidation(data)
                res.json({
                    result: result,
                    msg: "Successfully",
                    status: true
                })
        }catch(error){
            console.log("Error", error)
            next({
                msg: "Login/Failed",
                status: false
            })
        }
    }

    register = (req, res, next) =>{
        let data = req.body;
        if(req.file){
            data.file = req.file.filename
        }
        try{
            req.myEvent.emit("RegisterEvent", data)

            res.json({
                result: {
                    user: data,
                    file: req.file,
                    files: req.files
                },
                msg: "Register/Successfully",
                status: true,
            })
        }catch(error){
            next({
                msg: "Register/Failed",
                status: false
            })
        }
    }
}

module.exports = authRoute
const loginID = (req, res, next)=> {
    let islogin = true;
    if(islogin){
        next({
            result: {
                author: "Birajman",
                role: "Database"
            },
            msg: "Have access",
            status: true
        })
    }else{
        next({
            msg: "Login Incorrect",
            status: false
        })
    }
}
module.exports = loginID
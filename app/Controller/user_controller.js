class userController {
    getUserController = (req, res, next)=>{
        next({
            result: [],
            msg: "Fetch all the user",
            status : true
        })
    }
}

module.exports = userController
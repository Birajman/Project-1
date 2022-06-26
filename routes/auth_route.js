const router = require('express').Router();
const authRoute = require('../app/Controller/controller_auth.route')
const uploader = require('../app/Middleware/file-upload.middleware')
let obj_authRoute = new authRoute();


router.route('/register')
    .post(
        uploader.single('image'),
        obj_authRoute.register)

router.route('/login')
    .post(obj_authRoute.login)


module.exports = router 
const multer = require('multer');
const myStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        let path = process.cwd()+ '/uploads';
        cb(null, path)
    },
    filename: (req, file, cb)=>{
        let date = Date.now();
        let file_name = date+"-"+file.originalname;
        cb(null, file_name)
        console.log(file)
    }
})
const imageFilter = (req, file, cb)=>{
    let allowed_image = ['jpg', 'png', 'jpeg', 'svg', 'gif', 'bmp', 'webp', 'css']
    let file_extension = file.originalname.split('.');
    file_extension=file_extension[file_extension.length - 1];

    if( file_extension && allowed_image.includes(file_extension.toLowerCase())){
        cb(null, true)
    }else{
        cb({
            msg: "Unsupported File",
            status: false
        }, false)
    }
}
const uploader = multer({
    storage : myStorage,
    fileFilter: imageFilter
})



module.exports = uploader
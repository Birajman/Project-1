const isAdmin = (req, res, next)=>{
    let role = 'admin';
    if(role === 'admin'){
        next({
            result: {
                author: "Ad. Birajman",
                profit: "50,000 +"
            },
            msg: "Role to Admin Access",
            status: true
        })
    }else{
        next({
            msg: "Access Denied",
            status: false
        })
    }
}

const isCustomer = (req, res, next)=>{
    let role = 'customer';
    if(role === 'customer'){
        next({
            result: {
                author: "Cr. Birajman",
                Selling_Profit: "50,000 +"
            },
            msg: "Role to Admin Access",
            status: true
        })
    }else{
        next({
            msg: "Access Denied",
            status: false
        })
    }
}

module.exports = {
    isAdmin,
    isCustomer
}
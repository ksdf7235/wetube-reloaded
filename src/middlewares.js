import multer from "multer";

export const localMiddleware = (req,res,next) =>{
    res.locals.loggedIn = Boolean(req.session.loggedIn); 
    res.locals.siteName = "Wetube"
    res.locals.loggedInUser = req.session.user || {};
    console.log(req.session.user);
    next();
};


export const protectedMiddleware = (req,res,next) => {
    if(req.session.loggedIn){
       return next()
    }else{
        return res.redirect("/login");
    }
};

export const publicOnlyMiddleware = (req,res,next) => {
    if(!req.session.loggedIn){
        return next();
    }else{
        return res.redirect("/");
    }
};

export const uploadFiles = multer({ dest: "uploads/" });
import express from "express";
import { 
    getEdit,
    postEdit,
    edit,
    logout,
    see,
    getJoin,
    startGithubLogin,
    finishGithubLogin,
    getChangePassword,
    postChangePassword,
} from "../controllers/userController";
import { protectedMiddleware, publicOnlyMiddleware,uploadFiles} from "../middlewares"

const userRouter = express.Router();

userRouter.get("/logout", protectedMiddleware,logout);
userRouter.route("/edit")
.all(protectedMiddleware)
.get(getEdit)
.post(uploadFiles.single("avatar"),postEdit);
userRouter.route("/change-password")
.all(protectedMiddleware)
.get(getChangePassword)
.post(postChangePassword);
userRouter.get("/github/start",publicOnlyMiddleware,startGithubLogin);
userRouter.get("/github/finish",publicOnlyMiddleware,finishGithubLogin);
userRouter.get("/join", getJoin);
userRouter.get(":id", see);

export default userRouter;

import express from "express";
import morgan from "morgan";
import globalRouter from "./Router/globalRouter";
import videoRouter from "./Router/videoRouter";
import userRouter from "./Router/userRouter";



const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views",process.cwd() + "/src/views");
app.use(logger)





app.use("/",globalRouter);
app.use("/videos",videoRouter);
app.use("/users", userRouter);



const handleListening = () => console.log(`server listening on port http://localhost:${PORT}`);


app.listen(PORT,handleListening);




// const handleClick = (event) =>{

// }
// b.addEventListner("click",handleClick)
import mongoose from "mongoose"

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    findOneAndUpdate: false,
});

const db = mongoose.connection;
const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log( "X DB Error" , error)
mongoose.connection.on("error", handleError );
mongoose.connection.once("open",handleOpen);
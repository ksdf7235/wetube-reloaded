
import mongoose from "mongoose"

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
    
    
});

const db = mongoose.connection;
const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log( "X DB Error" , error)
mongoose.connection.on("error", handleError );
mongoose.connection.once("open",handleOpen);
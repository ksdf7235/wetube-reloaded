import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/user";
import app from "./server"

const PORT = 7238;


const handleListening = () =>
console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

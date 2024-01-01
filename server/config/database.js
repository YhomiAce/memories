import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const Conn = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

export default Conn;
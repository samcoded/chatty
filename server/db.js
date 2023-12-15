import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let mongoUri;
if (process.env.NODE_ENV === 'production') {
    mongoUri = process.env.MONGO_URI;
} else {
    mongoUri = process.env.MONGO_URI_DEV;
}

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri);
        console.log('Database Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;

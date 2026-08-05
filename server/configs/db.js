import mongoose from 'mongoose';

const connectDB = async () =>{
    try {
        if (!process.env.MONGODB_URI) {
            console.warn('[AI Studio] MONGODB_URI missing — server running in fallback mode.');
            return;
        }
        mongoose.connection.on('connected', ()=> console.log('Database connected'));
        await mongoose.connect(`${process.env.MONGODB_URI}/quickshow`);
    } catch (error) {
        console.warn('[AI Studio] MongoDB connection error:', error.message);
    }
}

export default connectDB;
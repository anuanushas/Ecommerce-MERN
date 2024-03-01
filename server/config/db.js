import mongoose from 'mongoose';
const mongooseConnection = async () => {
    return await mongoose.connect(process.env.Mongo_URL);
}
export default mongooseConnection;
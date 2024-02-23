import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URI;
const connectMongo = async () => mongoose.connect(MONGODB_URL);

export default connectMongo;
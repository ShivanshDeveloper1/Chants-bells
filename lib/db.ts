
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI environment variable");
}

const globalForMongoose = globalThis as typeof globalThis & {
  mongoosePromise?: Promise<typeof mongoose>;
};

export async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return mongoose;
  }

  globalForMongoose.mongoosePromise ??= mongoose.connect(uri);

  return globalForMongoose.mongoosePromise;
}

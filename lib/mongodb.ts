import mongoose from "mongoose"

interface MongooseCache {
    conn: typeof mongoose | null
    promise: Promise<typeof mongoose> | null
}

//eslint-disable-next-line
let cached = (global as any).mongoose as MongooseCache | undefined

if (!cached) {
    //eslint-disable-next-line
    ; (global as any).mongoose = cached = { conn: null, promise: null }
}

export async function connectToDatabase() {
    const MONGODB_URI = process.env.MONGODB_URI
    if (!MONGODB_URI) {
        throw new Error("Please define the MONGODB_URI environment variable in .env.local")
    }

    if (cached!.conn) return cached!.conn

    if (!cached!.promise) {
        cached!.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => mongooseInstance)
    }

    cached!.conn = await cached!.promise
    return cached!.conn
}
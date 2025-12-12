// lib/models/User.ts
import mongoose, { Schema, Model, models } from "mongoose"

export interface IUser {
    _id: mongoose.Types.ObjectId
    name?: string
    email: string
}

const UserSchema = new Schema<IUser>(
    {
        name: { type: String },
        email: { type: String, required: true, unique: true },
    },
    { timestamps: true }
)

export const User: Model<IUser> = (models.User as Model<IUser>) || mongoose.model<IUser>("User", UserSchema)

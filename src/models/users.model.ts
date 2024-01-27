import mongoose, { Schema } from "mongoose";
import { User } from "../interfaces/user.interface";

const userSchema: Schema = new Schema({
	email: {
		type: String,
		allowNull: false,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true,
		unique: true
	}
})

export default mongoose.model<User>('Userr', userSchema);
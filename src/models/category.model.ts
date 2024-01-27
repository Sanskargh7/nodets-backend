import mongoose, { Schema } from "mongoose";
import { Category } from "../interfaces/category.interface";

const categorySchema: Schema = new Schema({
	name: {
		type: String,
		require: true
	}
})
export default mongoose.model<Category>('Category', categorySchema);
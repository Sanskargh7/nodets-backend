import mongoose, { Schema } from "mongoose";
import { Product } from "../interfaces/product.interface";

const ProductSchema: Schema = new Schema({
	title: {
		type: String,
		require: true
	},
	description: {
		type: String,
		require: true
	},
	price: {
		type: Number,
		require: true
	},
	image: {
		type: String,
		require: true
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category'
	}

})
export default mongoose.model<Product>('Product', ProductSchema);



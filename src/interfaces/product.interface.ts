import { Category } from "./category.interface";

export interface Product {
	_id: string;
	title: string;
	price: number;
	description: string;
	image: string;
	category: Category
}
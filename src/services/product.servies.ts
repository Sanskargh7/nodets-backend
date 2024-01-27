import { Product } from "../interfaces/product.interface";
import productModel from "../models/product.model";


class ProductServices {
	public products = productModel;

	public async findAllProducts(): Promise<Product[]> {
		const products: Product[] = await this.products.find();
		return products;
	}
	public async findProduct(ProductId: string): Promise<Product | null> {
		const product: Product | null = await this.products.findOne({ _id: ProductId });
		return product;
	}

}
export default ProductServices;
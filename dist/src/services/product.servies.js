"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("../models/product.model"));
class ProductServices {
    constructor() {
        this.products = product_model_1.default;
    }
    findAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.products.find();
            return products;
        });
    }
    findProduct(ProductId) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.products.findOne({ _id: ProductId });
            return product;
        });
    }
}
exports.default = ProductServices;

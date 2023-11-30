import { ICategoryRequest } from "../category/category.interface";

export interface IProductRequest {
    category: ICategoryRequest,
    name: string;
    path: string;
    ingredients: string;
    weight: string;
    price: number;
    imagePath: string;
    count: number;
}

export interface IProductResponse extends IProductRequest {
    id: number | string;
}
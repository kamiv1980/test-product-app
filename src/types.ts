export interface Product {
    name: string;
    description: string;
    price: number;
    options: {
        colors: string[];
        sizes: string[];
    };
    images: string[];
}

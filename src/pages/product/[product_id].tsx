import Layout from '../../components/Layout';
import ProductCard1 from '@/components/ProductCard1';
import { Product } from '@/types';
import {useRouter} from "next/router";
import ProductCard2 from "@/components/ProductCard2";

const product: Product = {
    name: 'Minimalist Chair',
    description: 'A sleek and modern chair for any room. A sleek and modern chair for any room.A sleek and modern chair for any room. A sleek and modern chair for any room.',
    price: 150,
    options: {
        colors: ['Black', 'White', 'Gray'],
        sizes: ['Small', 'Medium', 'Large']
    },
    images: ['/test-product-app/images/image1.jpg', '/test-product-app/images/image2.jpg', '/test-product-app/images/image3.jpg', '/test-product-app/images/image4.jpg'],
};

export default function ProductId() {
    const router = useRouter();
    const productId = router.query.product_id as string;

    return (
        <Layout>
            {productId === '1' && <ProductCard1 product={product} />}
            {productId === '2' && <ProductCard2 product={product} />}
        </Layout>
    );
}

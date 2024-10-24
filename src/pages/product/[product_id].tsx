import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';
import { Product } from '@/types';

const product: Product = {
    name: 'Minimalist Chair',
    description: 'A sleek and modern chair for any room. A sleek and modern chair for any room.A sleek and modern chair for any room. A sleek and modern chair for any room.',
    price: 150,
    options: {
        colors: ['Black', 'White', 'Gray'],
        sizes: ['Small', 'Medium', 'Large']
    },
    images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg', '/images/image4.jpg'],
};

export default function ProductId() {
    return (
        <Layout>
            <ProductCard product={product} />
        </Layout>
    );
}

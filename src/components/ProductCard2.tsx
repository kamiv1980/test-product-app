import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as RadioGroup from '@radix-ui/react-radio-group';
import {Button, Text} from '@radix-ui/themes';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard2({ product }: ProductCardProps) {
    const [selectedColor, setSelectedColor] = useState<string>(product.options.colors[0]);
    const [selectedSize, setSelectedSize] = useState<string>(product.options.sizes[0]);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const addToCart = () => {
        toast.success(`${product.name} (Color: ${selectedColor}, Size: ${selectedSize}) added to cart!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
        });
    };

    const handleColorChange = (value: string) => setSelectedColor(value);
    const handleSizeChange = (value: string) => setSelectedSize(value);

    return (
        <div className="card2">

            <div className="card2-content">
                <div className="card2-image-gallery">
                    <div className="card2-main-image">
                        <Image
                            src={product.images[currentImageIndex]}
                            alt={`Product image ${currentImageIndex + 1}`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '100%', aspectRatio: 1, objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </div>
                    <div className="card2-thumbnails">
                        {product.images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`card2-thumbnail-btn ${currentImageIndex === index ? 'active' : ''}`}
                            >
                                <Image
                                    src={image}
                                    alt={`Thumbnail ${index + 1}`}
                                    width={60}
                                    height={60}
                                    style={{ borderRadius: '4px', objectFit: 'cover' }}
                                />
                            </button>
                        ))}
                    </div>
                </div>

            </div>
            <div className="card2-info">
                <h2 className="card2-title">{product.name}</h2>
                <Text className="card2-description">{product.description}</Text>

                <div className="card2-option-select">
                    <h3 className="card2-option-title">Select Color</h3>
                    <RadioGroup.Root
                        defaultValue={selectedColor}
                        onValueChange={handleColorChange}
                        className="card2-color-options"
                    >
                        {product.options.colors.map((color, index) => (
                            <RadioGroup.Item
                                key={index}
                                value={color}
                                className="card2-color-option"
                                id={`color-${color}`}
                            >
                                {color}
                            </RadioGroup.Item>
                        ))}
                    </RadioGroup.Root>

                </div>

                <div className="card2-option-select">
                    <h3 className="card2-option-title">Select Size</h3>
                    <RadioGroup.Root
                        defaultValue={selectedSize}
                        onValueChange={handleSizeChange}
                        className="card2-size-options"
                    >
                        {product.options.sizes.map((size, index) => (
                            <RadioGroup.Item
                                key={index}
                                value={size}
                                className="card2-size-option"
                                id={`color-${size}`}
                            >
                                {size}
                            </RadioGroup.Item>
                        ))}
                    </RadioGroup.Root>
                </div>
                <div className="card2-actions">
                    <Text className="card2-price">Price: ${product.price}</Text>
                    <Button onClick={addToCart} className="card2-add-to-cart-btn">
                        Add to Cart
                    </Button>
                </div>

            </div>

            <ToastContainer />
        </div>
    );
}

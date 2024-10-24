import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as RadioGroup from '@radix-ui/react-radio-group';
import {Button, IconButton, Text} from '@radix-ui/themes';
import Image from 'next/image';
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons"
import {Product} from "@/types";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
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

    const handleColorChange = (value:string) => setSelectedColor(value);
    const handleSizeChange = (value:string) => setSelectedSize(value);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="product-card">
            <h2 className="product-name">{product.name}</h2>
            <div className="product-content">
                <div className="image-slider">
                    <div className="slider-image" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                        {product.images.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={`Product image ${index + 1}`}
                                width={0}
                                height={0}
                                sizes="100vw"
                            />
                        ))}
                    </div>
                    <IconButton size="3" variant="soft" onClick={prevImage} className="prev-btn" aria-label="Previous Image" style={currentImageIndex === 0 ? { display: 'none' } : {}}>
                        <ChevronLeftIcon width="32" height="32" />
                    </IconButton>
                    <IconButton size="3" variant="soft" onClick={nextImage} className="next-btn" aria-label="Next Image" style={currentImageIndex === product.images.length - 1 ? { display: 'none' } : {}}>
                        <ChevronRightIcon width="32" height="32" />
                    </IconButton>
                </div>

                <div className="product-info">
                    <p>{product.description}</p>
                    <Text className="product-price">Price: ${product.price}</Text>

                    <div className="option-select">
                        <h3>Select Color</h3>
                        <RadioGroup.Root defaultValue={selectedColor} onValueChange={handleColorChange} className="color-radio-group">
                            {product.options.colors.map((color, index) => (
                                <RadioGroup.Item
                                    key={index}
                                    value={color}
                                    className="color-radio-item"
                                    id={`color-${color}`}
                                >
                                    <RadioGroup.Indicator className="radio-indicator" />
                                    <span style={{marginLeft: 'auto'}}>{color}</span>
                                </RadioGroup.Item>
                            ))}
                        </RadioGroup.Root>
                    </div>

                    <div className="option-select">
                        <h3>Select Size</h3>
                        <RadioGroup.Root defaultValue={selectedSize} onValueChange={handleSizeChange} className="color-radio-group">
                            {product.options.sizes.map((size, index) => (
                                <RadioGroup.Item
                                    key={index}
                                    value={size}
                                    className="color-radio-item"
                                    id={`color-${size}`}
                                >
                                    <RadioGroup.Indicator className="radio-indicator" />
                                    <span style={{marginLeft: 'auto'}}>{size}</span>
                                </RadioGroup.Item>
                            ))}
                        </RadioGroup.Root>

                    </div>

                    <Button onClick={addToCart} className="add-to-cart-btn">
                        Add to Cart
                    </Button>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}

import Image from "next/image";
import { useState, useEffect } from "react";

import imageOne from "../../assets/images/image-slider-1.png";
import imageTwo from "../../assets/images/image-slider-2.png";
import imageThree from "../../assets/images/image-slider-3.png";
import { Container } from "../container";
import styles from "./product-banner.module.css";

const data = [
    {
        id: 1,
        title: "Trade Gift cards at amazing rates",
        imageSrc: imageOne,
        clickHandlder() {},
        buttonText: "Trade Now",
    },
    {
        id: 1,
        title: "Tickets to popular events/concerts",
        imageSrc: imageTwo,
        clickHandlder() {},
        buttonText: "Buy Now",
    },
    {
        id: 1,
        title: "Order meals from resturants around",
        imageSrc: imageThree,
        clickHandlder() {},
        buttonText: "Order Now",
    },
];

export const ProductBanner = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => {
                let newCount;
                if (prev === data.length - 1) newCount = 0;
                else newCount = prev + 1;
                return newCount;
            });
        }, 6000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='my-5'>
            <Container>
                <div className=''>
                    {data.map((item, index) => (
                        <div
                            key={item.title}
                            className={` ${
                                index === counter ? "flex" : "hidden"
                            } flex bg-[#F3F3F3] rounded-[1rem] flex-col md:flex-row overflow-hidden md:h-[22rem]`}>
                            <div className='md:flex-[0.5] flex justify-center items-center flex-col  gap-y-4 md:gap-y-6 p-4  h-[14rem] md:h-full '>
                                <h2 className='font-medium  text-xl md:text-5xl text-center w-[80%] md:leading-[4rem]'>
                                    {item.title}
                                </h2>
                                <button
                                    className='
                                bg-primary transition duration-150 opacity-50 hover:opacity-100   rounded-full  text-[#F5F5F5] py-2 px-6 text-sm   font-medium
                                '>
                                    {item.buttonText}
                                </button>
                            </div>
                            <div
                                className={`md:flex-[0.5] bg-black flex  h-[18rem] md:h-full  justify-center items-center overflow-hidden ${styles.product__banner__image} `}>
                                <Image
                                    src={item.imageSrc}
                                    alt={item.title}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

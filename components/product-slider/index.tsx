import Image from "next/image";
import sliderOne from "../../assets/images/slider-1.png";
import sliderTwo from "../../assets/images/slider-2.png";
import sliderThree from "../../assets/images/slider-3.png";
import styles from "./product-slider.module.css";

const data = [
    sliderOne,
    sliderTwo,
    sliderThree,
    sliderOne,
    sliderTwo,
    sliderThree,
    sliderOne,
    sliderTwo,
    sliderThree,
];

export const ProductSlider = () => {
    return (
        <div className='relative overflow-hidden w-[95%] mx-auto'>
            <div className={`flex gap-x-4   ${styles.product__slider}`}>
                {data.map((item, index) => (
                    <div
                        className='flex-shrink-0 cursor-pointer'
                        key={`safelybuy-image-${index}`}>
                        <Image src={item} alt='Safelybuy Product' />
                    </div>
                ))}
            </div>
        </div>
    );
};

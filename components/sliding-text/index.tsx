import { useEffect, useState } from "react";
import styles from "./sliding-text.module.css";

type SlidingTextType = {
    carousel: {
        mainText: string;
        changingTexts: string[];
        slidingTextColor?: string;
    }[];
};

export const SlidingText = ({ carousel }: SlidingTextType) => {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => {
                let index;

                if (prev === carousel.length - 1) {
                    index = 0;
                } else index = prev + 1;

                return index;
            });
        }, 10 * 1000 + 500);

        return () => {
            clearInterval(interval);
        };
    }, [carousel]);

    return (
        <div className='overflow-hidden text-sm md:text-xl leading-10 text-[#000000] font-normal text-center md:text-left'>
            <div className='overflow-hidden h-[1.8rem] md:h-[2rem] px-4  flex justify-between items-start    md:gap-x-5'>
                <p className={`${styles.content__container__text} mr-1`}>
                    {carousel[textIndex]?.mainText}
                </p>

                <ul className={`${styles.content__container__list} font-bold`}>
                    {carousel[textIndex]["changingTexts"].map((item) => (
                        <li
                            key={item}
                            className={`${styles.content__container__list__item} text-[#4BBF75]`}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

SlidingText.defaultProps = {
    slidingTextColor: "#4BBF75",
};

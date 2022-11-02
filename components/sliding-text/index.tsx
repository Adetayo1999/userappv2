import styles from "./sliding-text.module.css";

type SlidingTextType = {
    mainText: string;
    carouselText: string[];
    slidingTextColor?: string;
};

export const SlidingText = ({
    mainText,
    carouselText,
    slidingTextColor,
}: SlidingTextType) => {
    return (
        <div className='overflow-hidden text-sm md:text-xl leading-10 text-[#000000] font-normal text-center md:text-left'>
            <div className='overflow-hidden h-[1.8rem] md:h-[2rem] px-4  flex justify-between items-start    md:gap-x-5'>
                <p className={`${styles.content__container__text} mr-1`}>
                    {mainText}
                </p>

                <ul className={`${styles.content__container__list} font-bold`}>
                    {carouselText.map((item) => (
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

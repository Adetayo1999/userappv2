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
        <div className='overflow-hidden text-xl leading-10 text-[#000000] font-normal'>
            <div className='overflow-hidden h-[2rem] px-4  flex justify-between items-start gap-x-5'>
                <p className={`${styles.content__container__text}`}>
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

import PropTypes from "prop-types";
import { ChangeEvent } from "react";
import {
    ArrowDown,
    FoodIcon,
    LocationIcon,
    MicrophoneIcon,
} from "../../assets";
import { Container } from "../container";
import { SlidingText } from "../sliding-text";
import styles from "./safelybuy-search.module.css";

type SafelybuySearchProps = {
    title: string;
    slidingText: string[];
    hasSearchInput?: boolean;
    subTitle?: string;
    value?: string;
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholderText?: string;
};

type SafelybuyProductSearchInput = {
    subTitle?: string;
    value?: string;
    handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholderText?: string;
};

const SafelybuyProductSearchInput = ({
    value,
    handleChange,
    subTitle,
    placeholderText,
}: SafelybuyProductSearchInput) => {
    return (
        <Container>
            <div className='flex flex-col gap-y-3 items-center'>
                <p className='text-base font-normal text-[#000000A6] '>
                    {subTitle}
                </p>
                <div className='border rounded-full border-[#E0E0E0] md:w-[50%] w-full flex justify-between items-center gap-y-2 py-1 px-1  h-[2.5rem]  md:h-[3.2rem]'>
                    <input
                        type='text'
                        name=''
                        id=''
                        value={value}
                        onChange={handleChange}
                        placeholder={placeholderText}
                        className='flex-1 bg-transparent outline-none pl-3 placeholder:[#06192D4D] text-sm md:text-base'
                    />
                    <button className='bg-primary transition duration-150 opacity-50 hover:opacity-100 flex items-center justify-center rounded-full h-full py-2 px-4 gap-x-2 text-white'>
                        <span className='hidden md:inline'>
                            <LocationIcon />
                        </span>
                        <span className='inline md:hidden'>
                            <LocationIcon scale={0.8} />
                        </span>
                        <span className='hidden md:inline'>
                            Use current location
                        </span>
                    </button>
                </div>
            </div>
        </Container>
    );
};

export const SafelybuySearch = ({
    slidingText,
    title,
    hasSearchInput,
    handleChange,
    subTitle,
    value,
    placeholderText,
}: SafelybuySearchProps) => {
    return (
        <div
            className={`flex ${
                !hasSearchInput ? "justify-between gap-y-4" : "gap-y-14"
            } items-center flex-col gap-y-4 h-[35vh] sm:h-[50vh] relative overflow-hidden pb-6 px-4 md:px-0`}>
            <div className='flex justify-center items-center gap-y-4 flex-col  '>
                <h1 className='text-[#06192D] font-bold text-center md:text-left text-xl sm:text-3xl  md:text-5xl'>
                    {title}
                </h1>
                <div className='hidden md:block'>
                    <SlidingText
                        carouselText={slidingText}
                        mainText='Get an affordable and flexible '
                    />
                </div>
            </div>
            {!hasSearchInput ? (
                <div className='flex flex-col justify-center items-center gap-y-2'>
                    <p className='text-[#000000] text-opacity-[0.65] text-sm'>
                        Scroll down to explore our services
                    </p>
                    <span className={styles.safelybuy__arrow__down}>
                        <ArrowDown />
                    </span>
                </div>
            ) : (
                <SafelybuyProductSearchInput
                    handleChange={handleChange}
                    subTitle={subTitle}
                    value={value}
                    placeholderText={placeholderText}
                />
            )}

            <div className='absolute -left-40 -top-3'>
                <FoodIcon scale={12} color='#8661FF0A' />
            </div>
            <div className='absolute -right-16 top-16'>
                <MicrophoneIcon scale={0.9} />
            </div>
        </div>
    );
};

SafelybuySearch.defaultProps = {
    hasSearchInput: false,
    subTitle: "",
    value: "",
    handleChange: PropTypes.func,
    placeholderText: "e.g. Block 2a, Gbagada Phase 2 Lagos State",
};

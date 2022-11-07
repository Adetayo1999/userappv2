import Link from "next/link";
import { ArrowUpIcon } from "../../assets";

export const ScrollUpButton = () => {
    return (
        <div className=''>
            <Link href='#'>
                <a className='flex flex-col items-center scroll-smooth'>
                    <span className='mb-[0.625rem]'>
                        <ArrowUpIcon />
                    </span>
                    <span className='font-inter text-[#000000] text-xs'>
                        Go back up
                    </span>
                </a>
            </Link>
        </div>
    );
};

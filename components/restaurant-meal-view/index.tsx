import Image, { StaticImageData } from "next/image";
import { ShareIcon } from "../../assets";
import { convertToNaira } from "../../utils/convert-currency";
import { Container } from "../container";

type RestaurantMealViewProps = {
    title: string;
    imageUrl: StaticImageData | string;
    //imageUrl: string;
    distance: number;
    price: number;
    deliverTime: string;
};

export const RestaurantMealView = ({
    deliverTime,
    distance,
    imageUrl,
    price,
    title,
}: RestaurantMealViewProps) => {
    return (
        <Container>
            <div className='flex gap-x-8 flex-col md:flex-row md:items-center'>
                <div className='md:w-[25rem] h-[15.625rem] overflow-hidden'>
                    <Image
                        src={imageUrl}
                        objectFit='cover'
                        quality={100}
                        width={400}
                        height={240}
                        className='rounded-lg'
                        alt={title}
                        layout='responsive'
                    />
                </div>
                <div className='flex flex-col gap-y-1'>
                    <h2 className='text-[#000000] text-2xl font-bold'>
                        {title}
                    </h2>
                    <p className='text-[#000000A6] flex gap-x-1 text-sm'>
                        <span>{distance}KM away</span>
                        <span>-</span>
                        <span>{deliverTime}</span>
                    </p>
                    <p className='text-[#000000A6]  text-sm mb-4'>
                        {convertToNaira(price)}
                    </p>
                    <div className='flex gap-x-3 items-center'>
                        <button className=' md:text-[#8661FF] font-medium text-sm md:bg-[#F3F3F3] rounded-full px-7 py-2 bg-[#9B51E0] text-white'>
                            Order Now
                        </button>
                        <button>
                            <ShareIcon scale={0.8} />
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

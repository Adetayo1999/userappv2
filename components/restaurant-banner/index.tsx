import Image, { StaticImageData } from "next/image";
import { convertToNaira } from "../../utils/convert-currency";
import { Container } from "../container";

type RestaurantBannerProps = {
    imageUrl: string | StaticImageData;
    restaurantName: string;
    deliveryTime: string;
    minimumOrder: number;
    minimumDelivery: number;
    distanceFromUser: number;
};

export const RestaurantBanner = ({
    deliveryTime,
    distanceFromUser,
    imageUrl,
    minimumDelivery,
    minimumOrder,
    restaurantName,
}: RestaurantBannerProps) => {
    return (
        <div className='min-h-[50vh] relative flex items-end'>
            <div className='absolute -z-10 w-full h-full'>
                <Image
                    src={imageUrl}
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                    alt='restautant banner'
                />
            </div>
            <div className='w-full bg-[#F3F3F3]'>
                <Container>
                    <div className='flex flex-col md:flex-row justify-between md:items-center py-2 px-4'>
                        <div className=''>
                            <h3 className='text-lg md:text-2xl font-bold text-[#000000] mb-1'>
                                {restaurantName}
                            </h3>
                            <div className='text-[#000000A6] text-sm flex gap-x-2 flex-col md:flex-row'>
                                <span>{distanceFromUser}KM away *</span>
                                <span>
                                    Minimum delivery fee -
                                    {convertToNaira(minimumDelivery)} *
                                </span>
                                <span>
                                    Minimum order -{" "}
                                    {convertToNaira(minimumOrder)}
                                </span>
                            </div>
                        </div>
                        <div className='text-[#000000A6] text-sm'>
                            <p>
                                Delivery to your location in
                                <span className='font-medium'>
                                    {" "}
                                    {deliveryTime}
                                </span>
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

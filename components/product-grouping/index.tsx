import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "../../assets";
import { convertToNaira } from "../../utils/convert-currency";
import styles from "./product-grouping.module.css";

type ProductCardProps = {
    productImage: StaticImageData;
    deliveryTime?: string;
    name: string;
    price?: number;
    distanceFromUser?: number | undefined;
    discount?: number | undefined;
    unique?: boolean;
};

type ProductsType = ProductCardProps & { id: number };

type ProductGroupingProps = {
    products: ProductsType[];
    title: string;
    description: string;
};

const ProductCard = ({
    deliveryTime,
    name,
    price,
    productImage,
    discount,
    distanceFromUser,
    unique,
}: ProductCardProps) => {
    return (
        <div className=' w-[14rem] md:w-[16rem] overflow-hidden flex-shrink-0 relative cursor-pointer'>
            <div
                className={`rounded-md h-[9rem] md:h-[10rem] w-full flex justify-center items-center  overflow-hidden ${
                    deliveryTime && " mb-2 md:mb-3"
                }`}>
                <Image
                    src={productImage}
                    alt={name}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className=''>
                <h4 className='md:font-medium text-[#000000] truncate text-sm md:text-base font-bold'>
                    {name}
                </h4>
                {distanceFromUser && (
                    <p className=' text-xs md:text-sm text-[#000000A6]'>
                        {distanceFromUser}KM away
                    </p>
                )}
                {price && (
                    <p className='text-xs md:text-sm text-[#000000A6]'>
                        {convertToNaira(price)}
                    </p>
                )}
            </div>
            {discount && !unique && (
                <div className='absolute bg-[#157145] text-[0.688rem] py-1 px-3 top-5 left-2 text-white rounded'>
                    Get up to {discount}% off
                </div>
            )}
            {unique && !discount && (
                <div className='absolute bg-[#C20114] text-[0.688rem] py-1 px-3 top-5 left-2 text-white rounded'>
                    Only on Safelybuy
                </div>
            )}
            {deliveryTime && (
                <div
                    className='absolute bg-white  text-[0.688rem] rounded-md px-3 py-1 right-0 md:top-[9.2rem] top-[7.8rem]'
                    style={{
                        boxShadow:
                            "0px 0px 3.5399px rgba(0, 0, 0, 0.04), 0px 3.5399px 7.07979px rgba(0, 0, 0, 0.06)",
                    }}>
                    {deliveryTime}
                </div>
            )}
        </div>
    );
};

export const ProductGrouping = ({
    description,
    products,
    title,
}: ProductGroupingProps) => {
    return (
        <div className='relative'>
            {/* Product Grouping Header */}
            <div className='flex justify-between items-center mb-4'>
                <div className=''>
                    <h2 className='text-[#06192D] font-bold text-xl md:text-2xl'>
                        {title}
                    </h2>
                    <p className='text-[#000000B2]  text-xs md:text-sm'>
                        {description}
                    </p>
                </div>
                <div className=''>
                    <button className='text-[#8661FF] font-medium text-xs md:text-sm'>
                        View all
                    </button>
                </div>
            </div>

            {/* Product Grouping Body */}
            <div
                className={`flex justify-between  gap-x-4 overflow-x-scroll ${styles.product__container}`}>
                {products.map(({ id, ...rest }) => (
                    <ProductCard key={id} {...rest} />
                ))}
            </div>

            {/* Product Navigation  */}
            <div className='absolute top-[40%] -right-5'>
                <button
                    className='rounded-full p-2 bg-[#FFFFFF] flex justify-center items-center w-[2.6rem] h-[2.6rem]'
                    style={{
                        boxShadow:
                            "-2.71154px 0px 8.67692px rgba(0, 0, 0, 0.4)",
                    }}>
                    <ArrowRight />
                </button>
            </div>
        </div>
    );
};

ProductCard.defaultProps = {
    distanceFromUser: undefined,
    discount: undefined,
    unique: false,
    deliveryTime: undefined,
    price: undefined,
};

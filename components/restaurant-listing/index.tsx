import { data1, data2, data3 } from "../../mock-data/product.mock";
import { Container } from "../container";
import { ProductGrouping } from "../product-grouping";

const RESTAURANT_VARIETIES = [
    "Offers near you",
    "Popular restaurants",
    "Breakfast",
    "Swallow",
    "Burgers",
    "Salads",
    "Chicken",
];

export const RestaurantListing = () => {
    return (
        <Container>
            <div className='mb-16'>
                <div className='flex md:justify-center items-center overflow-scroll mb-14 gap-x-4 md:gap-x-6'>
                    {RESTAURANT_VARIETIES.map((item, index) => (
                        <button
                            key={item}
                            className={`${
                                index === 0
                                    ? "bg-[#F3F3F3] text-[#000000]"
                                    : "text-[#000000B2]"
                            } rounded-md text-sm px-6 py-2 flex-shrink-0 font-inter hover:bg-[#f3f3f3]`}>
                            {item}
                        </button>
                    ))}
                </div>
                <div className='flex flex-col gap-y-8'>
                    <ProductGrouping
                        title='Offers near you'
                        description='Enjoy discounts and free delivery in Lagos'
                        products={data1}
                    />
                    <ProductGrouping
                        title='Popular resturants'
                        description='Enjoy discounts and free delivery in Lagos'
                        products={data2}
                    />
                    <ProductGrouping
                        title='Breakfast'
                        description='Enjoy discounts and free delivery in Lagos'
                        products={data3}
                    />
                </div>
            </div>
        </Container>
    );
};

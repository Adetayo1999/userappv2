import { data1, data2, data3, data4 } from "../../mock-data/ticket.mock";
import { Container } from "../container";
import { ProductGrouping } from "../product-grouping";

const TICKET_VARIETIES = ["Concerts", "Parties", "Games", "Sports"];

export const TicketListing = () => {
    return (
        <Container>
            <div className='mb-16'>
                <div className='flex justify-center items-center overflow-scroll mb-14 gap-x-4 md:gap-x-6'>
                    {TICKET_VARIETIES.map((item, index) => (
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
                        description='Be the first to book your ticket'
                        products={data1}
                        title='Upcoming events'
                    />
                    <ProductGrouping
                        description='Be the first to book your ticket'
                        products={data2}
                        title='Upcoming events'
                    />
                    <ProductGrouping
                        description='Be the first to book your ticket'
                        products={data3}
                        title='Upcoming events'
                    />
                    <ProductGrouping
                        description='Be the first to book your ticket'
                        products={data4}
                        title='Upcoming events'
                    />
                </div>
            </div>
        </Container>
    );
};

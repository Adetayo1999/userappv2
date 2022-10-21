import Image, { StaticImageData } from "next/image";
import { Container } from "../container";
import whySafelybuyOne from "../../assets/images/why-safelybuy-1.png";
import whySafelybuyTwo from "../../assets/images/why-safelybuy-2.png";

const data = [
    {
        id: 1,
        title: "Discounts",
        subTitle: "Enjoy discount on food orders",
        description:
            "Lorem ipsum dolor sit amet, consectetur re adipisci elit. Varius praesent ut venenatis  tincidunt blandit a. Ultrices integer leo.",
        image: whySafelybuyOne,
    },
    {
        id: 2,
        title: "Faster Transactions",
        subTitle: "Complete purchases much faster",
        description:
            "Lorem ipsum dolor sit amet, consectetur re adipisci elit. Varius praesent ut venenatis  tincidunt blandit a. Ultrices integer leo.",
        image: whySafelybuyTwo,
    },
    {
        id: 3,
        title: "Discounts",
        subTitle: "Enjoy discount on food orders",
        description:
            "Lorem ipsum dolor sit amet, consectetur re adipisci elit. Varius praesent ut venenatis  tincidunt blandit a. Ultrices integer leo.",
        image: whySafelybuyOne,
    },
];

type WhySafelybuyCardProps = {
    title: string;
    subTitle: string;
    description: string;
    image: StaticImageData;
};

const WhySafelybuyCard = ({
    title,
    description,
    image,
    subTitle,
}: WhySafelybuyCardProps) => {
    return (
        <div>
            <div className='relative overflow-hidden rounded-md'>
                <Image
                    src={image}
                    alt={title}
                    className='rounded-md w-full h-full object-cover hover:scale-105 transition duration-300'
                />
                <div className='absolute top-[50%] left-[8%] w-[50%]  translate-y-[-50%] pointer-events-none'>
                    <p className='font-inter  text-[#F5F5F5]'>{subTitle}</p>
                </div>
            </div>
            <div className='flex flex-col gap-y-2'>
                <h4 className='font-semibold text-lg'>{title}</h4>
                <p className='text-sm  text-[#000000A6]'>{description}</p>
            </div>
        </div>
    );
};

export const WhySafelybuy = () => {
    return (
        <Container>
            <div className=''>
                <h2 className='text-2xl font-bold mb-6'>
                    Reasons you really should fund your SafelyBuy Wallet
                </h2>
                <div className='flex justify-between items-center gap-8'>
                    {data.map(({ id, ...rest }) => (
                        <WhySafelybuyCard key={id} {...rest} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

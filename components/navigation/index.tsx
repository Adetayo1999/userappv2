import { useState } from "react";
import Link from "next/link";
import { FoodIcon, TicketIcon, TradeIcon } from "../../assets";
import { Container } from "../container";

const data = [
    {
        id: 1,
        title: "Food",
        Icon: FoodIcon,
        clickHandler() {},
        path: "/food",
    },
    {
        id: 2,
        title: "Tickets",
        Icon: TicketIcon,
        clickHandler() {},
        path: "/ticket",
    },
    {
        id: 3,
        title: "Trade",
        Icon: TradeIcon,
        clickHandler() {},
        path: "/trade",
    },
];

type NavigationButtonProps = {
    title: string;
    path: string;
    Icon: React.FunctionComponent<{
        scale?: number;
        active?: boolean;
        color?: string;
    }>;
    clickHandler: () => void;
};

const NavigationButton = ({
    title,
    Icon,
    clickHandler,
    path,
}: NavigationButtonProps) => {
    const [active, setActive] = useState(false);

    return (
        <div className=''>
            <Link href={path}>
                <a
                    className='flex justify-center items-center bg-[#E6E6E680] bg-opacity-50 mb-2 w-full p-7  relative rounded-lg overflow-hidden'
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}>
                    <div className='flex gap-x-4 justify-center items-center'>
                        <Icon />
                        <span className='text-[#06192D] text-2xl font-medium'>
                            {title}
                        </span>
                    </div>

                    <div
                        className={`absolute top-10 -right-12 transition ${
                            active && "-translate-y-5 duration-500"
                        }`}>
                        <Icon color='#ffffff' scale={3} active={active} />
                    </div>
                </a>
            </Link>
            <p className='text-[#00000059]  text-sm '>
                <b className='font-medium text-[#4F4F4F]'> Click this card </b>
                <span className=''>
                    to explore and order meals from best resurants we trust and
                    have them delivered to you!
                </span>
            </p>
        </div>
    );
};

export const Navigation = () => {
    return (
        <Container>
            <div className='flex justify-between items-center gap-10'>
                {data.map(({ id, ...rest }) => (
                    <NavigationButton key={id} {...rest} />
                ))}
            </div>
        </Container>
    );
};

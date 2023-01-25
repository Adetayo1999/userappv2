import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
        path: "/giftcard",
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

const NavigationButton = ({ title, Icon, path }: NavigationButtonProps) => {
    const [active, setActive] = useState(false);

    const router = useRouter();

    return (
        <div className='flex-shrink-0 md:flex-shrink  w-64 md:w-fit'>
            <Link href={path}>
                <a
                    className='flex justify-center items-center bg-[#E6E6E680] bg-opacity-50 mb-2 w-full p-5 md:p-7  relative rounded-lg overflow-hidden'
                    onMouseEnter={() => setActive(true)}
                    onMouseLeave={() => setActive(false)}>
                    <div className='flex gap-x-4 justify-center items-center'>
                        <span className='hidden md:inline'>
                            <Icon />
                        </span>
                        <span className='inline md:hidden'>
                            <Icon scale={0.7} />
                        </span>
                        <span className='text-[#06192D] text-xl md:text-2xl font-medium'>
                            {title}
                        </span>
                    </div>

                    <div
                        className={`absolute top-10 -right-12 transition  hidden md:block`}>
                        <Icon
                            color='#ffffff'
                            scale={3}
                            active={active || router.pathname === path}
                        />
                    </div>
                </a>
            </Link>
            <p className='text-[#00000059]  text-sm  hidden md:inline'>
                <b className='font-medium text-[#4F4F4F]'> Click this card </b>
                <span>
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
            <div className='flex justify-between items-center gap-6 overflow-x-scroll md:overflow-hidden'>
                {data.map(({ id, ...rest }) => (
                    <NavigationButton key={id} {...rest} />
                ))}
            </div>
        </Container>
    );
};

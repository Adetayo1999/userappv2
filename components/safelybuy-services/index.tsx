import Link from "next/link";
import { useState } from "react";
import { ArrowRight, FoodIcon, TicketIcon, TradeIcon } from "../../assets";
import { Container } from "../container";
import styles from "./safelybuy-services.module.css";

const data = [
    {
        id: 1,
        title: "Food Plan",
        shortText: "See how our food plan works",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam minima accusantium iure autem molestiae impedit.",
        Icon: FoodIcon,
        color: "#EDE7FF",
        iconColor: "#8661FF33",
        activeColor: "#8661FF73",
        path: "/food",
    },
    {
        id: 2,
        title: "Restaurant",
        shortText: "See how our restaurants works",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam minima accusantium iure autem molestiae impedit.",
        Icon: FoodIcon,
        path: "/food",
        color: "#EDE7FF",
        activeColor: "#8661FF73",
        iconColor: "#8661FF33",
    },
    {
        id: 3,
        title: "Tickets",
        shortText: "See how our food plan works",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam minima accusantium iure autem molestiae impedit.",
        Icon: TicketIcon,
        path: "/ticket",
        color: "#75CC9626",
        activeColor: "#75CC9673",
        iconColor: "#75CC964D",
    },
    {
        id: 4,
        title: "Trade",
        shortText: "See how our food plan works",
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam minima accusantium iure autem molestiae impedit.",
        Icon: TradeIcon,
        path: "/giftcard",
        color: "#F3F3F3",
        activeColor: "#40415473",
        iconColor: "#2B2D4240",
    },
];

type SafelybuyServicesCardProps = {
    title: string;
    shortText: string;
    description: string;
    iconColor: string;
    Icon: React.FunctionComponent<{
        scale?: number;
        active?: boolean;
        color?: string;
        activeColor?: string;
    }>;
    path: string;
    color: string;
    activeColor: string;
};

const SafelybuyServicesCard = ({
    Icon,
    activeColor,
    color,
    description,
    shortText,
    title,
    iconColor,
    path,
}: SafelybuyServicesCardProps) => {
    const [active, setActive] = useState(false);

    return (
        <div
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            style={{ backgroundColor: active ? activeColor : color }}
            className='h-[15.625rem] p-8 pt-10 rounded-xl transition duration-300 flex flex-col justify-between relative overflow-hidden cursor-pointer'>
            <div className=''>
                <h2
                    className={`  transition duration-[2s] 
                            ${
                                active
                                    ? styles.safelybuy__services__card
                                    : styles.safelybuy__services__card__inactive
                            }
                               text-[2rem]  md:text-[3.125rem] text-[#000000]
                    }  font-bold`}>
                    {title}
                </h2>
                <p
                    className={` text-sm md:text-lg font-normal transition ${
                        active ? "text-white" : "text-[#000000]"
                    }`}>
                    {active ? description : shortText}
                </p>
            </div>
            <div className=''>
                <Link href={path}>
                    <a className='flex gap-x-3 items-center'>
                        <span
                            className={`${
                                active ? "text-white" : "text-[#000000]"
                            } transition text-sm`}>
                            Get started
                        </span>
                        <span
                            className={`transition  duration-200 ${
                                active ? "translate-x-2" : "translate-x-0"
                            } `}>
                            <ArrowRight active={active} />
                        </span>
                    </a>
                </Link>
            </div>
            <div
                className={`absolute -bottom-20 -right-11 transition duration-300 ${
                    active && "-translate-x-6 -translate-y-6"
                } `}>
                <Icon
                    active={active}
                    scale={5}
                    color={iconColor}
                    activeColor={iconColor!}
                />
            </div>
        </div>
    );
};

export const SafelybuyServices = () => {
    return (
        <div className='mb-6'>
            <Container>
                <div className=''>
                    <h2 className='text-lg sm:text-xl md:text-2xl font-bold mb-6'>
                        Our Services
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {data.map(({ id, ...rest }) => (
                            <SafelybuyServicesCard key={id} {...rest} />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

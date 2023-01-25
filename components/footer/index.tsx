import { useState } from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../assets";
import googlePlaystore from "../../assets/images/google-playstore.png";
import appleStore from "../../assets/images/apple-store.png";
import { Container } from "../container";
import Image from "next/image";
import Link from "next/link";
import { ScrollUpButton } from "../scroll-up";

const data = [
    {
        id: 1,
        title: "Support",
        links: [
            {
                id: 1,
                name: "+234 8100235423",
                url: "/",
            },
            {
                id: 2,
                name: "support@safelybuy.com",
                url: "/",
            },
        ],
    },
    {
        id: 2,
        title: "Connect with us",
        links: [
            {
                id: 1,
                name: "Instagram",
                icon: InstagramIcon,
                url: "/",
                hoverColor: "hover:text-[#8A3AB9]",
            },
            {
                id: 2,
                name: "Twitter",
                icon: TwitterIcon,
                url: "/",
                hoverColor: "hover:text-[#00ACEE]",
            },
            {
                id: 3,
                name: "Facebook",
                icon: FacebookIcon,
                url: "/",
                hoverColor: "hover:text-[#3B5998]",
            },
        ],
    },
    {
        id: 3,
        title: "Delivery Locations",
        links: [
            {
                id: 1,
                name: "Lagos",
                url: "/",
            },
            {
                id: 2,
                name: "Abuja",
                url: "/",
            },
            {
                id: 3,
                name: "Ibadan",
                url: "/",
            },
            {
                id: 4,
                name: "Port Harcourt",
                url: "/",
            },
            {
                id: 5,
                name: "Asaba",
                url: "/",
            },
        ],
    },
    {
        id: 4,
        title: "Safelybuy",
        links: [
            {
                id: 1,
                name: "About",
                url: "/",
            },
            {
                id: 2,
                name: "Refer and earn",
                url: "/",
            },
            {
                id: 3,
                name: "FAQs",
                url: "/",
            },
            {
                id: 4,
                name: "Terms and Conditions",
                url: "/",
            },
            {
                id: 5,
                name: "Privacy Policy",
                url: "/",
            },
            {
                id: 6,
                name: "Sell on Safelybuy",
                url: "/",
            },
        ],
    },
];

type FooterLinkProps = {
    name: string;
    url: string;
    hoverColor?: string;
    icon?: React.FunctionComponent<{ scale?: number; color?: string }>;
};

const FooterLink = ({ url, hoverColor, name, icon: Icon }: FooterLinkProps) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <li>
            <Link href={url}>
                <a
                    className={`text-sm text-[#000000] font-normal ${
                        hoverColor || ""
                    }  flex gap-x-2 `}
                    onMouseEnter={() => setIsActive(true)}
                    onMouseLeave={() => setIsActive(false)}>
                    {Icon && (
                        <span>
                            <Icon
                                color={
                                    isActive
                                        ? hoverColor?.slice(12, 19)
                                        : undefined
                                }
                            />
                        </span>
                    )}
                    <span>{name}</span>
                </a>
            </Link>
        </li>
    );
};

FooterLink.defaultProps = {
    hoverColor: null,
    icon: null,
};

export const Footer = () => {
    return (
        <div className='bg-[#E3E3E3] min-h-[60vh] flex justify-center   py-5 md:py-8 px-3'>
            <Container>
                <div className='flex flex-col  gap-y-6 md:gap-y-0 md:flex-row justify-between'>
                    {data.map((item) => (
                        <div className='' key={item.id}>
                            <h5 className='text-[#000000] font-bold mb-2'>
                                {item.title}
                            </h5>
                            <ul className='flex flex-col gap-y-3'>
                                {item.links.map((link) => (
                                    <FooterLink {...link} key={link.id} />
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-row gap-x-4  md:flex-col  md:gap-x-0  md:gap-y-4'>
                            <Link href='/'>
                                <a>
                                    <Image
                                        src={googlePlaystore}
                                        alt='Safelybuy Google Store'
                                    />
                                </a>
                            </Link>
                            <Link href='/'>
                                <a>
                                    <Image
                                        src={appleStore}
                                        alt='Safelybuy Apple Store'
                                    />
                                </a>
                            </Link>
                        </div>

                        <div className='flex justify-end'>
                            <ScrollUpButton />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../assets";
import googlePlaystore from "../../assets/images/google-playstore.png";
import appleStore from "../../assets/images/apple-store.png";
import { Container } from "../container";
import Image from "next/image";
import Link from "next/link";

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
                name: (
                    <div className='flex gap-x-2'>
                        <span>
                            <InstagramIcon />
                        </span>
                        <span>Instagram</span>
                    </div>
                ),
                url: "/",
            },
            {
                id: 2,
                name: (
                    <div className='flex gap-x-2'>
                        <span>
                            <TwitterIcon />
                        </span>
                        <span>Twitter</span>
                    </div>
                ),
                url: "/",
            },
            {
                id: 3,
                name: (
                    <div className='flex gap-x-2'>
                        <span>
                            <FacebookIcon />
                        </span>
                        <span>Facebook</span>
                    </div>
                ),
                url: "/",
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

export const Footer = () => {
    return (
        <div className='bg-[#E3E3E3] h-[50vh] flex justify-center items-center py-5 px-3'>
            <Container>
                <div className='flex justify-between'>
                    {data.map((item) => (
                        <div className='' key={item.id}>
                            <h5 className='text-[#000000] font-bold mb-2'>
                                {item.title}
                            </h5>
                            <ul className='flex flex-col gap-y-3'>
                                {item.links.map((link) => (
                                    <li key={link.id}>
                                        <Link href={link.url}>
                                            <a className='text-sm text-[#000000] font-normal'>
                                                {link.name}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className='flex flex-col gap-y-4'>
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
                </div>
            </Container>
        </div>
    );
};

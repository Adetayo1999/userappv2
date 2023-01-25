import Link from "next/link";
import { useRouter } from "next/router";
import { BsList } from "react-icons/bs";
import { SafelybuyLogo } from "../../assets";
import { Container } from "../container";
import styles from "./header.module.css";

export const Header = () => {
    const router = useRouter();

    return (
        <header
            className={`${styles.header__container} p-4 mb-12 z-50`}
            id='header'>
            <Container>
                <div className='flex justify-between items-center '>
                    {/* Safelybuy Logo */}
                    <div className=''>
                        <Link href='/'>
                            <a className='hidden md:inline'>
                                <SafelybuyLogo scale={1.15} />
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className='inline md:hidden'>
                                <SafelybuyLogo scale={0.8} />
                            </a>
                        </Link>
                    </div>

                    {!(router.pathname === "/register") && (
                        <div className='hidden md:block'>
                            <Link href='/register'>
                                <a>
                                    <button className='bg-primary transition duration-150 opacity-50 hover:opacity-100   rounded-full  text-[#F5F5F5] py-3 px-4 text-sm  w-[12rem] font-medium'>
                                        Get started for free
                                    </button>
                                </a>
                            </Link>
                        </div>
                    )}

                    <div className='block md:hidden'>
                        <button>
                            <BsList className='h-6 w-6' />
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    );
};

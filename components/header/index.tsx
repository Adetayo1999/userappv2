import { SafelybuyLogo } from "../../assets";
import { Container } from "../container";
import styles from "./header.module.css";

export const Header = () => {
    return (
        <header className={`${styles.header__container} p-4`}>
            <Container>
                <div className='flex justify-between items-center '>
                    {/* Safelybuy Logo */}
                    <div className=''>
                        <SafelybuyLogo scale={1.15} />
                    </div>

                    <div className=''>
                        <button className='bg-primary transition duration-150 opacity-50 hover:opacity-100   rounded-full  text-[#F5F5F5] py-3 px-4 text-sm  w-[12rem] font-medium'>
                            Get started for free
                        </button>
                    </div>
                </div>
            </Container>
        </header>
    );
};

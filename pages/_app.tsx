import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className='relative'>
            <Toaster position='top-right' />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;

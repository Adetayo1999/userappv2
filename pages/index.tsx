import type { NextPage } from "next";
import { Navigation } from "../components/navigation";
import { ProductBanner } from "../components/product-banner";
import { ProductSlider } from "../components/product-slider";
import { SafelybuyServices } from "../components/safelybuy-services";
import { WhySafelybuy } from "../components/why-safelybuy";

const Home: NextPage = () => {
    return (
        <div className='flex flex-col gap-y-10'>
            <Navigation />
            <ProductSlider />
            <WhySafelybuy />
            <SafelybuyServices />
            <ProductBanner />
        </div>
    );
};

export default Home;

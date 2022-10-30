import type { NextPage } from "next";
import { Navigation } from "../components/navigation";
import { ProductBanner } from "../components/product-banner";
import { ProductSlider } from "../components/product-slider";
import { SafelybuySearch } from "../components/safelybuy-search";
import { SafelybuyServices } from "../components/safelybuy-services";
import { WhySafelybuy } from "../components/why-safelybuy";

const TEXT_SLIDER = [
    " 🥗 Food Plan With Free Delivery 🥗",
    " 🥗 Eat in And Take Outs 🥗",
    " 🥗 Online Orders From Restaurants 🥗",
];

const Home: NextPage = () => {
    return (
        <div className='flex flex-col gap-y-12'>
            <Navigation />
            <ProductSlider />
            <SafelybuySearch
                title='A social and essential app you deserve'
                slidingText={TEXT_SLIDER}
            />
            <WhySafelybuy />
            <SafelybuyServices />
            <ProductBanner />
        </div>
    );
};

export default Home;

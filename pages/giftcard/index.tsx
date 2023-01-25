import { GiftcardListing } from "../../components/giftcard-listing";
import { Navigation } from "../../components/navigation";
import { ProductBanner } from "../../components/product-banner";
import { ProductSlider } from "../../components/product-slider";
import { SafelybuySearch } from "../../components/safelybuy-search";
import { WhySafelybuy } from "../../components/why-safelybuy";

const TEXT_SLIDER = [
    " 🥗 Food Plan With Free Delivery 🥗",
    " 🥗 Eat in And Take Outs 🥗",
    " 🥗 Online Orders From Restaurants 🥗",
];

const Giftcard = () => {
    return (
        <div className='flex flex-col gap-y-12 mb-12'>
            <Navigation />
            <ProductSlider />
            <SafelybuySearch
                title='A social and essential app you deserve'
                slidingText={TEXT_SLIDER}
            />
            <GiftcardListing />
            <WhySafelybuy />
            <ProductBanner />
        </div>
    );
};

export default Giftcard;

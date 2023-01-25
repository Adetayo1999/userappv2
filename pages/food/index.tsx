import { Navigation } from "../../components/navigation";
import { ProductBanner } from "../../components/product-banner";
import { ProductSlider } from "../../components/product-slider";
import { RestaurantListing } from "../../components/restaurant-listing";
import { SafelybuySearch } from "../../components/safelybuy-search";
import { WhySafelybuy } from "../../components/why-safelybuy";

const TEXT_SLIDER = [
    " 🥗 Food Plan With Free Delivery 🥗",
    " 🥗 Eat in And Take Outs 🥗",
    " 🥗 Online Orders From Restaurants 🥗",
];

const Food = () => {
    return (
        <div className='flex flex-col gap-y-12 mb-12'>
            <Navigation />
            <ProductSlider />
            <SafelybuySearch
                title='A social and essential app you deserve'
                slidingText={TEXT_SLIDER}
                hasSearchInput
                subTitle='Where would you love us to deliver to?'
                value=''
                handleChange={(e) => {
                    console.log(e.target.value);
                }}
            />
            <RestaurantListing />
            <WhySafelybuy />
            <ProductBanner />
        </div>
    );
};

export default Food;

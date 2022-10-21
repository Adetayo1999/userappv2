import { ProductBanner } from "../../../components/product-banner";
import { RestaurantBanner } from "../../../components/restaurant-banner";
import { RestaurantListing } from "../../../components/restaurant-listing";
import { WhySafelybuy } from "../../../components/why-safelybuy";

// mock image for banner to be removed later
import mockBanner from "../../../assets/images/restaurant-view.png";

const RestaurantView = () => {
    return (
        <div className='flex flex-col gap-y-12 -mt-12'>
            <RestaurantBanner
                imageUrl={mockBanner}
                deliveryTime='15 - 25mins'
                distanceFromUser={0.4}
                minimumDelivery={200}
                minimumOrder={1500}
                restaurantName='Madam Solo and Sons - Admiralty Lekki Phase 1'
            />
            <RestaurantListing />
            <WhySafelybuy />
            <ProductBanner />
        </div>
    );
};

export default RestaurantView;

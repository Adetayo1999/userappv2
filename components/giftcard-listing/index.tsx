import { giftcardData1 } from "../../mock-data/giftcard.mock";
import { Container } from "../container";
import { ProductGrouping } from "../product-grouping";

export const GiftcardListing = () => {
    return (
        <div className='mb-6'>
            <Container>
                <div className=''>
                    <ProductGrouping
                        products={giftcardData1}
                        title='Gift Cards'
                        description='Trade your Gift Cards at amazing rates'
                    />
                </div>
            </Container>
        </div>
    );
};

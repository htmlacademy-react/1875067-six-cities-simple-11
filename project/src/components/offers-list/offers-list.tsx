import {Offer} from '../../types/types';
import Card from '../card/card';

type OfferListProps = {
  offers: Offer[];
};

function OffersList ({offers}: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      { offers.map((offer: Offer) => (
        <article
          className="cities__card place-card"
          key={offer.id}
        >
          <Card offer={offer} />
        </article>
      ))}
    </div>
  );
}

export default OffersList;

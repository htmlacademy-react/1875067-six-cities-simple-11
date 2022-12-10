import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Offer} from '../../types/types';
import {AppRoute, MAX_RATING} from '../../const';

type CardProps = {
  offer: Offer;
};

function Card ({offer}: CardProps): JSX.Element {
  const {id, title, type, price, isPremium, MainImage, rating} = offer;
  const [activeCardId, setActiveCardId] = useState(0);

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={() => setActiveCardId(id)}
      onMouseLeave={() => setActiveCardId(0)}
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${activeCardId}`}>
          <img className="place-card__image" src={MainImage.imageSrc} width="260" height="200" alt={MainImage.imageAlt}></img>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round((rating * 100) / MAX_RATING)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${activeCardId}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;

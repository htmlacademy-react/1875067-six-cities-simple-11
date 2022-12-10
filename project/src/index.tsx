import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mockOffersList } from './mocks/offers';

const Setting = {
  CardsCount: 4,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      cardsCount = {Setting.CardsCount}
      offers = {mockOffersList}
    />
  </React.StrictMode>,
);

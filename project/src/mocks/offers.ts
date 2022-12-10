import { Offer } from '../types/types';
import { CityName, HouseType, Features } from '../const';

export const mockOffersList: Offer[] = [
  {
    id: 1,
    city:
      {location: {
        lat: 52.359417,
        lng: 4.910085,
      },
      CityName: CityName.Amsterdam,
      },
    title: 'Beautiful &amp; luxurious studio at great location',
    type: HouseType.Apartment,
    rooms: 3,
    people: 4,
    price: 120,
    features: [Features.WiFi, Features.Heating, Features.Kitchen, Features.Fridge, Features.WashingMachine, Features.CoffeeMachine, Features.Dishwasher, Features.Towels, Features.BabySeat, Features.CabelTV],
    isPremium: true,
    hostId: 1,
    MainImage: {
      imageSrc: 'img/apartment-01.jpg',
      imageAlt: 'Photo studio'
    },
    Images: [
      {
        imageSrc: 'img/room.jpg',
        imageAlt: 'Photo studio'
      },
      {
        imageSrc: 'img/apartment-01.jpg',
        imageAlt: 'Photo studio'
      },
      {
        imageSrc: 'img/apartment-02.jpg',
        imageAlt: 'Photo studio'
      },
      {
        imageSrc: 'img/apartment-03.jpg',
        imageAlt: 'Photo studio'
      },
      {
        imageSrc: 'img/studio-01.jpg',
        imageAlt: 'Photo studio'
      },
      {
        imageSrc: 'img/apartment-01.jpg',
        imageAlt: 'Photo studio'
      }
    ],
    reviews: [1],
    rating: 4.8,
  },
  {
    id: 2,
    city:
      {location: {
        lat: 52.359417,
        lng: 4.910085,
      },
      CityName: CityName.Amsterdam,
      },
    title: 'Perfect house for holidays',
    type: HouseType.House,
    rooms: 4,
    people: 6,
    price: 200,
    features: [Features.WiFi, Features.Heating, Features.Kitchen, Features.Fridge, Features.WashingMachine, Features.CoffeeMachine, Features.Dishwasher, Features.Towels, Features.BabySeat, Features.CabelTV],
    isPremium: false,
    hostId: 2,
    MainImage: {
      imageSrc: 'img/apartment-small-04.jpg',
      imageAlt: 'Photo studio'
    },
    Images: [
      {
        imageSrc: 'img/apartment-small-04.jpg',
        imageAlt: 'Photo studio'
      },
      {
        imageSrc: 'img/istudio-photos.jpg',
        imageAlt: 'Photo studio'
      }
    ],
    reviews: [2, 3],
    rating: 4.7,
  },
  {
    id: 3,
    city:
      {location: {
        lat: 52.359417,
        lng: 4.910085,
      },
      CityName: CityName.Amsterdam,
      },
    title: 'You have never seen a better hotel!',
    type: HouseType.Hotel,
    rooms: 1,
    people: 2,
    price: 150,
    features: [Features.WiFi, Features.Heating, Features.CoffeeMachine, Features.Towels, Features.CabelTV],
    isPremium: true,
    hostId: 3,
    MainImage: {
      imageSrc: 'img/apartment-02.jpg',
      imageAlt: 'Photo studio'
    },
    Images: [
      {
        imageSrc: 'img/apartment-02.jpg',
        imageAlt: 'Photo studio'
      },
      {
        imageSrc: 'img/apartment-03.jpg',
        imageAlt: 'Photo studio'
      },
      {
        imageSrc: 'img/studio-01.jpg',
        imageAlt: 'Photo studio'
      },
      {
        imageSrc: 'img/apartment-01.jpg',
        imageAlt: 'Photo studio'
      }
    ],
    reviews: [4, 5, 6],
    rating: 4.5,
  },
  {
    id: 4,
    city:
      {location: {
        lat: 52.359417,
        lng: 4.910085,
      },
      CityName: CityName.Amsterdam,
      },
    title: 'Small but cozy room',
    type: HouseType.Room,
    rooms: 1,
    people: 1,
    price: 90,
    features: [Features.WiFi, Features.Heating, Features.WashingMachine, Features.CoffeeMachine, Features.CabelTV],
    isPremium: false,
    hostId: 4,
    MainImage: {
      imageSrc: 'img/apartment-03.jpg',
      imageAlt: 'Photo studio'
    },
    Images: [
      {
        imageSrc: 'img/apartment-03.jpg',
        imageAlt: 'Photo studio'
      },
      {
        imageSrc: 'img/studio-01.jpg',
        imageAlt: 'Photo studio'
      },
      {
        imageSrc: 'img/apartment-01.jpg',
        imageAlt: 'Photo studio'
      }
    ],
    reviews: [7, 8],
    rating: 4.2,
  }
];

export const mockUsersList = [
  {
    userId: 1,
    userName: 'Angelina',
    isPro: true,
    userAvatarSrc: 'avatar-angelina.jpg',
  },
  {
    userId: 2,
    userName: 'Max',
    isPro: false,
    userAvatarSrc: 'avatar-max.jpg',
  },
  {
    userId: 3,
    userName: 'Ana',
    isPro: true,
    userAvatarSrc: 'avatar-angelina.jpg',
  },
  {
    userId: 4,
    userName: 'Mia',
    isPro: false,
    userAvatarSrc: 'avatar-angelina.jpg',
  }
];

export const mockReviewsList = [
  {
    reviewId: 1,
    userId: 2,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century',
    date: 'April 2019',
  },
  {
    reviewId: 2,
    userId: 1,
    rating: 4.7,
    description: 'Wonderful experience that we hope to enjoy again',
    date: 'May 2019',
  },
  {
    reviewId: 3,
    userId: 2,
    rating: 3,
    description: 'I was disappointed',
    date: 'February 2020',
  },
  {
    reviewId: 4,
    userId: 3,
    rating: 4.3,
    description: 'Wished I could have stayed longer.',
    date: 'April 2020',
  },
  {
    reviewId: 5,
    userId: 4,
    rating: 4.1,
    description: 'They exceeded expectations',
    date: 'June 2021',
  },
  {
    reviewId: 6,
    userId: 2,
    rating: 4.9,
    description: 'Elegant surroundings, fabulous service',
    date: 'August 2021',
  },
  {
    reviewId: 7,
    userId: 3,
    rating: 3.9,
    description: 'Not worth the price despite excellent location',
    date: 'April 2022',
  },
  {
    reviewId: 8,
    userId: 1,
    rating: 4.3,
    description: 'Loved it so much I will return',
    date: 'April 2022',
  }
];

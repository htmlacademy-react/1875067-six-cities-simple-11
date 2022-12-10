import { CityName, HouseType } from '../const';

export type Location = {
  lat: number;
  lng: number;
};

export type City = {
  location: Location;
  CityName: CityName;
};

export type User = {
  userId: number;
  userName: string;
  isPro: boolean;
  userAvatarSrc: string;
};

export type Image = {
  imageSrc: string;
  imageAlt: string;
};

export type Offer = {
  id: number;
  city: City;
  title: string;
  type: HouseType;
  rooms: number;
  people: number;
  price: number;
  features: string[];
  isPremium: boolean;
  hostId: number;
  MainImage: Image;
  Images: Image[];
  reviews: number[];
  rating: number;
};

export type Review = {
  reviewId: number;
  userId: number;
  rating: number;
  description: string;
  date: Date;
};

export type NewReview = {
  rating: number;
  description: string;
};

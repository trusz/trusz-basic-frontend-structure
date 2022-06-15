import { ResponseGeo } from './response-geo';

export type ResponseAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: ResponseGeo;
};

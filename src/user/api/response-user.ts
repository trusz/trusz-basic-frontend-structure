import { ResponseAddress } from './response-address';
import { ResponseCompany } from './response-company';

export type ResponseUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: ResponseAddress;
  phone: string;
  website: string;
  company: ResponseCompany;
};

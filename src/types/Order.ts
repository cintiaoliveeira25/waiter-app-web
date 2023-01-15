import { Products } from './Products';

export interface Order {
  _id: string;
  table: string;
  status: string;
  products: Array<Products>;
}

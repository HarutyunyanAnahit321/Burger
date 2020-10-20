import axios from 'axios';
import { API_ENDPOINTS } from './endpoints';
export const instance = axios.create({baseURL : 'https://burger-f5f14.firebaseio.com/' });



export function continueOrder(orderData) {
  return instance.post( API_ENDPOINTS.orders, orderData);
};

export function getIngredients() {
  return instance.get(API_ENDPOINTS.ingredients);
};

export function getOrders() {
  return instance.get( API_ENDPOINTS.orders);
};
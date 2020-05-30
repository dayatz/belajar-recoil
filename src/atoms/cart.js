import {
  atom,
  selector
} from 'recoil'

export const cartState = atom({
  key: 'cart-state', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const cartTotalPrice = selector({
  key: 'getCartTotalPrice',
  get: ({ get }) => {
    const products = get(cartState)
    return products.reduce((sum, {quantity, harga}) => sum + (quantity * harga), 0);
  }
})
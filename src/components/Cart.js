import React from 'react';
import {
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { cartState, cartTotalPrice } from '../atoms/cart'


const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const totalPrice = useRecoilValue(cartTotalPrice)
  
  const hapusCart = cartItem => {
    setCart(oldCart => {
      const produkId = cartItem.id
      return oldCart.filter(produk => produk.id !== produkId)
    })
  }

  return (
    <div>

    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <h4>Cart</h4>
            {
              !!cart.length &&
              <button className="btn btn-xs btn-danger" onClick={() => {
                setCart([])
              }}>Clear</button>
            }
          </div>
          <h4>{cart.length}</h4>
        </div>
        <hr/>
        {cart.map(item => {
          return (
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center">
                <img src={item.gambarUrl} alt="" style={{ width: 64 }} />
                <p className="ml-3 mb-0">{item.nama}</p>
              </div>
              <div className="d-flex align-items-center">
                <p className="mb-0">x{item.quantity}</p>
                <button className="btn btn-xs btn-danger ml-2" onClick={() => {
                  hapusCart(item)
                }}>X</button>
              </div>
            </div>
          )
        })}
      </div>      
    </div>

    <div className="card mt-4">
      <div className="card-body">
        <p>TOTAL HARGA: ${totalPrice}</p>
      </div>
    </div>

    </div>
  );
};

export default Cart;
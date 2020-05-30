import React from 'react';
import {
  useRecoilState,
} from 'recoil';
import { cartState } from '../atoms/cart'

const ProdukItem = ({ dataProduk }) => {
  const [,setCart] = useRecoilState(cartState)
  const tambahKeCart = produk => {
    setCart(oldCart => {
      const produkId = produk.id
      const sudahAda = oldCart.some(produk => produk.id === produkId)
      if (sudahAda) {
        const copyOldCart = [...oldCart]
        const index = copyOldCart.findIndex(produk => produk.id === produkId)
        let obj = {...copyOldCart[index]}
        obj = {
          ...obj,
          quantity: obj.quantity + 1
        }
        copyOldCart[index] = obj

        return copyOldCart
      } else {
        return [
          ...oldCart,
          {
            ...dataProduk,
            quantity: 1
          }
        ]
      }
      
    })
  }

  return (
    <div className="card mb-4">
      <img src={dataProduk.gambarUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{dataProduk.nama}</h5>
        <p className="card-text">$ {dataProduk.harga}</p>
        <button
          onClick={() => {
            tambahKeCart(dataProduk)
          }}
          className="btn btn-outline-primary btn-xs float-right"
          >Add to cart</button>
      </div>
    </div>
  );
};

export default ProdukItem;
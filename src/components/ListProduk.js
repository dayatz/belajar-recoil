import React from 'react';
import ProdukItem from './ProdukItem';
import { useRecoilValue } from 'recoil'
import { productsState } from '../atoms/products'


const ListProduk = () => {
  const products = useRecoilValue(productsState)

  return (
    <div className="row">
      {products.map((produk, index) => {
        return (
          <div className="col-md-4" key={index}>
            <ProdukItem dataProduk={produk} />
          </div>
        )
      })}
    </div>
  );
};

export default ListProduk;
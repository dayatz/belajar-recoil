import React from 'react';
import ListProduk from './components/ListProduk';
import Cart from './components/Cart';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="py-5">
        <div className="row">
          <div className="col-md-8">
            <ListProduk />
          </div>
          <div className="col-md-4">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
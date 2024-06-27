import React from 'react';
import './App.css';

import Dashboard from './components/dashboard';
import Offine from './components/offline';
import store from './components/redux/store';
import Transactions from './components/transactions';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';


function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/offline' element={<Offine />} />
            <Route path='/transactions' element={<Transactions />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;

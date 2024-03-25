import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globalStyle.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { storeWrapper } from './redux';
import { Router } from './Router';
import swal from 'sweetalert';
import { config } from './util/config';
import Loading from './components/Loading/Loading';




function App() {


  return (
   <Provider store={storeWrapper}>
        <BrowserRouter>
          <Loading />
          <Router />
        </BrowserRouter>
   </Provider>
  )
}

export default App

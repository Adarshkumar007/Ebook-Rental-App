// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import App from './App';
// import SellerPage from './components/SellerPage';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import NavbarComponent from './components/NavBar';
// import FooterComponent from './components/FooterComponent';
// import AddEBookForm from './components/Publish';
// import Orders from './components/Order';
// import EBookDetails from './components/EBookDetails';
// import Collection from './components/Collection';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//   <Provider store={store}>
//     <Router>
//     <NavbarComponent />
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/publish" element={<AddEBookForm />} />
//         <Route path="/seller" element={<SellerPage />} />
//         <Route path="/ebook/:key" element={<EBookDetails />} />
//         <Route path="/collection" element={<Collection/>}/>
//       </Routes>
//       <FooterComponent />
//     </Router>
//   </Provider>
// </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SellerPage from './components/SellerPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavbarComponent from './components/NavBar';
import FooterComponent from './components/FooterComponent';
import AddEBookForm from './components/Publish';
import Orders from './components/Order';
import EBookDetails from './components/EBookDetails';
import Collection from './components/Collection';
import './styles.css'; // Import your custom CSS file
import Cart from './components/Cart';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      
          <NavbarComponent />
         
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/publish" element={<AddEBookForm />} />
              <Route path="/seller" element={<SellerPage />} />
              <Route path="/ebook/:key" element={<EBookDetails />} />
              <Route path="/collection" element={<Collection/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
          <FooterComponent />
      </Router>
    </Provider>
  </React.StrictMode>
);

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
import { Provider } from 'react-redux';
import store from './redux/store';
import NavbarComponent from './components/NavBar';
import FooterComponent from './components/FooterComponent';
import AddEBookForm from './components/Publish';
import EBookDetails from './components/EBookDetails';
import Collection from './components/Collection';
import './styles.css'; // Import your custom CSS file
import Cart from './components/Cart';
import Reviews from './components/Reviews'
import Library from './components/MyComponent/Library/Library';
import AboutUs from './components/MyComponent/PlatformDetails/AboutUs';
import Privacy from './components/MyComponent/PlatformDetails/Privacy';
import ContactUs from './components/MyComponent/PlatformDetails/ContactUs';
import Security from './components/MyComponent/PlatformDetails/Security';
import Help from './components/MyComponent/PlatformDetails/Help';
import Order from './components/MyComponent/Order/Order';
import SellerPage from './components/SellerPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      
          <NavbarComponent />
         
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/orders" element={<Order/>} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/publish" element={<AddEBookForm />} />
              <Route path="/seller" element={<SellerPage />} />
              <Route path="/ebook/:key" element={<EBookDetails />} />
              <Route path="/collection" element={<Collection/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/library" element={<Library/>}/>
              <Route path="/AboutUs" element={<AboutUs/>}/>
              <Route path="/Privacy" element={<Privacy/>}/>
              <Route path="/ContactUs" element={<ContactUs/>}/>
              <Route path="/Security" element={<Security/>}/>
              <Route path="/Help" element={<Help/>}/>
            </Routes>
          <FooterComponent />
      </Router>
    </Provider>
  </React.StrictMode>
);



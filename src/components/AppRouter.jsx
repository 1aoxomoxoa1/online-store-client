import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './home/HomePage';
import ProductDetailsPage from './products/ProductDetailsPage';
import ProductsPage from './products/ProductsPage';
import ProfilePage from './login-register-profile/ProfilePage';
import Wishlist from './wishlist/Wishlist';
import Cart from './cart/Cart';
import EditProfilePage from './login-register-profile/EditProfilePage';

function AppRouter(){ 
    return( 
        <BrowserRouter>
            <Routes> 
                <Route path='/' element={<HomePage />} /> 
                <Route path='/products' element={<ProductsPage />} /> 
                <Route path='/profile' element={<ProfilePage />} /> 
                <Route path='/edit' element={<EditProfilePage />} /> 
                <Route path='/products/:id' element={<ProductDetailsPage/>} /> 
                <Route path='/wishlist' element={<Wishlist/>} /> 
                <Route path='/cart' element={<Cart/> } /> 
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
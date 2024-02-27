import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import { AuthProvider } from "./pages/contexts/AuthContext";
import Login from "./pages/login";

import ForgotPassword from "./pages/forgotpassword";

import HomeDash from "./pages/dashboard/pages/Home/Home";
import CartPage from "./pages/cart/CartPage.tsx";
import { CartProvider } from "./pages/cart/CartContext";
import Profile from "./pages/Profile/Profile";
import Review from "./pages/dashboard/pages/Home/review.jsx";
import SimpleForm from "./pages/dashboard/pages/SimpleForm.jsx";


const Navigation = () => {
    return (
        <CartProvider>
        <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sign-up" element={<Signup/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Dashboard" element={<HomeDash/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/user-profile" element={<Profile/>}/>
                <Route path="/review" element={<SimpleForm/>}/>
            </Routes>
        </BrowserRouter>
        </AuthProvider>
        </CartProvider>

);
}

export default Navigation;
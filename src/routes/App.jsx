//check ok

import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Layout} from "../containers/layout";
import {Home} from "../pages/Home";
import {Login} from "../pages/login"
import { PasswordRecovery } from '../pages/passwordRecovery';
import { SendEmail } from "../pages/sendEmail";
import { NewPassword } from "../pages/newPassword";
import { MyAccount } from "../pages/myAccount";
import { CreateAccount } from "../pages/createAccount";
import { Checkout } from "../pages/checkout";
import {Orders} from "../pages/orders";
import { NotFound } from '../pages/NotFound';
import "../styles/global.css";



const App = () => {
    return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />}/>   
                <Route path="/login" element={<Login />}/>
                <Route path="/passwordRecovery" element={<PasswordRecovery />}/>
                <Route path="/sendEmail" element={<SendEmail />}/>
                <Route path="/newPassword" element={<NewPassword />}/>
                <Route path="/myAccount" element={<MyAccount />}/>
                <Route path="/createAccount" element={<CreateAccount />}/>
                <Route path="/checkout" element={<Checkout />}/>
                <Route path="/orders" element={<Orders />}/>                                
                <Route path="*" element={<NotFound />}/>
            </Routes> 
        </Layout>
    </BrowserRouter>
    );
}

export {App};
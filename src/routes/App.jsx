import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Layout} from "../containers/layout";
import {Login} from "../containers/login"
import { RecoveryPassword } from '../containers/recoveryPassword';
import {Home} from "../pages/Home";
import { NotFound } from '../pages/NotFound';
import "../styles/global.css";

const App = () => {
    return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>   
                <Route path="/login" element={<Login />}/>
                <Route path="/recoveryPassword" element={<RecoveryPassword/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes> 
        </Layout>
    </BrowserRouter>
    );
}

export {App};
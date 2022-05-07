import React, { useState } from 'react';
import Head from 'next/head'
import { Provider, useSelector } from 'react-redux';
import store from '../redux/store';
import { createContext } from 'react';

export const  UserContext = createContext ();

const GlobalProvider = ({children}) => {

     let loggedInUser = {phone: "", id: "", name: ""};

    return (
        <Provider store={ store }>
            <UserContext.Provider  value={[loggedInUser]}>
                <Head>
                <title>Logy Zone</title>
                </Head>
                 {children}
            </UserContext.Provider>
        </Provider>
    );
};

export default GlobalProvider;
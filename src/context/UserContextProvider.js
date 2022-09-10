import React, { createContext, useEffect, useState } from 'react';
import { getUser } from '../services/api';  //API

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setUser(await getUser());
        }
        fetchAPI();
    }, []);

    return (
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;

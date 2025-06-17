import { createContext, useState } from "react";

export const dummyContext = createContext();

// dummy component -> In React, using a capital letter for component names is not just a convention - it's a requirement.
export const DummyProvider = ({children}) => { 
    const [username, setUsername] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    return(
        <dummyContext.Provider value={{username, setUsername, isLogin, setIsLogin }}>
            {children}
        </dummyContext.Provider>
    )
 }
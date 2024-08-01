import React, {createContext, useState, useEffect} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    // state variables
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);
    const[username, setUsername] = useState(null);

    useEffect(() => {
        // get token and username from local storage
        const storedToken = localStorage.getItem('token');
        const storedUsername = localStorage.getItem('username');

        // if token exist in local storage, update the state variable
        if (storedToken) {
            setToken(storedToken);
        }

        if (storedUsername) {
            setUsername(storedUsername);
        }


    }, []); // Empty dependency array ensures this runs only once on mount
    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                token,
                setToken,
                username,
                setUsername,
            }}
        >
            {children} {/* Render child components */}
        </AuthContext.Provider>
    );
}
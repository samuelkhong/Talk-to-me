import React, {createContext, userState, useEffect} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    // state variables
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [taken, setToken] = useState(null);
    const[userName, setUsername] = useState(null);

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


    });
    
}
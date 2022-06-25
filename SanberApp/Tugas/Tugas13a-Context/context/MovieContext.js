import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState([
        { id: 0, name: "Harry Potter", lengthOfTime: 120 },
        { id: 1, name: "Sherlock Holmes", lengthOfTime: 125 },
        { id: 2, name: "Avengers", lengthOfTime: 130 },
        { id: 3, name: "Spiderman", lengthOfTime: 124 },
    ]);

    return (
        <MovieContext.Provider value={{ movie, setMovie }}>
            {children}
        </MovieContext.Provider>
    );
};

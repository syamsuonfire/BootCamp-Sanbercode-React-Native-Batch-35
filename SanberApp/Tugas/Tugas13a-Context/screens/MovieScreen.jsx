import React from "react";
import { MovieProvider } from "../context/MovieContext";
import MovieList from "../components/MovieList";
import MovieForm from "../components/MovieForm";

const MovieScreen = () => {
    return (
        <MovieProvider>
            <MovieList />
            <MovieForm />
        </MovieProvider>
    );
};

export default MovieScreen;

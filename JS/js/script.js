"use strict";
let numberOfFilms = +prompt("Skolkso filmov smotreli?", ``);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Last watch movies", ``),
    b = prompt("Rate the film", ``),
    c = prompt("Last watch movies", ``),
    d = prompt("Rate the film", ``);

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);
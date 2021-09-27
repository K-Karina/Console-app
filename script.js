'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastWatchedMovie1 = prompt('Один из последних просмотренных фильмов?', '');
const lastWatchedMovieAssess1 = +prompt('На сколько оцените его?', '');
const lastWatchedMovie2 = prompt('Один из последних просмотренных фильмов?', '');
const lastWatchedMovieAssess2 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastWatchedMovie1] = lastWatchedMovieAssess1;
personalMovieDB.movies[lastWatchedMovie2] = lastWatchedMovieAssess2;

console.log(personalMovieDB);

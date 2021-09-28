"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const lastWatchedMovie1 = prompt(
      "Один из последних просмотренных фильмов?",
      ""
    ),
    lastWatchedMovieAssess1 = +prompt("На сколько оцените его?", "");

  if (
    lastWatchedMovie1 != null &&
    lastWatchedMovieAssess1 != null &&
    lastWatchedMovie1 != "" &&
    lastWatchedMovieAssess1 != "" &&
    lastWatchedMovie1.length < 50 &&
    lastWatchedMovieAssess1 < 50
  ) { personalMovieDB.movies[lastWatchedMovie1] = lastWatchedMovieAssess1;
    console.log('done');
  } else {
    console.log('error');
    i--;
  } 
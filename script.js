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
  personalMovieDB.movies[lastWatchedMovie1] = lastWatchedMovieAssess1;
}

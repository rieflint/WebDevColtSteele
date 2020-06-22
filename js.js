var movies = [
  {
    title: "In Bruges",
    rating: 5,
    haveWatched: true,
  },
  {
    title: "Frozen",
    rating: 4.5,
    haveWatched: false,
  },
  {
    title: "Mad Max Fury Road",
    rating: 4.5,
    haveWatched: true,
  },
  {
    title: "Les Miserables",
    rating: 3.5,
    haveWatched: false,
  },
];

function buildString(movie) {
  var result = "You have ";
  if (movie.haveWatched) {
    result += "watched ";
  } else {
    result += "not seen ";
  }
  result += '"' + movie.title + '" - ';
  result += movie.rating + " stars";
  return result;
}
movies.forEach(function (movie) {
  buildString(movie);
  console.log(buildString(movie));
});

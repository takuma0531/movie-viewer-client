export enum AsyncThunkTypeComment {
  GET_COMMENT_BY_ID = "comment/getCommentById",
  CREATE_COMMENT = "comment/createComment",
  DELETE_COMMENT = "comment/deleteComment",
}

export enum AsyncThunkTypeGenre {
  GET_ALL_GENRES = "genre/getAllGenres",
  GET_GENRE_BY_NAME = "genre/getGenreByName",
  GET_GENRE_BY_Id = "genre/getGenreById",
}

export enum AsyncThunkTypeMovie {
  GET_ALL_MOVIES = "movie/getAllMovies",
  GET_MOVIE_BY_ID = "movie/getMovieById",
  GET_MOVIES_BY_TITLE = "movie/getMoviesByTitle",
  GET_RECENT_MOVIES = "movie/getRecentMovies",
  CREATE_MOVIE = "movie/createMovie",
  UPDATE_MOVIE = "movie/updateMovie",
  DELETE_MOVIE = "movie/deleteMovie",
}

export enum AsyncThunkTypeRating {
  GET_RATINGS_FILTERED_BY_USER_SPECIFIC_AGE_AND_MOVIE = "movie/getRatingsFilteredByUserSpecificAgeAndMovie",
  GET_RATINGS_FILTERED_BY_USER_CONTINENT_AND_MOVIE = "movie/getRatingsFilteredByUserContinentAndMovie",
  GET_RATINGS_SORTED_BY_USER_GENDER_AND_MOVIE = "movie/getRatingsSortedByUserGenderAndMovie",
  CREATE_RATING = "movie/createRating",
}

export enum AsyncThunkTypeUser {
  REGISTER_USER = "user/registerUser",
  GET_USER_BY_ID = "user/getUserById",
  UPDATE_USER = "user/updateUser",
  LOGIN_USER = "user/loginUser",
  DELETE_USER = "user/deleteUser",
  CHECK_AUTH = "user/checkAuth",
}

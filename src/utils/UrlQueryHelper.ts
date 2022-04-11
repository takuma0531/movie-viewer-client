export class UrlQueryHelper {
  public static getMovieId() {
    return window.location.search.substring(1).split("=")[1];
  }
}

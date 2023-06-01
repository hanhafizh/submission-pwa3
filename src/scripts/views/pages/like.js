import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="content">
            <h2 class="content__heading"></h2>
            <div id="movies" class="movies">
        </div>
    </div>
    `;
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies();
    const moviesContainer = document.querySelector('#movies');

    movies.forEach((movie) => {
      moviesContainer.innerHTML += createRestaurantListTemplate(movie);
    });
  },
};

export default Like;

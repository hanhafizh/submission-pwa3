import UrlParser from "../../routes/url-parser";
import RestoSource from "../../data/resto-source";
import {
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
} from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import FavoriteMovieIdb from "../../data/favorite-movie-idb";

const DetailPages = {
  async render() {
    return `
    <div id="restaurant" class="restaurant"></div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoSource.RestoDetail(url.id);
    const restaurantContainer = document.querySelector("#restaurant");
    const likeButtonContainer = document.querySelector("#likeButtonContainer");
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      favoriteMovies: FavoriteMovieIdb,
      movie: {
        id: url.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        description: restaurant.description,
        rating: restaurant.rating,
      },
    });
  },
};

export default DetailPages;

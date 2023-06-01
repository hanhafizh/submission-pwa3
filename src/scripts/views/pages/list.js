import RestoSource from '../../data/resto-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const ListPages = {
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
    // Fungsi ini akan dipanggil setelah render()
    const dataRestaurants = await RestoSource.RestoList();
    const restaurantsContainer = document.querySelector('#movies');
    dataRestaurants.forEach((restaurants) => {
      restaurantsContainer.innerHTML
        += createRestaurantListTemplate(restaurants);
    });
  },
};

export default ListPages;

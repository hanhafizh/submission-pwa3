import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant_name">${restaurant.name}</h2>
    <img class="restaurant_image" src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name}" />
    <div class="restaurant_info">
      <h3>Informasi</h3>
      <h4>Deskripsi Restoran</h4>
        <p>${restaurant.description}</p>
      <div class = content_like>
        <div class = address>
          <h4>Alamat</h4>
          <p>${restaurant.address}</p>
        </div>
      </div>
      <h4>Kota</h4>
      <p>${restaurant.city}</p>
      <div id="menu">
        <div class="food">
          <h4>Menu Makanan</h4>
          <p>${restaurant.menus.foods
    .map((food) => `- ${food.name}`)
    .join('<br>')}</p>
        </div>
        <div class="drink">
          <h4>Menu Minuman</h4>
          <p>${restaurant.menus.drinks
    .map((drink) => `- ${drink.name}`)
    .join('<br>')}</p>
        </div>
      </div>
      <h4>Costumer Reviews</h4>
      <div class="review-list">
            ${restaurant.customerReviews
    .map(
      (review) => `
              <div class="review-item">
                <div class="review-item_bold">
                  <p class="review-item_date">${review.date}</p>
                  <p class="review-item_name">${review.name}</p>
                </div>
                <p class="review-item_review">${review.review}</p>
              </div>
            `,
    )
    .join('')}
      </div>
    </div>
`;

const createRestaurantListTemplate = (restaurant) => `
  <div id="restaurant-item">
    <div class="restaurant-list_header">
      <img class="restaurant-list_headerimage" alt="${restaurant.name}"
           src="${
  restaurant.pictureId
    ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
    : 'https://picsum.photos/id/666/800/450?grayscale'
}">
      <div class="restaurant-list_headerrating">
        <h2>⭐️<span class="restaurant-list_headerratingscore">${
  restaurant.rating
}</span></h2>
      </div>
    </div>
    <div class="restaurant-list_content">
      <a href="/#/detail/${restaurant.id}">
        <h3>${restaurant.name}</h3>
      </a>
      <p>${`${restaurant.description.slice(0, 250)} ...`}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

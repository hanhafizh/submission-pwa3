import DetailPages from '../views/pages/detail';
import ListPages from '../views/pages/list';
import Like from '../views/pages/like';

const routes = {
  '/': ListPages,
  '/list': ListPages,
  '/detail/:id': DetailPages,
  '/like': Like,
};

export default routes;

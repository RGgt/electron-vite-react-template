import { createBrowserRouter } from 'react-router-dom';
import { createRoutes } from './routesBuilder';

function createRouter() {
  const router = createBrowserRouter(createRoutes());
  return router;
}

export { createRouter };

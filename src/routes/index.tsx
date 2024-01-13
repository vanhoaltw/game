import { createBrowserRouter } from 'react-router-dom';

import IndexPage from '@/pages';
import NotFound from '@/pages/404';
import App from '@/pages/_app';
import ErrorPage from '@/pages/error';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      { path: '/', element: <IndexPage /> },
      { path: '/*', element: <NotFound /> },
    ],
  },
]);

export default router;

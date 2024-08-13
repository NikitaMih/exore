import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DetailProduct } from 'src/entities/DetailProduct';
import { ProductsList } from 'src/features/ProductsList';
import { NotFound } from 'src/pages/NotFound';

const Navigation = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProductsList />,
    },
    {
      path: 'product/:productId',
      element: <DetailProduct />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Navigation;

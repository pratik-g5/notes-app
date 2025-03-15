import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Notes from './Notes';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/notes',
      element: <Notes />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

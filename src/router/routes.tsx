
import HomePage from '../pages/homepage/HomePage';
import BlogPage from '../pages/blogpage/BlogPage';
import Layout from '../components/Layout';
import { createBrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/aboutpage/AboutPage';
import MainVideoPage from '../pages/mainvideopage/MainVideoPage';
import DonatePage from '../pages/donatepage/DonatePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout />
      </>
    ),
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/aboutCIF", element: <AboutPage />},
      { path: "/donate", element: <DonatePage />},
      { path: "/videos", element: <MainVideoPage />},
    ]
   }]);

   export default router;
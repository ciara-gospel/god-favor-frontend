import { createBrowserRouter } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import { HomePage } from '../pages/public/HomePage';
import { TravelServicesPage } from '../pages/public/TravelServicesPage';
import { CoursesCatalogPage } from '../pages/public/CoursesCatalogPage';
import { GuidePage } from '../pages/public/GuidePage';
import { BlogPage } from '../pages/public/BlogPage';
import { ContactPage } from '../pages/public/ContactPage';
import { LoginPage } from '../pages/public/LoginPage';
import { RegisterPage } from '../pages/public/RegisterPage';
import { NotFoundPage } from '../pages/public/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'travel', element: <TravelServicesPage /> },
      { path: 'courses', element: <CoursesCatalogPage /> },
      { path: 'guide', element: <GuidePage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

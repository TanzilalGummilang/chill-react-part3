import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import RegisterPage from './pages/register.tsx';
import LoginPage from './pages/login.tsx';
import HomePage from './pages/home.tsx';
import HeaderLayout from './components/Layouts/HeaderLayout.tsx';
import FooterLayout from './components/Layouts/FooterLayout.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HeaderLayout />
        <HomePage />
        <FooterLayout />
      </>
    )
  },
  {
    path: "/register",
    element: <main id="register-page"><RegisterPage /></main>
  },
  {
    path: "/login",
    element: <main id="login-page"><LoginPage /></main>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)

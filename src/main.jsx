import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // ✅ Import QueryClientProvider
import './index.css';
import Homepage from './routes/homepage/Homepage.jsx';
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx';
import Dashboardpage from './routes/dashboardpage/Dashboardpage.jsx';
import Chatpage from './routes/chatpage/Chatpage.jsx';
import SignInpage from './routes/signinpage/SignInpage.jsx';
import SignUppage from './routes/signuppage/SignUppage.jsx';

// Create a new QueryClient instance
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/sign-in*',
        element: <SignInpage />,
      },
      {
        path: '/sign-up*',
        element: <SignUppage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: '/dashboard',
            element: <Dashboardpage />,
          },
          {
            path: '/dashboard/chats/:id',
            element: <Chatpage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap your app inside QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

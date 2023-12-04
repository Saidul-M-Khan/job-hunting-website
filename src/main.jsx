import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JObDetails from './components/JobDetails/JObDetails';
import Jobs from './components/Jobs/Jobs';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }, 
      {
        path: '/jobs',
        element: <Jobs/>
      },
      {
        path: '/applied', 
        element: <AppliedJobs/>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/statistics', 
        element: <Statistics/>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: '/blogs',
        element: <Blogs/>
      },
      {
        path: '/job/:id',
        element:<JObDetails/>, 
        loader: () => fetch('/jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage';
import MainLayout from './pages/MainLayout';
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);


const App = () => {
  return <RouterProvider router={router} />
}


export default App
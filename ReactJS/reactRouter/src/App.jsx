import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import ServiceDetail from './Components/ServiceDetail';
import ServicePricing from './Components/ServicePricing';
import Blogs from './Components/Blogs';
import About from './Components/About';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import ThankYouPage from './Components/ThankYouPage';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/services",
      element: (
        <>
          <Navbar />
          <Services />
        </>
      ),

      children :[
        {
          path: "details/:id",
          element: <ServiceDetail />,
        },
        {
          path: "pricing",
          element: <ServicePricing />,
        },
      ]
    },
    {
      path: "/blogs",
      element: (
        <>
          <Navbar />
          <Blogs />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
    {
      path: "/profile/:name/:age",
      element: (
        <>
          <Navbar />
          <Profile />
        </>
      ),
    },
    {
      path: "/thank-you",
      element: (
        <>
          <Navbar />
          <ThankYouPage />
        </>
      ),
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

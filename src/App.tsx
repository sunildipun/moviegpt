import { createBrowserRouter, RouterProvider } from "react-router";

import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';

import Home from "./components/Home";
import SignUp from "./components/Signup";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <SignUp />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/home',
      element: <Home />
    }
  ]);

  return (
    <div className="h-screen w-screen text-white">
      <Navbar/>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App

import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';

import NetflixBackgroundImage from "./assets/NetflixBackground.jpg";

function App() {

  return (
    <div className="h-screen w-screen text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NetflixBackgroundImage})`,
        backgroundSize: 'cover', // Ensures the image covers the entire div
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents repeating
        height: '100vh', // Full height of the viewport
      }}>
      <Navbar />
      <Login />
    </div>
  )
}

export default App

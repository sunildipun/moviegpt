import Button from "./Button";
import NetflixBackgroundImage from "../assets/NetflixBackground.jpg";
import { Link } from "react-router-dom";
import { useRef } from "react";


const Login = () => {
    const email = useRef(null);
    const password = useRef(null);
    const handleSignButton = () => {
        console.log('Handle Sign in Button and navigate', email.current?.value, password.current?.value);
    }

    return (
        <div className="h-[80%] px-4 pt-40 sm:px-5 w-full flex justify-center absolute top-0"
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NetflixBackgroundImage})`,
            backgroundSize: 'cover', // Ensures the image covers the entire div
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat', // Prevents repeating
            height: '100vh', // Full height of the viewport
        }}>
          <form onSubmit={(e) => e.preventDefault()} className="w-full sm:w-3/12 min-w-96 py-5 px-10 bg-black/70 rounded-sm">
            <h1 className="text-3xl font-bold mb-8">Sign In</h1>
            <div className="w-full mt-4">
                <label className="block text-sm/6 font-medium">Email</label>
                <div className="mt-2">
                    <input ref={email} type="email" name="email" id="email" className="block w-full py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 rounded-sm bg-slate-300" placeholder="Email" />
                </div>
            </div>
            <div className="w-full mt-4">
                <label className="block text-sm/6 font-medium">Password</label>
                <div className="mt-2">
                    <input ref={password} type="password" name="password" id="password" className="block w-full py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 rounded-sm bg-slate-300" placeholder="Password" />
                </div>
            </div>
            <div className="w-full mt-4 text-center">
                <Button text="Sign In" onClick={handleSignButton}/>
                <h2 className="my-4">Forgot Password?</h2>
                <h2>New to Netflix? <Link to="/">Sign Up</Link></h2>
            </div>
          </form>
        </div>
    )
};

export default Login;
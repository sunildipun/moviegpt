import NetflixBackgroundImage from "../assets/NetflixBackground.jpg";
import Button from "./Button";

const SignUp = () => {
    return (
        <div className="h-[80%] px-4 pt-40 sm:px-5 w-full flex justify-center absolute top-0"
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${NetflixBackgroundImage})`,
            backgroundSize: 'cover', // Ensures the image covers the entire div
            backgroundPosition: 'center', // Centers the image
            backgroundRepeat: 'no-repeat', // Prevents repeating
            height: '100vh', // Full height of the viewport
        }}>
            <div className="w-5/12 text-center">
                <h1 className="text-3xl sm:text-5xl font-bold"> Unlimited movies, TV shows and more</h1>
                <h2 className="text-xl sm:text-2xl font-semibold mt-4">Starts at ₹149. Cancel at any time.</h2>
                <p className="mt-6">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="flex space-x-2">
                    <input type="email" name="email" id="email" className="block w-4/5 py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 rounded-sm" placeholder="Email Address" />
                    <Button text="Get Started 🚀" />
                </div>
            </div>
        </div>
    )
};

export default SignUp;
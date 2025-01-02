import Button from "./Button";

const Login = () => {
    return (
        <div className="h-[80%] px-5 sm:py-1 mt-10 w-full flex justify-center">
          <div className="w-full sm:w-3/12 min-w-96 py-5 px-10 bg-black/70 rounded-sm">
            <h1 className="text-3xl font-bold mb-8">Sign In</h1>
            <div className="w-full mt-4">
                <label className="block text-sm/6 font-medium">Email</label>
                <div className="mt-2">
                    <input type="email" name="email" id="email" className="block w-full py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 rounded-sm" placeholder="Email" />
                </div>
            </div>
            <div className="w-full mt-4">
                <label className="block text-sm/6 font-medium">Password</label>
                <div className="mt-2">
                    <input type="password" name="password" id="password" className="block w-full py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 rounded-sm" placeholder="Password" />
                </div>
            </div>
            <div className="w-full mt-4">
                <Button text="Sign In" />
            </div>
          </div>
        </div>
    )
};

export default Login;
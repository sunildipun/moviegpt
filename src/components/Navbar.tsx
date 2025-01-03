import logo from './../assets/NetflixLogo.png';
// import Button from './Button';

const Navbar = () => {
    return (
        <nav className="h-[16%] px-5 flex justify-between bg-gradient-to-b from-black from-50% to-transparent sticky top-0 z-10">
            <img src={logo} width={150}/>
            {/* <div className='w-32 py-4'>
                <Button text="Sign In"/>
            </div> */}
        </nav>
    )
};

export default Navbar;
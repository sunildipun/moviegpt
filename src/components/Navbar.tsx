import logo from './../assets/NetflixLogo.png';

const Navbar = () => {
    return (
        <nav className="h-[10%] px-5 flex bg-gradient-to-b from-black from-50% to-transparent">
            <img src={logo} width={150}/>
        </nav>
    )
};

export default Navbar;
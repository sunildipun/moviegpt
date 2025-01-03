import { useNavigate } from "react-router";

type ButtonProps = {
    text: string;
};

const Button = ({text}: ButtonProps) => {
    const textButton = text;
    const navigate = useNavigate();

    const handleRedirect = () => {
        console.log('/login');
        navigate('/login');
    };

    return (
        <button onClick={handleRedirect} className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded text-center">
            {textButton}
        </button>
    )
};

export default Button;
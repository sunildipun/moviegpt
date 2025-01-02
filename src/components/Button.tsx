type ButtonProps = {
    text: string;
  };

const Button = ({text}: ButtonProps) => {
    const textButton = text;
    return (
        <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded text-center">
            {textButton}
        </button>
    )
};

export default Button;
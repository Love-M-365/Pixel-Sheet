
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  logLabel?: string; 
};

const CustomButton: React.FC<Props> = ({ onClick, children, logLabel, ...rest }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
   
    const target = e.currentTarget;

    const buttonText =
      logLabel ||
      target.getAttribute("aria-label") || 
      target.innerText ||
      target.title ||
      "🔘 Icon Button";

    console.log("Button clicked:", buttonText);

    onClick?.(e);
  };

  return (
    <button {...rest} onClick={handleClick}>
      {children}
    </button>
  );
};

export default CustomButton;

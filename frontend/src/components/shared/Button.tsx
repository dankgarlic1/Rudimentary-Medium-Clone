import React from "react";

interface ButtonProp {
  buttonName: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  color?: string; // Optional prop for button color
}

export const Button = (props: ButtonProp) => {
  const { buttonName, onClick, color = "bg-black" } = props; // Default color is black

  return (
    <div>
      <button
        className={`${color} hover:bg-gray-600 active:bg-gray-700 text-white text-sm font-medium py-2.5 px-5 w-full my-2 border border-gray-700 rounded-lg`}
        onClick={onClick}
      >
        {buttonName}
      </button>
    </div>
  );
};

interface ButtonProp {
  authType: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: ButtonProp) => {
  return (
    <div>
      <button
        className="bg-black hover:bg-gray-600 active:bg-gray-700   text-white text-sm font-medium py-2.5 px-5 w-full my-2 border border-gray-700 rounded-lg"
        onClick={props.onClick}
      >
        {props.authType}
      </button>
    </div>
  );
};

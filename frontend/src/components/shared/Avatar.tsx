interface Props {
  initials: String;
  size?: Number;
}
export const Avatar = (props: Props) => {
  const size = props.size || 4;
  return (
    <div>
      <div
        className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
        style={{ width: `${size}rem`, height: `${size}rem` }} // Adjusted size
      >
        <span className="font-extralight text-xs text-gray-600 dark:text-gray-300">
          {props.initials}
        </span>
      </div>
    </div>
  );
};

export default Avatar;

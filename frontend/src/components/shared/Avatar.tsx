interface Props {
  initials: String;
}
export const Avatar = (props: Props) => {
  return (
    <div>
      <div className="relative inline-flex items-center justify-center w-4 h-4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-extralight text-xs text-gray-600 dark:text-gray-300">
          {props.initials}
        </span>
      </div>
    </div>
  );
};

export default Avatar;

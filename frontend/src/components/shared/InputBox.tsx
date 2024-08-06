interface Props {
  title: string;
  type: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputBox = (props: Props) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-black pt-4">
        {props.title}
      </label>
      <input
        type={props.type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
      />
    </div>
  );
};

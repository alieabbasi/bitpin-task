import { FC, InputHTMLAttributes } from "react";

const RangeInput: FC<
  Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
    onChange: (value: number) => void;
  }
> = ({ value, onChange, ...props }) => {
  return (
    <input
      {...props}
      type="range"
      // IDK Why, but this was how the input was working!
      value={value !== undefined ? 100 - (value as number) : 0}
      onChange={(e) => onChange(100 - +e.target.value)}
      className="range range-sm -scale-x-100 max-w-96"
    />
  );
};
export default RangeInput;

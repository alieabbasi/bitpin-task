import { FC } from "react";

interface RangeInputProps {
  value: number;
  onChange: (value: number) => void;
}

const RangeInput: FC<RangeInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="range"
      min={0}
      max="100"
      // IDK Why, but this was how the input was working!
      value={100 - value}
      onChange={(e) => onChange(100 - +e.target.value)}
      className="range range-sm -scale-x-100"
    />
  );
};

export default RangeInput;

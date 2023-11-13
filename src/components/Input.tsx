import { FC } from "react";
import { IInput } from "./types";

const Input: FC<IInput> = ({
  innerLabel,
  type,
  options,
  onChange,
  placeholder,
}) => {
  return (
    <div className="flex justify-between gap-2 items-center bg-primaryLight border-2 border-gray rounded-xl p-3">
      <div>
        {innerLabel && <p className="text-defaultText text-sm">{innerLabel}</p>}
        <input
          type={type ?? "text"}
          placeholder={placeholder ?? "0.00"}
          onChange={() => onChange}
          className="bg-transparent font-semibold text-lg outline-none"
        />
      </div>
      {/* dropdown */}
      {options && (
        <div>
          <select className="bg-gray-50 border-2 outline-none border-gray text-gray-900 text-sm rounded-lg block w-full p-2.5">
            {options.map((e, i) => {
              return (
                <option key={i} value={e.code}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
};

export default Input;

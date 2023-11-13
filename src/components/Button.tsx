import { FC } from "react";
import { IButton } from "./types";

const Button: FC<IButton> = ({ children, isDisabled, onClick }) => {
  return (
    <button
      className={`bg-primary text-white p-4 rounded-md w-full ${
        isDisabled &&
        " !bg-primaryLight !text-primary !text-opacity-50 cursor-not-allowed"
      }`}
      disabled={isDisabled ?? false}
      onClick={() => onClick}
    >
      {children}
    </button>
  );
};

export default Button;

import * as React from "react";

export const Button = ({
  onClick,
  children,
  variant = "primary",
  type = "button",
}) => (
  <button
    type={type}
    className={`inline-flex justify-center items-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md 
    ${
      variant === "primary"
        ? "text-white bg-pink-600 hover:bg-pink-700 border-transparent"
        : "text-pink-500 bg-white hover:text-pink-700 border-pink-500"
    } 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500`}
    onClick={onClick}
  >
    {children}
  </button>
);

import React from "react";
import classNames from "classnames";

const variants = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  ghost: "text-gray-700 hover:bg-gray-100",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-2.5 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon: Icon,
  iconPosition = "left",
  ...props
}) {
  return (
    <button
      className={classNames(
        "inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon className="w-5 h-5 mr-2" />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon className="w-5 h-5 ml-2" />
      )}
    </button>
  );
}

import React from "react";
import { FaSave, FaTrash, FaEdit } from "react-icons/fa"; // example icons

// 🧩 Define your variants in one place
const VARIANTS = {
  submit_btn: {
    text:'submit',
  },
  icon_btn: {
    className: "icon_btn",
  },
};

export default function Button({
  variant = "submit_btn",
  children,
  icon,       // ✅ Optional override icon
  text,       // ✅ Optional override text
  onClick,
  className,
  ...rest
}) {
  // Get variant config
  const { icon: variantIcon, text: variantText } =
    VARIANTS[variant] || {};

  return (
    <button className={className} onClick={onClick} {...rest}>
      {/* Priority: manual icon → variant icon */}
      {icon || variantIcon}{" "}
      {/* Priority: children → manual text → variant text */}
      {children ?? text ?? variantText}
    </button>
  );
}

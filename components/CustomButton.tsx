"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

function CostumButton({
  title,
  containerStyles,
  handleClick,
  btnType,
  rightIcon,
  isDisabled,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}>
      <span className={"flex-1"}>{title}</span>
      {rightIcon && (
        <div className="w-6 h-6 relative">
          <Image
            src={rightIcon}
            alt="Right Icon"
            className="object-contain"
            fill
          />
        </div>
      )}
    </button>
  );
}

export default CostumButton;

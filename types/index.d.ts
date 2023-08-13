import { MouseEventHandler } from "react";

interface CustomButtonProps {
  title: String;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

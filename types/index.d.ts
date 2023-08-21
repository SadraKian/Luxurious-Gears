import { MouseEventHandler } from "react";

type CarState = CarProps[] & { message?: string };

interface CustomButtonProps {
  title: String;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  rightIcon?: string;
  isDisabled?: boolean;
}

interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

interface filterProps {
  make: string;
  year: number;
  fuel_type: string;
  limit: number;
  model: string;
}

interface OptionProps {
  title: string;
  value: string;
}

interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

interface PaginationProps {
  carPages: CarProps[][];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

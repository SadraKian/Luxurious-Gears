import { CarProps } from "@/types";
import { filterProps } from "@/types";

export const fetchCars = async (filters: filterProps) => {
  const filterProps = Object.entries(filters);

  const existingProps = filterProps.filter((item) => {
    return item[1] !== "";
  });

  const url = new URL(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`);

  const headers = {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  existingProps.map((prop) => {
    url.searchParams.append(prop[0], `${prop[1]}`);
  });

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    const cars = await response.json();
    return cars;
  } catch (error) {
    console.log(error);
  }
};

const bugatti = "bugatti";

const hyperCars = [
  "lamborghini",
  "ferrari",
  "mclaren",
  "aston martin",
  "mercedes-benz",
];

const highLevelCars = ["maserati", "porsche", "rolls-royce"];

const midLevelCars = [
  "audi",
  "bentley",
  "bmw",
  "jaguar",
  "tesla",
  "lincoln",
  "bentley",
];

export const calculateRentPrice = (
  make: string,
  city_mpg: number,
  year: number
) => {
  const getModelPrice = (make: string) => {
    if (make === bugatti) {
      return 2600;
    }
    if (hyperCars.includes(make)) {
      return 1020;
    } else if (highLevelCars.includes(make)) {
      return 720;
    } else if (midLevelCars.includes(make)) {
      return 350;
    }
    return 100;
  };
  const ageFactor = 0.5;
  const modelPricePerDay = getModelPrice(make);
  const milesDrivenFactor = 0.2;

  const carAge = new Date().getFullYear() - year;
  const agePrice = carAge * ageFactor;
  const distancePrice = milesDrivenFactor * city_mpg;

  const rentPricePerDay = modelPricePerDay - agePrice - distancePrice;

  return rentPricePerDay.toFixed(2);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("year", `${year}`);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("make", make);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value.toLowerCase());

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};

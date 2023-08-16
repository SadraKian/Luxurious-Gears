export const fetchCars = async () => {
  const headers = {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=aventador",
      {
        method: "GET",
        headers: headers,
      }
    );
    const cars = await response.json();
    return cars;
  } catch (error) {
    console.log(error);
  }
};

const bugatti = "bugatti";

const hyperCars = ["lamborghini", "ferrari", "mclaren", "aston-martin"];

const highLevelCars = ["mercedes-benz", "maserati", "porsche", "rolls-royce"];

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
      return 420;
    } else if (midLevelCars.includes(make)) {
      return 200;
    }
    return 75;
  };
  const ageFactor = 0.5;
  const modelPricePerDay = getModelPrice(make);
  const milesDrivenFactor = 0.2;

  const carAge = new Date().getFullYear() - year;
  const agePrice = carAge * ageFactor;
  const distancePrice = milesDrivenFactor * city_mpg;

  const rentPricePerDay = modelPricePerDay - agePrice - distancePrice;

  return rentPricePerDay;
};

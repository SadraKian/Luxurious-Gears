export const fetchCars = async () => {
  const headers = {
    "X-RapidAPI-Key": "efd660bbfemsh2bbd8078c2d7473p158a7ajsnb84b16f0f384",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=lamborghini",
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

const hyperCars = ["lamborghini", "ferrari", "rolls-royce"];

const highLevelCars = [
  "mercedes-benz",
  "jaguar",
  "tesla",
  "lincoln",
  "maserati",
  "porsche",
  "aston-martin",
  "audi",
  "bentley",
  "bmw",
];

export const calculateRentPrice = (
  make: string,
  city_mpg: number,
  year: number
) => {
  const getModelPrice = (make: string) => {
    if (hyperCars.includes(make)) {
      return 220;
    } else if (highLevelCars.includes(make)) {
      return 150;
    }
    return 50;
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

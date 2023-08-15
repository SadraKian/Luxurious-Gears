export const fetchCars = async () => {
  const headers = {
    "X-RapidAPI-Key": "efd660bbfemsh2bbd8078c2d7473p158a7ajsnb84b16f0f384",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  try {
    const response = await fetch(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
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

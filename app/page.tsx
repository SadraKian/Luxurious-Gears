import { Hero, SearchBar, CustomFilter, CarCard } from "@/components";
import { fetchCars } from "@/utils";
export default async function Home() {
  const allCars = await fetchCars();
  console.log(allCars);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div id="discover" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold text-slate-300">
            Car Catlogue
          </h1>
          <p className="text-slate-400">Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <section className="home__error-container">
            <h2 className="font-bold text-black-text-xl">
              oops there was an error loading the cars
            </h2>
            <p>{allCars?.message}</p>
          </section>
        )}
      </div>
    </main>
  );
}

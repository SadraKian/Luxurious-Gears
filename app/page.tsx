import { Hero, SearchBar, CustomFilter } from "@/components";
import { fetchCars } from "@/utils";
export default async function Home() {
  const allCars = await fetchCars();
  console.log(allCars);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
      <Hero />
      <div id="discover" className="mt-12 padding-x padding-y w-full">
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
          <section>Cars data is here!</section>
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

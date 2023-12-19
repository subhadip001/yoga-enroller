import { useState, useEffect } from "react";
import yoga from "./assets/yoga.webp";
import axiosConfig from "./utils/axiosConfig";

function App() {
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    try {
      setLoading(true);
      const response = await axiosConfig.post("/users", {
        name: data.name,
        email: data.email,
        age: data.age,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="">
      <section className="h-screen relative overflow-hidden flex flex-col sm:flex-row">
        <div className="left sm:w-[45%] h-full absolute sm:relative">
          <img
            src={""}
            alt="yoga-enroller"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="right h-full w-[95%] sm:w-[55%] p-5">
          <span className="text-3xl md:text-5xl font-semibold">
            YOGA ENROLLER
          </span>
          <form
            onSubmit={handleFormSubmit}
            className="w-full flex flex-col rounded-md shadow-md p-6"
          >
            <span className="text-xl font-semibold">Enroll Now</span>
            <div className="flex flex-col mt-4">
              <label htmlFor="name" className="text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="border-2 border-gray-400 rounded-md px-2 py-1 mt-1"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="border-2 border-gray-400 rounded-md px-2 py-1 mt-1"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="phone" className="text-sm font-semibold">
                Age
              </label>
              <input
                type="number"
                name="number"
                id="number"
                placeholder="Enter your age"
                className="border-2 border-gray-400 rounded-md px-2 py-1 mt-1"
              />
            </div>
            <div className="flex flex-col mt-6">
              <button
                className="bg-white text-[#000] px-2 py-1 rounded-md"
                type="submit"
              >
                Enroll
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;

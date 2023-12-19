import { useState } from "react";
import yoga from "./assets/yoga.webp";
import axiosClient from "./utils/axiosConfig";

function App() {
  const [loading, setLoading] = useState<String>("");
  const [error, setError] = useState<String>("");

  const handleMakePayment = async (
    enroll_id: string | number,
    user_id: string | number,
    month: string | number
  ) => {
    try {
      setLoading("Making Payment");
      const response = await axiosClient.post("/payments", {
        enroll_id: enroll_id,
        user_id: user_id,
        month: month,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
      console.log((error as any).response.data);
    } finally {
    }
  };

  const handleEnroll = async (
    id: string | number,
    batch: string,
    month: string | number
  ) => {
    try {
      setLoading("Enrolling");
      const response = await axiosClient.post("/enrollments", {
        user_id: id,
        batch: batch,
        month: month,
      });
      console.log(response.data);

      const { user_id } = response.data;

      await handleMakePayment(response.data?.id, user_id, month);
    } catch (error) {
      console.log(error);
      console.log((error as any).response.data);
    } finally {
      setLoading("");
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    try {
      setLoading("Submitting");
      const response = await axiosClient.post("/users", {
        name: data.name,
        email: data.email,
        age: data.age,
      });

      console.log(response.data);
      const { id } = response.data;
      await handleEnroll(id, data.batch as string, data.month as string);
      setLoading("Payment Successful");
    } catch (error) {
      console.log(error);
      setError((error as any).response?.data?.detail ?? (error as any).message);
      if ((error as any)?.code === "ERR_NETWORK") {
        setError(
          "Network error due to CORS problem, Please try using localhost base url or disabling browser CORS."
        );
      }
    } finally {
      setTimeout(() => {
        setLoading("");
        setError("");
      }, 2000);
    }
  };
  return (
    <main className="">
      <section className="h-screen relative overflow-hidden flex flex-col sm:flex-row">
        <div className="left sm:w-[45%] h-full absolute sm:relative">
          <img
            src={yoga}
            alt="yoga-enroller"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="right h-full absolute sm:relative z-50 w-[95%] sm:w-[55%] p-5">
          <h1 className="text-3xl text-center md:text-5xl font-semibold">
            YOGA ENROLLER
          </h1>
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
                required
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
                required
                className="border-2 border-gray-400 rounded-md px-2 py-1 mt-1"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="phone" className="text-sm font-semibold">
                Age
              </label>
              <input
                type="number"
                name="age"
                id="age"
                min={18}
                max={65}
                placeholder="Enter your age"
                required
                className="border-2 border-gray-400 rounded-md px-2 py-1 mt-1"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="batch" className="text-sm font-semibold">
                Batch
              </label>
              <select
                name="batch"
                id="batch"
                required
                className="border-2 border-gray-400 rounded-md px-2 py-1 mt-1"
              >
                <option value="6-7AM">6-7AM</option>
                <option value="7-8AM">7-8AM</option>
                <option value="8-9AM">8-9AM</option>
                <option value="9-10AM">5-6PM</option>
              </select>
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="month" className="text-sm font-semibold">
                Month
              </label>
              <select
                name="month"
                id="month"
                required
                className="border-2 border-gray-400 rounded-md px-2 py-1 mt-1"
              >
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>

            <div className="flex flex-col mt-6">
              <button
                className="bg-white text-[#000] px-2 py-1 rounded-md"
                type="submit"
                disabled={loading ? true : false}
              >
                {loading ? loading : "Submit"}
              </button>
              <span>
                {error ? (
                  <span className="text-red-500 text-sm mt-3">{error}</span>
                ) : null}
              </span>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;

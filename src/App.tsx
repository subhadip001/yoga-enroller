import yoga from "./assets/yoga.webp";

function App() {
  return (
    <main className="">
      <section className="h-screen overflow-hidden flex">
        <div className="left w-[45%]">
          <img
            src={yoga}
            alt="yoga-enroller"
            className="w-full h-full object-cover object-center"  
          />
        </div>
        <div className="right">
          <form action="">
            <h1>Yoga Enroller</h1>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="John Doe" />
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="johndoe@gmail.com" />
            </div>
            
          </form>
        </div>
      </section>
    </main>
  );
}

export default App;

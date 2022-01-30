import "./App.css";
import Variants from "./Components/Variants";

function App() {
  return (
    <body className="app container">
      <section className="row">
        <div style={{ height: "500px" }} className="col-lg-6 ">
          <img
            className="h-70 w-75 me-3 mt-5"
            src="https://github.com/ProgrammingHero1/mac-book-pro/blob/main/images/mac.png?raw=true"
            alt=" "
          />
        </div>
        <div className="col-lg-5 mt-5 ">
          <div>
            <h1> Customize your Blue 24-inch iMac with Apple M1 chip.</h1>
            <p className="text-secondary">
              Apple M1 chip with 8-core CPU with 4 performance cores and 4
              efficiency cores, 7-core GPU, and 16-core Neural Engine 8GB
              unified memory 256GB SSD storage Two Thunderbolt / USB 4 ports
              Magic Mouse Magic Keyboard -US English
            </p>
          </div>
          <div>
            <Variants
              heading={"Memory"}
              text1={"8GB unified memory "}
              text2={"16GB unified memory "}
            />
            <Variants
              heading={"Storage"}
              text1={"256GB SSD storage  "}
              text2={"512GB SSD storage "}
              text3={"1TB SSD storage "}
            />
            <Variants
              heading={"Choose Your delivery Option"}
              text1={"Friday, Aug 25 FREE Prime Delivery"}
              text2={" Friday, Aug 21 Delivery charge $20 "}
            />
          </div>
        </div>
      </section>
    </body>
  );
}

export default App;

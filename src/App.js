import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/common/navbar/navbar";
import Banner from "./components/home/banner/banner";
import AboutUs from "./components/home/aboutus/aboutUs";
import Deals from "./components/home/deals/deals";
import Getstarted from "./components/home/getStarted/getstarted.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <AboutUs />
      <Deals />
      <Getstarted />
    </div>
  );
}

export default App;

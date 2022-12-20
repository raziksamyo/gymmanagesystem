// import "./App.css";
import Home from "./Component/Home";
import About from "./Component/About";
import Schedule from "./Component/Schedule";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Classes from "./Component/Classes";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Classes />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

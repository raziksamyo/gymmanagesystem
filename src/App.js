import "./App.css";
import Home from "./Component/Home";
import About from "./Component/About";
import Schedule from "./Component/Schedule";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// import "./App.css";
import Home from "./Component/Home";
import About from "./Component/About";
import Schedule from "./Component/Schedule";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Classes from "./Component/Classes";
import AdminHome from "./Admin/AdminHome";

function App() {
  return (
    <>
      <Home />
      <About />
      <Classes />
      <Schedule />
      <Contact />
      <Footer />
      {/* <AdminHome /> */}
    </>
  );
}

export default App;

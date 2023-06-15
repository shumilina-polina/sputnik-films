import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Error from "./pages/404";
import Footer from "./components/Footer/Footer";
import Index from "./pages/Index/Index";
import Header from "./components/Header/Header";

function App() {
  // useEffect(() => {
  //   Aos.init();
  // }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

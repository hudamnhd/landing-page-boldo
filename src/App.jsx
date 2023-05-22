import {
  Navbar,
  Hero,
  ServicesGroupA,
  ServicesGroupB,
  Testimonials,
  ServicesGroupC,
  Products,
  CTAFooter,
  ScrollTop,
} from "./components";
import Help from "./components/Help.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesGroupA />
      <ServicesGroupB />
      <Testimonials />
      <ServicesGroupC />
      <Products />
      <CTAFooter />
      <ScrollTop />
      <Help />
    </>
  );
};

export default App;

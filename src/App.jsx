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
  Help,
} from "./components";

const App = () => {
  return (
    <div className="xl:max-w-[1280px] mx-auto w-full bg-white relative">
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
    </div>
  );
};

export default App;

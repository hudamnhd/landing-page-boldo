import {
  CTAFooter,
  Help,
  Hero,
  Navbar,
  Products,
  ScrollTop,
  ServicesGroupA,
  ServicesGroupB,
  ServicesGroupC,
} from "../components";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Boldo Landing Page" },
    {
      name: "description",
      content: "Boldo Landing Page built with react router V7",
    },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_NETLIFY };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <LandingPage message={loaderData.message} />;
}

function LandingPage({ message }: { message: string }) {
  return (
    <main className="xl:container mx-auto w-full bg-white relative">
      <Navbar />
      <Hero />
      <ServicesGroupA />
      <ServicesGroupB />
      <ServicesGroupC />
      <Products />
      <CTAFooter />
      <ScrollTop />
      <Help />
    </main>
  );
}

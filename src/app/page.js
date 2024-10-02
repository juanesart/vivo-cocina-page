import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ButtonWps from "./components/ButtonWps";

export default function Home() {
  return (
    <div className="flex min-h-screen view flex-col">
      <Header />
      <Hero />
      <About />
      <Services />
      <ButtonWps />
      <Footer />
    </div>
  );
}
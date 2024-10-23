import FloatLogo from "./components/FloatLogo";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ButtonWps from "./components/ButtonWps";
import Extra from "./components/Extra";
import HeaderOp2 from "./components/HeaderOp2";
import HeaderBlack from "./components/HeaderBlack";

export default function Home() {
  return (
    <div className="flex min-h-screen view flex-col">
      <HeaderBlack />
      <FloatLogo />
      <Hero />
      <About />
      <Services />
      <Extra />
      <ButtonWps />
      <Footer />
    </div>
  );
}

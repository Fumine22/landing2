import About from "@/components/About";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Check from "@/components/Check";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Products from "@/components/Products";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Products />
      <About />
      <Services />
      <Check />
      <Blog />
      <Footer />
    </div>
  );
}

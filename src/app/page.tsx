import About from "@/components/About";
import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Products />
      <About />
    </div>
  );
}

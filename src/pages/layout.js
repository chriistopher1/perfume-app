import NavigationBar from "../components/navigation-bar/navigation-bar";
import Hero from "../components/hero/hero";
import AboutUs from "../components/aboutus/about-us";
import Product from "../components/product/product";
import Contact from "../components/contact/contact";

function Layout() {
  return (
    <div className="flex flex-col h-auto w-auto gap-3">
        <NavigationBar />
        <Hero />
        <AboutUs />
        <Product />
        <Contact />
    </div>
  )
}

export default Layout;

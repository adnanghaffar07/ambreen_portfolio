import Footer from "./components/footer";
import Navigation from "./components/navigation";
import Homepage from "./homepage/page";

export default function Home() {
  return (
    <div>
      <div className="px-6">
         <Navigation /></div>
      <Homepage />
      <Footer />
    </div>
  );
}

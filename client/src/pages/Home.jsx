// import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
// import Footer from '../components/Footer';
import Overview from "../components/Overview";
import Services from "../components/Services";
import Services2 from "../components/Services2";

function Home({ user }) {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Overview />
      <Services user={user} />
      <Services2 />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;

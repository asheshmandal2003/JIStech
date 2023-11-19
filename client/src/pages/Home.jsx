// import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
// import Footer from '../components/Footer';
import Overview from "../components/Overview";
import Services from "../components/Services";

function Home({ user }) {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Overview />
      <Services user={user} />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;

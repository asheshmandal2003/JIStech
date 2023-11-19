import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Account from "./pages/Account";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Navbar user={user} />
      <Container className="my-3">
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          {/* <Route path="/account" element={<Account />} /> */}
          <Route path="/auth/signup" element={<Signup setUser={setUser} />} />
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
};

export default App;

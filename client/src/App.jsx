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
import { Box } from "@mui/joy";

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Navbar user={user} />
      <Box sx={{ display: "flex", justifyContent: "center", my: 5 }}>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          {/* <Route path="/account" element={<Account />} /> */}
          <Route path="/auth/signup" element={<Signup setUser={setUser} />} />
          <Route path="/auth/signin" element={<Signin setUser={setUser} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Box>
      <Footer />
    </div>
  );
};

export default App;

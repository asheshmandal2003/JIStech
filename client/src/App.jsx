import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Container className="my-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
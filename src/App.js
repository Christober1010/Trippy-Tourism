import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <a href='#'><button className='top-nav-btn btn btn-warning'><i className='fa fa-angle-up'></i></button></a>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;

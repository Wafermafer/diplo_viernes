import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Nav from './components/layout/Nav/Nav';
// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home/HomePage';
import NosotrosPage from './pages/Nosotros/NosotrosPage';
import NovedadesPage from './pages/Novedades/NovedadesPage';
import ContactoPage from './pages/Contacto/ContactoPage';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="nosotros" element={<NosotrosPage></NosotrosPage>}></Route>
          <Route path="novedades" element={<NovedadesPage></NovedadesPage>}></Route>
          <Route path="contacto" element={<ContactoPage></ContactoPage>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
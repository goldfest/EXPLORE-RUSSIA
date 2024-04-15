import {
 Nav, Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo-city.png';
import Ulyanovsk from '../assets/Ulyanovsk-photo.png';
import Back from '../assets/Back.png';
import './Navigation.css';

const NavigationCity = () => {
    return (
      <>
        <header className='header-city container-fluid'>
          <Navbar sticky="top">
            <Navbar.Brand className='logo' as={Link} to="/">
                <img className="brand" src={Logo} alt="Logo" />
            </Navbar.Brand>
            <div className='container-fluid cont-sh'>
                <div className="mx-auto mt-2 justify-content-center">
                  <Nav.Link as={Link} to="/" className="nav-link-city px-4">
                  <div className="blend-container">
                    <img src={Back} className='back-photo' alt="Background" />
                    <span className='blend-mode'>BACK</span>
                  </div>
                  </Nav.Link>
                </div>
                <div className="ml-auto mt-2">
                  <div className="LocalTime-cities nav-link-city px-4">
                    11:21 PM Ulyanovsk, Russia
                  </div>
                </div>
            </div>
          </Navbar>
        </header>
        <div id='main' className='container-fluid firstBlock-city'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className="card">
                <img src={Ulyanovsk} className="card-img ulyanovsk" alt="..." />
                <div className="card-img-overlay">
                  <p className='city-text-in text-city1'>
                    ULYANOVSK
                  </p>
                  <p className='city-text-in text-city2'>
                   — hero city
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6'>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6'>
              <p className='title-city-page'>
              Ulyanovsk is a unique city in the depths of Russia,
              which combines rich history, cultural heritage and modern life.
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default NavigationCity;

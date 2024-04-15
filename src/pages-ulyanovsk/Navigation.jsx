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
        <header className='header container-fluid'>
          <Navbar expand="lg" sticky="top">
            <Navbar.Brand className='logo' as={Link} to="/">
                <img className="brand" src={Logo} alt="Logo" />
            </Navbar.Brand>
            <div className='container-fluid'>
                <Nav className="mx-auto mt-xxl-2 justify-content-center">
                  <Nav.Link as={Link} to="/" className="nav-link-city px-4">
                  <div className="blend-container">
                    <svg width="73" height="27" viewBox="0 0 73 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.3799 2.72998H9.91992V6.82998L16.9599 2.76998C16.7699 2.76998 16.5899 2.73998 16.3899 2.73998L16.3799 2.72998Z" fill="#1D1D1B"/>
                      <path d="M13.5699 21.93V21.54L9.91992 19.43V25.13H16.7999C17.7399 25.13 18.5599 25.02 19.2899 24.85L14.2399 21.93H13.5699Z" fill="#1D1D1B"/>
                      <path d="M30.0699 2.72998L25.1099 25.13H28.5699L29.4699 20.78H35.3899L36.2899 25.13H40.0299L35.0099 2.72998H30.0799H30.0699ZM30.1299 17.61L32.3999 6.53998L34.6999 17.61H30.1199H30.1299Z" fill="#1D1D1B"/>
                      <path d="M23 21.45C23.21 20.75 23.33 19.96 23.33 19.05V18.6C23.33 17.75 23.21 17.01 23 16.35V21.45Z" fill="#1D1D1B"/>
                      <path d="M48.5301 2.40997C46.4801 2.40997 44.8901 2.95997 43.7601 4.06997C42.6501 5.15997 42.1001 6.71997 42.1001 8.73997V19.11C42.1001 21.14 42.6501 22.7 43.7601 23.81C44.8901 24.9 46.4801 25.44 48.5301 25.44C50.5801 25.44 52.1901 24.9 53.3001 23.81C54.4101 22.7 54.9601 21.13 54.9601 19.11V16.87H51.5001V19.24C51.5001 20.24 51.2401 21.01 50.7301 21.54C50.2201 22.07 49.5001 22.34 48.5901 22.34C47.6801 22.34 46.9901 22.07 46.4801 21.54C45.9901 21.01 45.7401 20.24 45.7401 19.24V8.61997C45.7401 7.61997 45.9901 6.84997 46.4801 6.31997C46.9901 5.78997 47.7001 5.51997 48.5901 5.51997C49.4801 5.51997 50.2201 5.78997 50.7301 6.31997C51.2401 6.84997 51.5001 7.61997 51.5001 8.61997V10.35H54.9601V8.74997C54.9601 6.71997 54.4101 5.16997 53.3001 4.07997C52.1901 2.96997 50.6001 2.41997 48.5301 2.41997V2.40997Z" fill="#1D1D1B"/>
                      <path d="M66.6499 11.11L72.2499 2.72998H68.5099L61.7599 12.84V2.72998H58.1099V25.13H61.7599V17.96L64.1599 14.47L68.4399 25.13H72.3499L66.6499 11.11Z" fill="#1D1D1B"/>
                      <path d="M22.88 8.26V8.68C22.88 11.05 21.87 12.57 19.84 13.26V13.36C21.47 13.82 22.51 14.83 23 16.36V1C23 0.230003 22.17 -0.249997 21.5 0.130003L16.96 2.75C20.89 2.92 22.88 4.74 22.88 8.25V8.26Z" fill="#1D1D1B"/>
                      <path d="M0.500059 12.26C-0.169941 12.64 -0.169941 13.61 0.500059 13.99L9.92006 19.43V6.82001L0.500059 12.26Z" fill="#1D1D1B"/>
                      <path d="M16.7998 21.93C17.8198 21.93 18.5598 21.71 19.0098 21.26C19.4598 20.81 19.6798 20.08 19.6798 19.05V18.44C19.6798 17.27 19.4098 16.43 18.8798 15.94C18.3498 15.45 17.4198 15.2 16.0998 15.2H13.5698V21.53L14.2398 21.92H16.7998V21.93Z" fill="#1D1D1B"/>
                      <path d="M19.29 24.84L21.5 26.12C22.17 26.5 23 26.02 23 25.25V21.45C22.74 22.35 22.33 23.09 21.73 23.65C21.12 24.21 20.29 24.6 19.29 24.84Z" fill="#1D1D1B"/>
                      <path d="M16.2898 5.92999H13.5698V12.01H15.8698C17.0398 12.01 17.8998 11.79 18.4298 11.34C18.9598 10.87 19.2298 10.13 19.2298 9.12999V8.70999C19.2298 7.72999 18.9998 7.01999 18.5298 6.59999C18.0798 6.14999 17.3398 5.92999 16.2898 5.92999Z" fill="#1D1D1B"/>
                      <defs>
                      <clipPath id="clip0_374_152">
                      <rect width="72.35" height="26.25" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </div>
                  </Nav.Link>
                </Nav>
                <Nav className="ml-lg-auto mt-xxl-2">
                  <div className="LocalTime-cities nav-link-city px-4">
                    11:21 PM Ulyanovsk, Russia
                  </div>
                </Nav>
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
            <div className='col-xl-6'>
            </div>
            <div className='col-xl-6'>
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

import {
 Nav, Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/лого.png';
import Slide1 from '../assets/1slide.png';
import Slide2 from '../assets/2slide.png';
import './Navigation.css';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
      <>
        <header className='header container-fluid'>
          <Navbar expand="lg" sticky="top">
            <Navbar.Brand onClick={() => scrollToSection('main')} className='logo' as={Link} to="MainPage">
                <img className="brand" src={Logo} alt="Logo" />
            </Navbar.Brand>
            <div className='container-fluid'>
              <Navbar.Toggle aria-controls="navbarResponsive" className='' />
              <Navbar.Collapse id="navbarResponsive">
                <Nav className="mx-auto mt-xxl-2 justify-content-center">
                  <Nav.Link onClick={() => scrollToSection('main')} className="nav-link px-4">
                    HOME
                  </Nav.Link>
                  <Nav.Link onClick={() => scrollToSection('about')} className="nav-link px-4">
                    ABOUT
                  </Nav.Link>
                  <Nav.Link onClick={() => scrollToSection('start')} className="nav-link px-4">
                    START
                  </Nav.Link>
                  <Nav.Link onClick={() => scrollToSection('activities')} className="nav-link px-4">
                    ACTIVITIES
                  </Nav.Link>
                  <Nav.Link onClick={() => scrollToSection('contacts')} className="nav-link px-4">
                    CONTACTS
                  </Nav.Link>
                </Nav>
                <Nav className="ml-lg-auto mt-xxl-2">
                  <div className="LocalTime nav-link px-4">
                    11:21 PM Moscow, Russia
                  </div>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </header>
        <div id='main' className='container-fluid firstBlock'>
          <div className='row'>
            <div className='col-xxl-12'>
              <div className="LocalTime2 nav-link px-4">
                11:21 PM Moscow, Russia
              </div>
              <div id="carouselExampleFade" className="carousel slide ">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img src={Slide1} className="d-block w-100 slyde-photo" alt="..."></img>
                  </div>
                  <div className="carousel-item">
                      <img src={Slide2} className="d-block w-100 slyde-photo" alt="..."></img>
                  </div>
                  <div className="carousel-text">
                    <p className='text-paragraph'>Your free guide to beautiful Russia</p>
                    <a className='carousel-header1'>EXPLORE </a><a className='carousel-header2'>RUSSIA</a>
                  </div>
                  <button className="start" onClick={() => scrollToSection('start')} ><p className='start-text'>START</p></button>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Следующий</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Navigation;

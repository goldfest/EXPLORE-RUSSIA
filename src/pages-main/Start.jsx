/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Start.css';
import SaintPetersburgPhoto from '../assets/start-photo1.png';
import MoscowPhoto from '../assets/start-photo1.png';
import KazanPhoto from '../assets/start-photo1.png';
import NovgorodPhoto from '../assets/start-photo1.png';
import YaroslavlPhoto from '../assets/start-photo1.png';
import SuzdalPhoto from '../assets/start-photo1.png';
import VladimirPhoto from '../assets/start-photo1.png';
import IrkutskPhoto from '../assets/start-photo1.png';
import VolgogradPhoto from '../assets/start-photo1.png';
import SochiPhoto from '../assets/start-photo1.png';
import UluanovskPhoto from '../assets/start-photo1.png';

const Start = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
    const [hoveredCity, setHoveredCity] = useState(null);
    return (
        <div id="start" className='starts'>
            <div className='container-fluid start-block'>
                <p className='title-par'>
                    <a className='start-title'>Start Your Journey Today</a>
                </p>
                <div className='row start-row'>
                    <div className='col-xl-5 col-sm-11'>
                            <p className='start-paragraph1'>
                            Ready to begin your virtual adventure? Dive into the
                            wonders of Russia with Explore Russia as your guide.
                            Whether you're exploring the iconic sights of Moscow
                            and St. Petersburg or venturing off the beaten path
                            to remote villages and pristine landscapes,
                            let us be your companion on this unforgettable
                            journey. Welcome to Explore Russia – where every
                            discovery is an adventure.
                            </p>
                    </div>
                </div>
                <p className='start-paragraph2'>
                    <a className='start-go1'>Click on the city name to </a>
                    <a className='start-go2'>GO</a>
                </p>
                <div className='row start-row start-row2'>
                    <div className='col-xl-1 col-lg-2 col-md-0 col-lg-0'>
                            <p className='start-paragraph3'>
                            Our comprehensive guides, curated itineraries,
                            and insider tips will help you plan
                            the perfect adventure, whether you're exploring
                            from the comfort of your home or venturing out into the world.
                            </p>
                    </div>
                    <div className='col-xl-5 col-md-5 col-sm-12'>
                        <div className='city city1' >
                            <Link as={Link} to={'/SaintPetersburg'} onClick={scrollToTop}>
                                <a className='start-cities' onMouseEnter={() => setHoveredCity('SAINT PETERSBURG')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>SAINT PETERSBURG</span></a>
                            </Link>
                        </div>
                        <div className='city'>
                            <Link as={Link} to={'/Moscow'} onClick={scrollToTop}>
                                <a className='start-cities' onMouseEnter={() => setHoveredCity('MOSCOW')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>MOSCOW</span></a>
                            </Link>
                        </div>
                        <div className='city'>
                            <Link as={Link} to={'/Kazan'} onClick={scrollToTop}>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('KAZAN')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>KAZAN</span></a>
                            </Link>
                        </div>
                        <div className='city'>
                            <Link as={Link} to={'/Veliky-Novgorod'} onClick={scrollToTop}>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('VELIKY NOVGOROD')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>VELIKY NOVGOROD</span></a>
                            </Link>
                        </div>
                        <div className='city'>
                            <Link as={Link} to={'/Yaroslavl'} onClick={scrollToTop}>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('YAROSLAVL')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>YAROSLAVL</span></a>
                            </Link>
                        </div>
                        <div className='city'>
                            <Link as={Link} to={'/Suzdal'} onClick={scrollToTop}>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('SUZDAL')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>SUZDAL</span></a>
                            </Link>
                        </div>
                        <div className='city'>
                            <Link as={Link} to={'/Vladimir'} onClick={scrollToTop}>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('VLADIMIR')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>VLADIMIR</span></a>
                            </Link>
                        </div>
                        <div className='city'>
                            <Link as={Link} to={'/Irkutsk'} onClick={scrollToTop}>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('IRKUTSK')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>IRKUTSK</span></a>
                            </Link>
                        </div>
                        <div className='city'>
                            <Link as={Link} to={'/Volgograd'} onClick={scrollToTop}>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('VOLGOGRAD')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>VOLGOGRAD</span></a>
                            </Link>
                        </div>
                        <div className='city'>
                            <Link as={Link} to={'/Sochi'} onClick={scrollToTop}>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('SOCHI')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>SOCHI</span></a>
                            </Link>
                        </div>
                        <div className='city'>
                            <Link as={Link} to={'/Ulyanovsk'} onClick={scrollToTop}>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('ULYANOVSK')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>ULYANOVSK</span></a>
                            </Link>
                        </div>
                    </div>
                    <div className='col-xl-6 col-md-5 col-sm-0 photos'>
                        <div className='city-photo' >
                            <img src={SaintPetersburgPhoto} className={`city-img-hover ${hoveredCity === 'SAINT PETERSBURG' ? 'visible' : ''}`} alt="Saint Petersburg" />
                        </div>
                        <div className='city-photo'>
                            <img src={MoscowPhoto} className={`city-img-hover ${hoveredCity === 'MOSCOW' ? 'visible' : ''}`} alt="MOSCOW" />
                        </div>
                        <div className='city-photo'>
                            <img src={KazanPhoto} className={`city-img-hover ${hoveredCity === 'KAZAN' ? 'visible' : ''}`} alt="KAZAN" />
                        </div>
                        <div className='city-photo'>
                            <img src={NovgorodPhoto} className={`city-img-hover ${hoveredCity === 'VELIKY NOVGOROD' ? 'visible' : ''}`} alt="VELIKY NOVGOROD" />
                        </div>
                        <div className='city-photo'>
                            <img src={YaroslavlPhoto} className={`city-img-hover ${hoveredCity === 'YAROSLAVL' ? 'visible' : ''}`} alt="YAROSLAVL" />
                        </div>
                        <div className='city-photo'>
                            <img src={SuzdalPhoto} className={`city-img-hover ${hoveredCity === 'SUZDAL' ? 'visible' : ''}`} alt="SUZDAL" />
                        </div>
                        <div className='city-photo'>
                            <img src={VladimirPhoto} className={`city-img-hover ${hoveredCity === 'VLADIMIR' ? 'visible' : ''}`} alt="VLADIMIR" />
                        </div>
                        <div className='city-photo'>
                            <img src={IrkutskPhoto} className={`city-img-hover ${hoveredCity === 'IRKUTSK' ? 'visible' : ''}`} alt="IRKUTSK" />
                        </div>
                        <div className='city-photo'>
                            <img src={VolgogradPhoto} className={`city-img-hover ${hoveredCity === 'VOLGOGRAD' ? 'visible' : ''}`} alt="VOLGOGRAD" />
                        </div>
                        <div className='city-photo'>
                            <img src={SochiPhoto} className={`city-img-hover ${hoveredCity === 'SOCHI' ? 'visible' : ''}`} alt="SOCHI" />
                        </div>
                        <div className='city-photo'>
                            <img src={UluanovskPhoto} className={`city-img-hover ${hoveredCity === 'ULYANOVSK' ? 'visible' : ''}`} alt="ULYANOVSK" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

Start.propTypes = {
    routes: PropTypes.array,
};

export default Start;

/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import './Start.css';
import SaintPetersburgPhoto from '../assets/start-photo1.png';

const Start = () => {
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
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('SAINT PETERSBURG')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>SAINT PETERSBURG</span></a>
                        </div>
                        <div className='city'>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('MOSCOW')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>MOSCOW</span></a>
                        </div>
                        <div className='city'>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('KAZAN')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>KAZAN</span></a>
                        </div>
                        <div className='city'>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('VELIKY NOVGOROD')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>VELIKY NOVGOROD</span></a>
                        </div>
                        <div className='city'>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('YAROSLAVL')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>YAROSLAVL</span></a>
                        </div>
                        <div className='city'>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('SUZDAL')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>SUZDAL</span></a>
                        </div>
                        <div className='city'>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('VLADIMIR')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>VLADIMIR</span></a>
                        </div>
                        <div className='city'>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('IRKUTSK')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>IRKUTSK</span></a>
                        </div>
                        <div className='city'>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('VOLGOGRAD')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>VOLGOGRAD</span></a>
                        </div>
                        <div className='city'>
                            <a className='start-cities' onMouseEnter={() => setHoveredCity('SOCHI')} onMouseLeave={() => setHoveredCity(null)}><span className='span-color'>SOCHI</span></a>
                        </div>
                    </div>
                    <div className='col-xl-6 col-md-5 col-sm-0 photos'>
                        <div className='city-photo' >
                            <img src={SaintPetersburgPhoto} className={`city-img-hover ${hoveredCity === 'SAINT PETERSBURG' ? 'visible' : ''}`} alt="Saint Petersburg" />
                        </div>
                        <div className='city-photo'>
                            <img src={SaintPetersburgPhoto} className={`city-img-hover ${hoveredCity === 'MOSCOW' ? 'visible' : ''}`} alt="MOSCOW" />
                        </div>
                        <div className='city-photo'>
                            <img src={SaintPetersburgPhoto} className={`city-img-hover ${hoveredCity === 'KAZAN' ? 'visible' : ''}`} alt="KAZAN" />
                        </div>
                        <div className='city-photo'>
                            <img src={SaintPetersburgPhoto} className={`city-img-hover ${hoveredCity === 'VELIKY NOVGOROD' ? 'visible' : ''}`} alt="VELIKY NOVGOROD" />
                        </div>
                        <div className='city-photo'>
                            <img src={SaintPetersburgPhoto} className={`city-img-hover ${hoveredCity === 'YAROSLAVL' ? 'visible' : ''}`} alt="YAROSLAVL" />
                        </div>
                        <div className='city-photo'>
                            <img src={SaintPetersburgPhoto} className={`city-img-hover ${hoveredCity === 'SUZDAL' ? 'visible' : ''}`} alt="SUZDAL" />
                        </div>
                        <div className='city-photo'>
                            <img src={SaintPetersburgPhoto} className={`city-img-hover ${hoveredCity === 'VLADIMIR' ? 'visible' : ''}`} alt="VLADIMIR" />
                        </div>
                        <div className='city-photo'>
                            <img src={SaintPetersburgPhoto} className={`city-img-hover ${hoveredCity === 'IRKUTSK' ? 'visible' : ''}`} alt="IRKUTSK" />
                        </div>
                        <div className='city-photo'>
                            <img src={SaintPetersburgPhoto} className={`city-img-hover ${hoveredCity === 'VOLGOGRAD' ? 'visible' : ''}`} alt="VOLGOGRAD" />
                        </div>
                        <div className='city-photo'>
                            <img src={SaintPetersburgPhoto} className={`city-img-hover ${hoveredCity === 'SOCHI' ? 'visible' : ''}`} alt="SOCHI" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Start;

/* eslint-disable react/no-unescaped-entities */
import { Button } from 'react-bootstrap';
import './Attractions.css';
import Photo1 from '../assets/Attractions-photo1.png';
import Photo2 from '../assets/Attractions-photo2.png';
import Photo3 from '../assets/Attractions-photo3.png';
import Photo4 from '../assets/Attractions-photo4.png';
import Photo5 from '../assets/Attractions-photo5.png';
import Photo6 from '../assets/Attractions-photo6.png';
import Photo7 from '../assets/Attractions-photo7.png';
import Photo8 from '../assets/Attractions-photo8.png';

const Attractions = () => {
    return (
        <>
            <div id="attractions" className='attractions'>
                <div className="container-fluid attractions-block">
                    <p className='title-par-place1 text-center'>
                        <a className='attractions-title'>Look where else you can go</a>
                    </p>
                    <p className='title-par-place2 text-center'>
                        <a className='attractions-paragraph'>
                        Get to know museums that house relics of the past,
                        man-made galleries with priceless works, and historical
                        estates that tell the story of the lives of great
                        people of the past. Discover the city of Ulyanovsk
                        through its historical landmarks, each making its own
                        unique contribution to the cultural and historical richness of the region.
                        </a>
                    </p>
                    <div className='row row-attractions mb-3'>
                        <div className='col-xl-3 col-lg-4 col-sm-6 mb-4'>

                            <div className="card card-attraction">
                                <img src={Photo1} className="card-img card-img-attraction" alt="..." />
                                <div className="card-body">
                                    <p className="card-text card-text-attraction">Monument to the letter "Y"</p>
                                    <Button variant="primary" type="submit" className='attraction-card-button'>
                                    Learn more
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-3 col-lg-4 col-sm-6'>
                            <div className="card card-attraction">
                                <img src={Photo2} className="card-img card-img-attraction" alt="..." />
                                <div className="card-body">
                                    <p className="card-text card-text-attraction">Monument to Dmitry Razumovsky</p>
                                    <Button variant="primary" type="submit" className='attraction-card-button'>
                                    Learn more
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-3 col-lg-4 col-sm-6'>
                            <div className="card card-attraction">
                                <img src={Photo3} className="card-img card-img-attraction" alt="..." />
                                <div className="card-body">
                                    <p className="card-text card-text-attraction">Monument to Bogdan Khitrovo</p>
                                    <Button variant="primary" type="submit" className='attraction-card-button'>
                                    Learn more
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-3 col-lg-4 col-sm-6'>
                            <div className="card card-attraction">
                                <img src={Photo4} className="card-img card-img-attraction" alt="..." />
                                <div className="card-body">
                                    <p className="card-text card-text-attraction">Monument to the letter "Y"</p>
                                    <Button variant="primary" type="submit" className='attraction-card-button'>
                                    Learn more
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-4 col-sm-6'>
                            <div className="card card-attraction">
                                <img src={Photo5} className="card-img card-img-attraction" alt="..." />
                                <div className="card-body">
                                    <p className="card-text card-text-attraction">Museum A.A. Plastova</p>
                                    <Button variant="primary" type="submit" className='attraction-card-button'>
                                    Learn more
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-4 col-sm-6'>
                            <div className="card card-attraction">
                                <img src={Photo6} className="card-img card-img-attraction" alt="..." />
                                <div className="card-body">
                                    <p className="card-text card-text-attraction">Memorial Museum</p>
                                    <Button variant="primary" type="submit" className='attraction-card-button'>
                                    Learn more
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-4 col-sm-6'>
                            <div className="card card-attraction">
                                <img src={Photo7} className="card-img card-img-attraction" alt="..." />
                                <div className="card-body">
                                    <p className="card-text card-text-attraction">Spaso-Voznesensky Cathedral</p>
                                    <Button variant="primary" type="submit" className='attraction-card-button'>
                                    Learn more
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 col-lg-4 col-sm-6'>
                            <div className="card card-attraction">
                                <img src={Photo8} className="card-img card-img-attraction" alt="..." />
                                <div className="card-body">
                                    <p className="card-text card-text-attraction">Water park "Ulet"</p>
                                    <Button variant="primary" type="submit" className='attraction-card-button'>
                                    Learn more
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className=' d-flex justify-content-center align-items-center'>
                            <Button variant="primary" type="submit" className='attraction-button'>
                            Load More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Attractions;

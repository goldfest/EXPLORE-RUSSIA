/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import './Places.css';
import Photo1 from '../assets/Places-photo1.png';
import Photo2 from '../assets/Places-photo2.png';
import Photo3 from '../assets/Places-photo3.png';
import Photo4 from '../assets/Places-photo4.png';
import Photo5 from '../assets/Place-photocard1.png';
import Photo6 from '../assets/Place-photocard2.png';

const Places = () => {
    return (
        <div id="places" className='places'>
            <div className='container-fluid place-block'>
                <p className='title-par-place1 text-center'>
                    <a className='place-title'>You should visit these places first</a>
                </p>
                <p className='title-par-place2 text-center'>
                    <a className='place-paragraph'>
                        There are many interesting places in Ulyanovsk that allow you to dive deeper
                        into the history of the city, each of which can tell its own unique
                        story and open unknown pages of the past.
                    </a>
                </p>
                <div className="container-places">
                    <div className="box">
                        <img src={Photo1} />
                        <p className='obvodka1'>
                            <a>Best-01</a>
                        </p>
                        <p className='obvodka2'>
                            <a>Memorial Museum of V.I. Lenin</a>
                        </p>
                        <p className='obvodka3'>
                            <a>Since Ulyanovsk is the birthplace of Vladimir Lenin,
                                a visit to this museum will provide a deeper understanding
                                of his life and the era in which he lived. The museum
                                is located in the house where Lenin spent his early years.
                            </a>
                        </p>
                    </div>
                    <div className="box">
                        <img src={Photo2} />
                        <p className='obvodka1'>
                            <a>Best-02</a>
                        </p>
                        <p className='obvodka2'>
                            <a>State Art Museum</a>
                        </p>
                        <p className='obvodka3'>
                            <a>This museum offers an extensive collection
                                of Russian and European art, providing an
                                opportunity to appreciate the cultural heritage of the region.
                            </a>
                        </p>
                    </div>
                    <div className="box">
                        <img src={Photo3} />
                        <p className='obvodka1'>
                            <a>Best-03</a>
                        </p>
                        <p className='obvodka2'>
                            <a>Civil Aviation Museum</a>
                        </p>
                        <p className='obvodka3'>
                            <a>Describes the history of aviation in Russia and
                                includes exhibits of various aircraft, as well
                                as interactive exhibits.
                            </a>
                        </p>
                    </div>
                    <div className="box">
                        <img src={Photo4} />
                        <p className='obvodka1'>
                            <a>Best-04</a>
                        </p>
                        <p className='obvodka2'>
                            <a>"Governor's" Palace</a>
                        </p>
                        <p className='obvodka3'>
                            <a>Currently, the "Governor's" Palace is the center of
                                cultural life in Ulyanovsk. Concerts, exhibitions,
                                literary evenings and other cultural events are regularly
                                held here, attracting both city residents and guests
                                from different parts of the world.
                            </a>
                        </p>
                    </div>
                </div>
                <div className="horizontal-line-place mb-5"></div>
                <p className='title-par-place1 text-center'>
                    <a className='place-title'>You should visit these places first</a>
                </p>
                <p className='title-par-place2 text-center'>
                    <a className='place-paragraph'>
                        There are many interesting places in Ulyanovsk that allow you to dive deeper
                        into the history of the city, each of which can tell its own unique
                        story and open unknown pages of the past.
                    </a>
                </p>
                <div className='row row-place'>
                        <div className='col-xl-7 col-lg-7 col-sm-12'>
                            <div className="card card-place">
                                <img src={Photo5} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <a className='city-activity'>Ulyanovsk</a>
                                    <button className="btn btn-tag btn-rounded btn-arrow1">
                                        &#8592;
                                    </button>
                                    <button className="btn btn-tag btn-rounded btn-arrow2">
                                        &#8594;
                                    </button>
                                    <div className='ticket-up'>
                                        <button className="btn btn-tag btn-rounded btn-ticket">
                                            Buy tickets
                                        </button>
                                    </div>
                                    <div className='animation-up'>
                                        <div className='name-activity-bottom'>
                                            <a className='name-activity'>International exhibition and forum "Russia"</a>
                                        </div>
                                        <a className='date-activity'>Friday, 10, 2024</a>
                                    </div>
                                </div>
                                <div className="popup">
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-5 col-lg-5 col-sm-12'>
                            <div className="card card-place">
                                <img src={Photo6} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <a className='city-activity'>Ulyanovsk</a>
                                    <button className="btn btn-tag btn-rounded btn-arrow1" >
                                        &#8592;
                                    </button>
                                    <button className="btn btn-tag btn-rounded btn-arrow2" >
                                        &#8594;
                                    </button>
                                    <div className='ticket-up'>
                                        <button className="btn btn-tag btn-rounded btn-ticket">
                                            Buy tickets
                                        </button>
                                    </div>
                                    <div className='animation-up'>
                                        <div className='name-activity-bottom'>
                                            <a className='name-activity'>Punk culture. King and the Clown</a>
                                        </div>
                                        <a className='date-activity'>13.03-26.04, 2024</a>
                                    </div>
                                </div>
                                <div className="popup">
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

Places.propTypes = {
    routes: PropTypes.array,
};

export default Places;

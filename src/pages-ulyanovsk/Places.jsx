/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import './Places.css';
import Photo1 from '../assets/Places-photo1.png';
import Photo2 from '../assets/Places-photo2.png';
import Photo3 from '../assets/Places-photo3.png';
import Photo4 from '../assets/Places-photo4.png';
import Photo5 from '../assets/Place-photocard1.png';
import Photo6 from '../assets/Place-photocard2.png';
import Photo1in6 from '../assets/photo-card6-1.jfif';
import Photo2in6 from '../assets/photo-card6-2.jfif';
import Photo1in7 from '../assets/photo-card7-1.jfif';
import Photo2in7 from '../assets/photo-card7-2.jfif';

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
                                    <button className="true-arrow btn-arrow1">
                                        <svg className='hov' width="60" height="40" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect className='str' x="1.00088" y="1" width="42.9073" height="22" rx="11" transform="matrix(1 0 0.000880529 1 0.0499007 0.0971683)" stroke="white" strokeWidth="2"/>
                                            <path d="M11.8073 11.3901C11.4171 11.7806 11.4177 12.4137 11.8085 12.8043L18.1781 19.1682C18.569 19.5588 19.2021 19.5588 19.5923 19.1682C19.9825 18.7777 19.9819 18.1445 19.5911 17.754L13.9292 12.0972L19.5811 6.44031C19.9713 6.04979 19.9707 5.41663 19.5799 5.0261C19.189 4.63558 18.5558 4.63558 18.1656 5.0261L11.8073 11.3901ZM32.5141 11.0972L12.5141 11.0972L12.5159 13.0972L32.5159 13.0972L32.5141 11.0972Z" fill="white"/>
                                        </svg>
                                    </button>
                                    <button className="true-arrow btn-arrow2">
                                        <svg className='hov' width="60" height="40" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect className='str' x="-1.00517" y="-0.995671" width="42.9073" height="22" rx="11" transform="matrix(-0.999991 0.00431519 -0.00517615 -0.999987 43.9845 22.7037)" stroke="white" strokeWidth="2"/>
                                            <path d="M34.1951 13.4486C34.5836 13.0563 34.5803 12.4232 34.1878 12.0344L27.7909 5.69794C27.3984 5.30911 26.7652 5.31184 26.3767 5.70405C25.9882 6.09625 25.9915 6.72941 26.3841 7.11824L32.0701 12.7506L26.4426 18.4318C26.0541 18.824 26.0574 19.4572 26.4499 19.846C26.8425 20.2348 27.4756 20.2321 27.8641 19.8399L34.1951 13.4486ZM13.4897 13.8308L33.4895 13.7445L33.4792 11.7445L13.4794 11.8308L13.4897 13.8308Z" fill="white"/>
                                        </svg>
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
                                    <div className='row'>
                                        <div className='col-xxl-6 col-xl-5'>
                                            <div className='cloud'>
                                                <p className='paragraph-activity'>
                                                CAGMO Orchestra presents the concert program
                                                “Soundtracksof Einaudi”, which will feature
                                                atmospheric compositions by the famous Italian
                                                composer Ludovico Einaudi. Bright melodies from
                                                popular films such as “1+1”, “Black Swan”,
                                                “This is England” and others await you. Einaudi's
                                                soulful music will add depth and emotion to your
                                                viewing experience of these films.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-xxl-6 col-xl-7 photos-activity'>
                                            <div className='photo-in-blur1'>
                                                <img src={Photo1in6} className='photo-activity'/>
                                            </div>
                                            <div className='photo-in-blur2'>
                                                <img src={Photo2in6} className='photo-activity'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-5 col-lg-5 col-sm-12'>
                            <div className="card card-place">
                                <img src={Photo6} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <a className='city-activity'>Ulyanovsk</a>
                                    <button className="true-arrow btn-arrow1">
                                        <svg className='hov' width="60" height="40" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect className='str' x="1.00088" y="1" width="42.9073" height="22" rx="11" transform="matrix(1 0 0.000880529 1 0.0499007 0.0971683)" stroke="white" strokeWidth="2"/>
                                            <path d="M11.8073 11.3901C11.4171 11.7806 11.4177 12.4137 11.8085 12.8043L18.1781 19.1682C18.569 19.5588 19.2021 19.5588 19.5923 19.1682C19.9825 18.7777 19.9819 18.1445 19.5911 17.754L13.9292 12.0972L19.5811 6.44031C19.9713 6.04979 19.9707 5.41663 19.5799 5.0261C19.189 4.63558 18.5558 4.63558 18.1656 5.0261L11.8073 11.3901ZM32.5141 11.0972L12.5141 11.0972L12.5159 13.0972L32.5159 13.0972L32.5141 11.0972Z" fill="white"/>
                                        </svg>
                                    </button>
                                    <button className="true-arrow btn-arrow2">
                                        <svg className='hov' width="60" height="40" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect className='str' x="-1.00517" y="-0.995671" width="42.9073" height="22" rx="11" transform="matrix(-0.999991 0.00431519 -0.00517615 -0.999987 43.9845 22.7037)" stroke="white" strokeWidth="2"/>
                                            <path d="M34.1951 13.4486C34.5836 13.0563 34.5803 12.4232 34.1878 12.0344L27.7909 5.69794C27.3984 5.30911 26.7652 5.31184 26.3767 5.70405C25.9882 6.09625 25.9915 6.72941 26.3841 7.11824L32.0701 12.7506L26.4426 18.4318C26.0541 18.824 26.0574 19.4572 26.4499 19.846C26.8425 20.2348 27.4756 20.2321 27.8641 19.8399L34.1951 13.4486ZM13.4897 13.8308L33.4895 13.7445L33.4792 11.7445L13.4794 11.8308L13.4897 13.8308Z" fill="white"/>
                                        </svg>
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
                                    <div className='row'>
                                        <div className='col-12 text-center photos-activity'>
                                            <div className='photo-in-blur1-mini'>
                                                <img src={Photo1in7} className='photo-activity'/>
                                            </div>
                                            <div className='photo-in-blur2-mini'>
                                                <img src={Photo2in7} className='photo-activity'/>
                                            </div>
                                        </div>
                                    </div>
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

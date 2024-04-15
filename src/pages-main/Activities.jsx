/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import './Activities.css';
import Photo1 from '../assets/photo-card1.png';
import Photo1in1 from '../assets/photo-card1-1.png';
import Photo2in1 from '../assets/photo-card1-2.png';
import Photo2 from '../assets/photo-card2.png';
import Photo3 from '../assets/photo-card3.png';
import Photo4 from '../assets/photo-card4.png';

const About = () => {
    const [offset, setOffset] = useState(0);
    const buttons = [
      'Today',
      'Tomorrow',
      'Saint Petersburg',
      'Moscow',
      'Kazan',
      'Veliky Novgorod',
      'Yaroslavl',
      'Suzdal',
      'Vladimir',
      'Irkutsk',
      'Volgograd',
      'Sochi',
    ];

    const handleMoveLeft = () => {
      setOffset(Math.max(offset - 1, 0));
    };

    const calculateVisibleButtons = () => {
        if (window.matchMedia('(max-width: 900px)').matches) {
            return 12;
        // eslint-disable-next-line no-else-return
        } else if (window.matchMedia('(max-width: 991px)').matches) {
        return 4;
        } else if (window.matchMedia('(max-width: 1175px)').matches) {
          return 3;
        } else if (window.matchMedia('(max-width: 1231px)').matches) {
          return 4;
        } else if (window.matchMedia('(max-width: 1410px)').matches) {
          return 5;
        } else if (window.matchMedia('(max-width: 1550px)').matches) {
          return 6;
        } else if (window.matchMedia('(max-width: 1716px)').matches) {
            return 7;
        } else if (window.matchMedia('(max-width: 1876px)').matches) {
            return 8;
        } else {
          return 9; // Для экранов более 1876px
        }
      };

    const [visibleButtons, setVisibleButtons] = useState(calculateVisibleButtons());

    useEffect(() => {
        function handleResize() {
            setVisibleButtons(calculateVisibleButtons());
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleMoveRight = () => {
        setOffset(Math.min(offset + 1, buttons.length - visibleButtons));
    };

    return (
        <>
            <div id="activities" className='activities'>
                <div className="container-fluid activities-block">
                    <div className='row row-activities'>
                        <div className='col-xl-2 col-lg-3 col-md-12 col-sm-12'>
                            <p className='activities-title'>ACTIVITIES</p>
                        </div>
                        <div className='col-xl-8 col-lg-7 col-md-9 col-sm-12 buttons'>
                            <div className="justify-content-start text-start filt-activity">
                                <a className="btn btn-tag btn-rounded btn-all" >
                                    All
                                </a>
                                {buttons.slice(offset, offset + visibleButtons)
                                .map((button, index) => (
                                <a key={index} className="btn btn-tag btn-rounded" >
                                    {button}
                                </a>
                                ))}
                            </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-3 col-sm-0 buttons2'>
                            {offset > -1 && (
                                <button className="btn btn-tag btn-rounded btn-arrow" onClick={handleMoveLeft}>
                                    &#8592;
                                </button>
                                )}
                                {offset < buttons.length && (
                                <button className="btn btn-tag btn-rounded btn-arrow" onClick={handleMoveRight}>
                                     &#8594;
                                </button>
                            )}
                        </div>
                    </div>
                    <div className='row row-activities'>
                        <div className='col-xl-7 col-lg-7 col-sm-12'>
                            <div className="card">
                                <img src={Photo1} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <a className='city-activity'>Moscow</a>
                                    <button className="btn btn-tag btn-rounded btn-arrow1" onClick={handleMoveLeft}>
                                        &#8592;
                                    </button>
                                    <button className="btn btn-tag btn-rounded btn-arrow2" onClick={handleMoveRight}>
                                        &#8594;
                                    </button>
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
                                                    A unique and largest event in Russia
                                                    is currently taking place on the
                                                    territory of VDNKh in Moscow, attracting
                                                    thousands of visitors from all over
                                                    the country and abroad. This exhibition
                                                    is a shining example of the combination
                                                    of scientific achievements, cultural
                                                    traditions and advanced technologies,
                                                    presenting the latest innovations in
                                                    various industries - from aerospace
                                                    to information technology and robotics.
                                                    Particular attention is paid to artificial
                                                    intelligence, environmentally friendly
                                                    technologies and sustainable development.
                                                </p>
                                                <p className='paragraph-activity paragr-2'>
                                                    The exhibition hosts many conferences,
                                                    seminars and master classes from leading
                                                    experts and scientists, where participants
                                                    can discuss current issues, share experiences
                                                    and find potential partners for joint projects.
                                                    Also on the territory of VDNKh there are
                                                    interactive zones and expositions where you
                                                    can see innovative products and developments
                                                    with your own eyes.
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col-xxl-6 col-xl-7 photos-activity'>
                                            <div className='photo-in-blur1'>
                                                <img src={Photo1in1} className='photo-activity'/>
                                            </div>
                                            <div className='photo-in-blur2'>
                                                <img src={Photo2in1} className='photo-activity'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-5 col-lg-5 col-sm-12'>
                            <div className="card">
                                <img src={Photo2} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <a className='city-activity'>Saint Petersburg</a>
                                    <button className="btn btn-tag btn-rounded btn-arrow1" onClick={handleMoveLeft}>
                                        &#8592;
                                    </button>
                                    <button className="btn btn-tag btn-rounded btn-arrow2" onClick={handleMoveRight}>
                                        &#8594;
                                    </button>
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

                        <div className='col-xl-5 col-lg-5 col-sm-12'>
                            <div className="card">
                                <img src={Photo3} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <a className='city-activity'>Saint Petersburg</a>
                                    <button className="btn btn-tag btn-rounded btn-arrow1" onClick={handleMoveLeft}>
                                        &#8592;
                                    </button>
                                    <button className="btn btn-tag btn-rounded btn-arrow2" onClick={handleMoveRight}>
                                        &#8594;
                                    </button>
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

                        <div className='col-xl-7 col-lg-7 col-sm-12'>
                        <div className="card">
                                <img src={Photo4} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <a className='city-activity'>Kazan</a>
                                    <button className="btn btn-tag btn-rounded btn-arrow1" onClick={handleMoveLeft}>
                                        &#8592;
                                    </button>
                                    <button className="btn btn-tag btn-rounded btn-arrow2" onClick={handleMoveRight}>
                                        &#8594;
                                    </button>
                                    <div className='animation-up'>
                                        <div className='name-activity-bottom'>
                                            <a className='name-activity'>Digital art exhibition Nur Now</a>
                                        </div>
                                        <a className='date-activity'>Today - 23.05, 2024</a>
                                    </div>
                                </div>
                                <div className="popup">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default About;

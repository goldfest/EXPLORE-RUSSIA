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
        if (window.matchMedia('(max-width: 1200px)').matches) {
            return 12;
        // eslint-disable-next-line no-else-return
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
                        <div className='row'>
                            <div className='col-xl-1 col-lg-3 col-md-12 col-sm-12'>
                                <p className='activities-title'>ACTIVITIES</p>
                            </div>
                            <div className='align-items-center col-xl-11 col-lg-7 col-md-9 col-sm-12 buttons'>
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
                                    {offset > -1 && (
                                    <button className="true-arrow left-arrow" onClick={handleMoveLeft}>
                                        <svg width="45" height="35" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="1" y="1" width="43" height="33" rx="14" stroke="#9C0309" strokeWidth="2"/>
                                            <path d="M11.7929 16.7929C11.4024 17.1834 11.4024 17.8166 11.7929 18.2071L18.1569 24.5711C18.5474 24.9616 19.1805 24.9616 19.5711 24.5711C19.9616 24.1805 19.9616 23.5474 19.5711 23.1569L13.9142 17.5L19.5711 11.8431C19.9616 11.4526 19.9616 10.8195 19.5711 10.4289C19.1805 10.0384 18.5474 10.0384 18.1569 10.4289L11.7929 16.7929ZM32.5 16.5L12.5 16.5L12.5 18.5L32.5 18.5L32.5 16.5Z" fill="#9C0309"/>
                                        </svg>
                                    </button>
                                    )}
                                    {offset < buttons.length && (
                                    <button className="true-arrow" onClick={handleMoveRight}>
                                    <svg width="45" height="35" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="44" y="34" width="43" height="33" rx="14" transform="rotate(-180 44 34)" stroke="#9C0309" strokeWidth="2"/>
                                        <path d="M33.2071 18.2071C33.5976 17.8166 33.5976 17.1834 33.2071 16.7929L26.8431 10.4289C26.4526 10.0384 25.8195 10.0384 25.4289 10.4289C25.0384 10.8195 25.0384 11.4526 25.4289 11.8431L31.0858 17.5L25.4289 23.1569C25.0384 23.5474 25.0384 24.1805 25.4289 24.5711C25.8195 24.9616 26.4526 24.9616 26.8431 24.5711L33.2071 18.2071ZM12.5 18.5L32.5 18.5L32.5 16.5L12.5 16.5L12.5 18.5Z" fill="#9C0309"/>
                                    </svg>
                                    </button>
                                    )}
                            </div>
                        </div>
                    </div>
                    <div className='row row-activities'>
                        <div className='col-xl-7 col-lg-7 col-sm-12'>
                            <div className="card">
                                <img src={Photo1} className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <a className='city-activity'>Moscow</a>
                                    <button className="true-arrow btn-arrow1" onClick={handleMoveLeft}>
                                        <svg className='hov' width="60" height="40" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect className='str' x="1.00088" y="1" width="42.9073" height="22" rx="11" transform="matrix(1 0 0.000880529 1 0.0499007 0.0971683)" stroke="white" strokeWidth="2"/>
                                            <path d="M11.8073 11.3901C11.4171 11.7806 11.4177 12.4137 11.8085 12.8043L18.1781 19.1682C18.569 19.5588 19.2021 19.5588 19.5923 19.1682C19.9825 18.7777 19.9819 18.1445 19.5911 17.754L13.9292 12.0972L19.5811 6.44031C19.9713 6.04979 19.9707 5.41663 19.5799 5.0261C19.189 4.63558 18.5558 4.63558 18.1656 5.0261L11.8073 11.3901ZM32.5141 11.0972L12.5141 11.0972L12.5159 13.0972L32.5159 13.0972L32.5141 11.0972Z" fill="white"/>
                                        </svg>
                                    </button>
                                    <button className="true-arrow btn-arrow2" onClick={handleMoveRight}>
                                        <svg className='hov' width="60" height="40" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect className='str' x="-1.00517" y="-0.995671" width="42.9073" height="22" rx="11" transform="matrix(-0.999991 0.00431519 -0.00517615 -0.999987 43.9845 22.7037)" stroke="white" strokeWidth="2"/>
                                            <path d="M34.1951 13.4486C34.5836 13.0563 34.5803 12.4232 34.1878 12.0344L27.7909 5.69794C27.3984 5.30911 26.7652 5.31184 26.3767 5.70405C25.9882 6.09625 25.9915 6.72941 26.3841 7.11824L32.0701 12.7506L26.4426 18.4318C26.0541 18.824 26.0574 19.4572 26.4499 19.846C26.8425 20.2348 27.4756 20.2321 27.8641 19.8399L34.1951 13.4486ZM13.4897 13.8308L33.4895 13.7445L33.4792 11.7445L13.4794 11.8308L13.4897 13.8308Z" fill="white"/>
                                        </svg>
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
                                    <button className="true-arrow btn-arrow1" onClick={handleMoveLeft}>
                                        <svg className='hov' width="60" height="40" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect className='str' x="1.00088" y="1" width="42.9073" height="22" rx="11" transform="matrix(1 0 0.000880529 1 0.0499007 0.0971683)" stroke="white" strokeWidth="2"/>
                                            <path d="M11.8073 11.3901C11.4171 11.7806 11.4177 12.4137 11.8085 12.8043L18.1781 19.1682C18.569 19.5588 19.2021 19.5588 19.5923 19.1682C19.9825 18.7777 19.9819 18.1445 19.5911 17.754L13.9292 12.0972L19.5811 6.44031C19.9713 6.04979 19.9707 5.41663 19.5799 5.0261C19.189 4.63558 18.5558 4.63558 18.1656 5.0261L11.8073 11.3901ZM32.5141 11.0972L12.5141 11.0972L12.5159 13.0972L32.5159 13.0972L32.5141 11.0972Z" fill="white"/>
                                        </svg>
                                    </button>
                                    <button className="true-arrow btn-arrow2" onClick={handleMoveRight}>
                                        <svg className='hov' width="60" height="40" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect className='str' x="-1.00517" y="-0.995671" width="42.9073" height="22" rx="11" transform="matrix(-0.999991 0.00431519 -0.00517615 -0.999987 43.9845 22.7037)" stroke="white" strokeWidth="2"/>
                                            <path d="M34.1951 13.4486C34.5836 13.0563 34.5803 12.4232 34.1878 12.0344L27.7909 5.69794C27.3984 5.30911 26.7652 5.31184 26.3767 5.70405C25.9882 6.09625 25.9915 6.72941 26.3841 7.11824L32.0701 12.7506L26.4426 18.4318C26.0541 18.824 26.0574 19.4572 26.4499 19.846C26.8425 20.2348 27.4756 20.2321 27.8641 19.8399L34.1951 13.4486ZM13.4897 13.8308L33.4895 13.7445L33.4792 11.7445L13.4794 11.8308L13.4897 13.8308Z" fill="white"/>
                                        </svg>
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
                                    <button className="true-arrow btn-arrow1" onClick={handleMoveLeft}>
                                        <svg className='hov' width="60" height="40" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect className='str' x="1.00088" y="1" width="42.9073" height="22" rx="11" transform="matrix(1 0 0.000880529 1 0.0499007 0.0971683)" stroke="white" strokeWidth="2"/>
                                            <path d="M11.8073 11.3901C11.4171 11.7806 11.4177 12.4137 11.8085 12.8043L18.1781 19.1682C18.569 19.5588 19.2021 19.5588 19.5923 19.1682C19.9825 18.7777 19.9819 18.1445 19.5911 17.754L13.9292 12.0972L19.5811 6.44031C19.9713 6.04979 19.9707 5.41663 19.5799 5.0261C19.189 4.63558 18.5558 4.63558 18.1656 5.0261L11.8073 11.3901ZM32.5141 11.0972L12.5141 11.0972L12.5159 13.0972L32.5159 13.0972L32.5141 11.0972Z" fill="white"/>
                                        </svg>
                                    </button>
                                    <button className="true-arrow btn-arrow2" onClick={handleMoveRight}>
                                        <svg className='hov' width="60" height="40" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect className='str' x="-1.00517" y="-0.995671" width="42.9073" height="22" rx="11" transform="matrix(-0.999991 0.00431519 -0.00517615 -0.999987 43.9845 22.7037)" stroke="white" strokeWidth="2"/>
                                            <path d="M34.1951 13.4486C34.5836 13.0563 34.5803 12.4232 34.1878 12.0344L27.7909 5.69794C27.3984 5.30911 26.7652 5.31184 26.3767 5.70405C25.9882 6.09625 25.9915 6.72941 26.3841 7.11824L32.0701 12.7506L26.4426 18.4318C26.0541 18.824 26.0574 19.4572 26.4499 19.846C26.8425 20.2348 27.4756 20.2321 27.8641 19.8399L34.1951 13.4486ZM13.4897 13.8308L33.4895 13.7445L33.4792 11.7445L13.4794 11.8308L13.4897 13.8308Z" fill="white"/>
                                        </svg>
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
                                    <button className="true-arrow btn-arrow1" onClick={handleMoveLeft}>
                                        <svg className='hov' width="60" height="40" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect className='str' x="1.00088" y="1" width="42.9073" height="22" rx="11" transform="matrix(1 0 0.000880529 1 0.0499007 0.0971683)" stroke="white" strokeWidth="2"/>
                                            <path d="M11.8073 11.3901C11.4171 11.7806 11.4177 12.4137 11.8085 12.8043L18.1781 19.1682C18.569 19.5588 19.2021 19.5588 19.5923 19.1682C19.9825 18.7777 19.9819 18.1445 19.5911 17.754L13.9292 12.0972L19.5811 6.44031C19.9713 6.04979 19.9707 5.41663 19.5799 5.0261C19.189 4.63558 18.5558 4.63558 18.1656 5.0261L11.8073 11.3901ZM32.5141 11.0972L12.5141 11.0972L12.5159 13.0972L32.5159 13.0972L32.5141 11.0972Z" fill="white"/>
                                        </svg>
                                    </button>
                                    <button className="true-arrow btn-arrow2" onClick={handleMoveRight}>
                                        <svg className='hov' width="60" height="40" viewBox="0 0 46 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect className='str' x="-1.00517" y="-0.995671" width="42.9073" height="22" rx="11" transform="matrix(-0.999991 0.00431519 -0.00517615 -0.999987 43.9845 22.7037)" stroke="white" strokeWidth="2"/>
                                            <path d="M34.1951 13.4486C34.5836 13.0563 34.5803 12.4232 34.1878 12.0344L27.7909 5.69794C27.3984 5.30911 26.7652 5.31184 26.3767 5.70405C25.9882 6.09625 25.9915 6.72941 26.3841 7.11824L32.0701 12.7506L26.4426 18.4318C26.0541 18.824 26.0574 19.4572 26.4499 19.846C26.8425 20.2348 27.4756 20.2321 27.8641 19.8399L34.1951 13.4486ZM13.4897 13.8308L33.4895 13.7445L33.4792 11.7445L13.4794 11.8308L13.4897 13.8308Z" fill="white"/>
                                        </svg>
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

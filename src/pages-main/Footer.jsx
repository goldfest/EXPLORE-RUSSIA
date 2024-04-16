import { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const [moscowTime, setMoscowTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Europe/Moscow', hour: '2-digit', minute: '2-digit', hour12: true,
});
      setMoscowTime(currentTime);
    }, 1000); // Обновляем время каждую секунду

    return () => clearInterval(interval);
  }, []);
    return (
        <footer className="text-center footer">
            <section className="footer-eng">
                <div className="container-fluid text-start mt-3 pt-3">
                    <p>
                        <a className="text-reset text-footer1">EXplore russia</a>
                    </p>
                    <div className='blok1'>
                        <p>
                            <a className="text-reset text-footer2">Connect with fellow travelers, share your experiences, and glean insights from seasoned explorers in the Explore Russia community. Follow us on social media for the latest updates.</a>
                        </p>
                    </div>
                    <div className="row mt-3 row-bloks">

                        <div className="col-lg-3 col-xl-3 mx-auto mb-2 blok2">
                            <p>
                                <a onClick={() => scrollToSection('main')} className="text-reset text-footer3">HOME</a>
                            </p>
                            <p>
                                <a onClick={() => scrollToSection('about')} className="text-reset text-footer3">ABOUT</a>
                            </p>
                            <p>
                                <a onClick={() => scrollToSection('start')} className="text-reset text-footer3">START</a>
                            </p>
                            <p>
                                <a onClick={() => scrollToSection('activities')} className="text-reset text-footer3 txt">ACTIVITIES</a>
                            </p>
                            <p>
                                <a onClick={() => scrollToSection('contacts')} className="text-reset text-footer3 txt">CONTACTS</a>
                            </p>
                        </div>
                        <div className="col-lg-2 col-xl-3 mx-auto mb-2 blok3">
                            <p>
                                <a onClick={() => scrollToSection('activities')} className="text-reset text-footer3">ACTIVITIES</a>
                            </p>
                            <p>
                                <a onClick={() => scrollToSection('contacts')} className="text-reset text-footer3">CONTACTS</a>
                            </p>
                        </div>
                    </div>
                    <div className="blok-last1 ">
                        <p>
                            <a className="text-reset text-footer4">{moscowTime}</a>
                        </p>
                        <a className="text-reset text-footer4">Moscow, Russia</a>
                    </div>
                    <div className="blok-last2">
                        <p>
                            <a className="text-reset text-footer5">hepl@gmail.com</a>
                        </p>
                        <p>
                            <a className="text-reset text-footer5">Building 12, 3rd Yamskogo Polya Street</a>
                        </p>
                        <a className="text-reset text-footer5">Moscow, Russia</a>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;

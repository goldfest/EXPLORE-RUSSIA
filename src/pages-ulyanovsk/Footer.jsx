import './Footer.css';

const Footer = () => {
    return (
        <footer className="text-center footer-city">
            <section className="footer-eng-city">
                <div className="container-fluid text-center text-md-start mt-3 pt-3">
                    <p>
                        <a className="text-reset text-footer1">EXplore russia</a>
                    </p>
                    <div className='blok1'>
                        <p>
                            <a className="text-reset text-footer2">Connect with fellow travelers, share your experiences, and glean insights from seasoned explorers in the Explore Russia community. Follow us on social media for the latest updates.</a>
                        </p>
                    </div>
                    <div className="blok-last1">
                        <p>
                            <a className="text-reset text-footer4">11:21 PM</a>
                        </p>
                        <a className="text-reset text-footer4">Ulyanovsk, Russia</a>
                    </div>
                    <div className="blok-last2">
                        <p>
                            <a className="text-reset text-footer5">hepl@gmail.com</a>
                        </p>
                        <p>
                            <a className="text-reset text-footer5">Building 12, 3rd Yamskogo Polya Street</a>
                        </p>
                        <a className="text-reset text-footer5">Ulyanovsk, Russia</a>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;

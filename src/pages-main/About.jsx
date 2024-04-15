/* eslint-disable react/no-unescaped-entities */
import './About.css';
import Photo1 from '../assets/1photo-about.png';
import Photo2 from '../assets/2photo-about.png';
import Photo2V2 from '../assets/2photo-aboutV2.png';

const About = () => {
    return (
        <>
            <div id="about" className='about'>
                <div className="container-fluid about-block">
                    <div className='row row-block1'>
                        <div className='col-xl-3 col-lg-3 col-sm-1'>
                        </div>
                        <div className='col-xl-9 col-lg-9 col-sm-11'>
                            <p className='about-title'>ABOUT</p>
                            <p className='par1'>
                                <a className='about-paragraph1'>Welcome to Explore Russia, your gateway to discovering the rich tapestry of cultural heritage and natural wonders that Russia has to offer.</a>
                            </p>

                        </div>
                    </div>
                    <div className='row row-block2'>
                        <div className='col-xl-2 col-lg-2 col-sm-4'>
                            <p className='block-title1'>Our Mission</p>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-sm-8'>
                            <p className='par2'>
                                <a className='about-paragraph2'>At Explore Russia, our mission is to bring the magic of Russia to you, wherever you are in the world. Through stunning imagery, immersive experiences, and insightful commentary, we aim to ignite your sense of wonder and curiosity about this diverse and captivating country.</a>
                            </p>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-sm-6 '>
                           <img src={Photo1} className='photo-about1'/>
                        </div>
                    </div>
                    <hr className='horizontal-line'/>
                    <div className='row row-block3'>
                        <div className='col-xl-2 col-lg-2 col-sm-4'>
                            <p className='block-title2'>Discover Russia's Treasures</p>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-sm-8 mb-5'>
                            <p className='par3'>
                                <a className='about-paragraph3'>Russia boasts a wealth of iconic landmarks and hidden gems waiting to be uncovered. From the grandeur of Moscow's Red Square to the serene beauty of Lake Baikal, there's something here to enchant every traveler. Explore the majestic palaces of St. Petersburg, wander through the ancient streets of Kazan, or marvel at the architectural wonders of the Golden Ring cities. Whether you're drawn to history, art, nature, or cuisine, Russia has it all.</a>
                            </p>
                        </div>
                        <div className='col-xl-5 col-lg-5 col-sm-5'>
                            <img src={Photo2} className='photo-about2'/>
                            <img src={Photo2V2} className='photo-about2V2'/>
                        </div>
                    </div>
                </div>
                <div className="vertical-line"></div>
            </div>
        </>
    );
};
export default About;

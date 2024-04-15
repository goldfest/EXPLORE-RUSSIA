import PropTypes from 'prop-types';
import Footer from './pages-main/Footer.jsx';
import Navigation from './pages-main/Navigation.jsx';
import About from './pages-main/About.jsx';
import Start from './pages-main/Start.jsx';
import Activities from './pages-main/Activities.jsx';
import Contacts from './pages-main/Contacts.jsx';

const MainPage = () => {
  return (
    <>
      <Navigation fluid></Navigation>
      <About/>
      <Start />
      <Activities/>
      <Contacts />
      <Footer/>
    </>
  );
};

MainPage.propTypes = {
    routes: PropTypes.array,
  };

export default MainPage;

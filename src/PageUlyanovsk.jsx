import PropTypes from 'prop-types';
import Footer from './pages-ulyanovsk/Footer.jsx';
import Navigation from './pages-ulyanovsk/Navigation.jsx';
import Places from './pages-ulyanovsk/Places.jsx';
import Attractions from './pages-ulyanovsk/Attractions.jsx';
import Contacts from './pages-ulyanovsk/Contacts.jsx';

const PageSaintPetersburg = () => {
  return (
    <>
      <Navigation fluid ></Navigation>
      <Places />
      <Attractions/>
      <Contacts />
      <Footer/>
    </>
  );
};

PageSaintPetersburg.propTypes = {
  routes: PropTypes.array,
};

export default PageSaintPetersburg;

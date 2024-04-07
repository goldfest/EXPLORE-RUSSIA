import Footer from './components/footer/Footer.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import About from './pages/About.jsx';
import Start from './pages/Start.jsx';
import Activities from './pages/Activities.jsx';
import Contacts from './pages/Contacts.jsx';

const App = () => {
  return (
    <>
      <Navigation fluid></Navigation>
      <About/>
      <Start/>
      <Activities/>
      <Contacts />
      <Footer/>
    </>
  );
};

export default App;

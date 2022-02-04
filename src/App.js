import './App.css';
import AboutUs from './Component/AboutUs';
import ChooseUs from './Component/ChooseUs';
import Client from './Component/Client';
import CyberOperation from './Component/CyberOperation';
import EffectiveHome from './Component/EffectiveHome';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Logo from './Component/Logo';
// import Email from './Component/Email';
// import CyberSecurity from './Component/CyberSecurity';
// import NewsBlog from './Component/NewsBlog';

function App() {
  return (
    <>
      <Header />
      <AboutUs />
      <Logo />
      <CyberOperation />
      <ChooseUs />
      <EffectiveHome />
      <Client />
      <Footer />
      {/* <Email /> */}
      {/* <CyberSecurity /> */}
      {/* <NewsBlog /> */}
    </>
  );
}

export default App;

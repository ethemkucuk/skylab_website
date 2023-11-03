import './App.css';
import { SectionWrapper, Features, Download } from './components';
import styles from './styles/Global';
import assets from './assets';
import logoapp from './assets/logoapp_withoutbackground.png';

function App() {
  return (
    <>
      <SectionWrapper
        title='Designerio'
        description='Where Innovation Meets Imagination'
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
      />
      <SectionWrapper
        title='1. Redefine Design with Cutting-Edge Technology:'
        description='Designerio is a revolutionary startup project that leverages AI technology to bring designers and design clients together. It combines aesthetics and functionality to transform the design world.'
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title='2. Diverse Design Categories:'
        description='From fashion design to interior design, graphic design to web design, Design Marketplace brings together expert designers in a wide range of fields. Find the best professionals in the area you need.'
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title='3. Effective Communication and Collaboration:'
        description='The platform provides effective communication and collaboration opportunities between designers and clients. Share your ideas, shape your projects, and bring them to life.'
        mockupImg={assets.mockup}
        banner='banner02'
      />
      <SectionWrapper
        title='4. Security and Privacy Are Our Priorities:'
        description='User data and privacy are protected to the highest standards. Design Marketplace provides a secure and reliable environment.'
        mockupImg={assets.homeSec}
        reverse
      />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <img src={logoapp} alt='logo' />
      </div>

      <SectionWrapper
        title=" 'Reshaping the World of Design'
        Discover Design Marketplace and unlock the potential in your projects!"
        description=''
        mockupImg={assets.homePeop}
        reverse
      />
      <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Code to <span className='bold'>SkyLab</span>
        </p>
      </div>
    </>
  );
}

export default App;

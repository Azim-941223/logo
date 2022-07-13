import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import About from './components/About/About';
import Sign from './components/Sign/Sign';
import Ads from './components/Ads/Ads';
import Info from './components/Info/Info';

function App() {
  return (
    <div className='App'>
      <Header/>
      {/* <Info/> */}
       {/* <Ads/> */}
      {/* <Sign/> */}
      {/* <div className='container_info'>
        <h2>Последние объявления</h2>
        <div className='ads_content'>
          <MainContent/>
          <MainContent/>
          <MainContent/>
          <MainContent/>
          <MainContent/>
          <MainContent/>
          <MainContent/>
        </div>
        <About/>
      </div> */}
    </div>
  )
}

export default App;
import propic from '../assets/propic.jpg';
import Footer from '../components/Footer';
import NavBar from '../components/Nav';
import './App.css';

function App() {
  const aboutText = `Hello there, my name is Tadiwanashe Shangwa. Im a CS Student, based in Zimbabwe 🇿🇼 passionate about Data Science. `
  const nba_dash_link = "https://tadiwr-nba-dashboard-home--z5zmve.streamlit.app/"

  return (
    <div className="App">
      <NavBar/>
      <div className='details'>
          {/* Website Hero */}
          <img src={propic}  className="dp" alt="dp"/>

          <h1>About Me</h1>

          <div className='aboutTextWrap'>
            <p>{aboutText}</p>
          </div>

          <h1>My Projects</h1>
          <a className='link_button' href={nba_dash_link} >NBA Stats Dashboard 🏀📈</a>
          <a className='link_button' href='https://gituserquery.netlify.app/' >GitHub User Query</a>
          <a className='link_button' href='https://github.com/Tadiwr/CounterApp' >Counter App with Kotlin</a>
          <a className='link_button' href='https://github.com/Tadiwr/LandingPage' >Code for this Landing Page 😁</a>

          <h1>My Socials</h1>
          <a className='link_button' href='http://instagram.com/tadiwadev' > Instagram</a>
          <a className='link_button' href='http://github.com/Tadiwr' >Github </a>
          <a className='link_button' href='https://twitter.com/tadiwrr' >Twitter </a>


      </div>
      <Footer/>
    </div>
  );
}

export default App;

import propic from '../assets/propic.jpg';
import Footer from '../components/Footer';
import NavBar from '../components/Nav';
import './App.css';

function App() {
  const aboutText = `Hello there, my name is Tadiwa Shangwa. Im a Computer Science student in High School, based in Zimbabwe 🇿🇼 passionate about Mobile Developement and Software Engineering. Check out my socials links and projects down below ⬇️⬇️ `

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

          <h1>My Socials</h1>
          <a className='socials' href='http://instagram.com/tadiwadev' > Instagram</a>
          <a className='socials' href='http://github.com/Tadiwr' >Github </a>
          <a className='socials' href='https://twitter.com/tadiwrr' >Twitter </a>

          <h1>My Projects</h1>
          <a className='socials' href='https://gituserquery.netlify.app/' >GitHub User Query</a>
          <a className='socials' href='https://github.com/Tadiwr/CounterApp' >Counter App with Kotlin</a>
          <a className='socials' href='https://github.com/Tadiwr/LandingPage' >Code for this Landing Page 😁</a>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

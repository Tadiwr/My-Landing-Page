import dp from './dp.jpg';
import './App.css';

function App() {

  const heading = `<Hello World!/>`

  return (
    <div className="App">

      <div className='nav'>
          <h1 className='nav-logo'>Tadiwanashe Shangwa</h1>
      </div>

      <div className='details'>
          <h1 className='nav-logo'>{heading}</h1>
          <img src={dp}  className="dp" alt="dp"/>

          {/* TODO:Add Follower Numbers */}
          <p>Hello there, my name is Tadiwa. Im a Computer Science student in High School, based in Zimbabwe 🇿🇼 passionate about Web Development and Software Engineering. Check out my socials links and projects down below ⬇️⬇️ </p>
          <a className='socials' href='http://instagram.com/tadiwadev' > Instagram</a>
          <a className='socials' href='http://github.com/Tadiwr' >Github</a>
          {/* <a className='socials' href='https://rand-activity.netlify.app/' >Random Activity Generator</a> */}
      </div>
    </div>
  );
}

export default App;

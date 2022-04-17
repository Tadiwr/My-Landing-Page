import dp from './dp.jpg';
import './App.css';

function App() {

  const heading = `Hello World,
  \n <I'm>Tadiwa</I'm> `

  return (
    <div className="App">

      <div className='nav'>
          <h1 className='nav-logo'>Tadiwanashe Shangwa</h1>
      </div>

      <div className='details'>
          <h1 className='nav-logo'>{heading}</h1>
          <img src={dp}  className="dp" alt="dp"/>

          <p>Hello there, my name is Tadiwa. Im a Computer Science student in High School passionate about Web Development and Software Engineering. Check out my socials links down below ⬇️⬇️ </p>
          <a className='socials' href='http://instagram.com/tadiwadev' > Instagram</a>
          <a className='socials' href='http://github.com/Tadiwr' >Github</a>
      </div>
    </div>
  );
}

export default App;

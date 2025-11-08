import Hyperspeed from './Hyperspeed/Hyperspeed';
import './App.css';
import Navbar from './Navbar.jsx';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <p className='hero'>
          Welcome to Infinimod v1.2!
        </p>
        <Hyperspeed />
      </header>
    </div>
  );
}

export default Home;

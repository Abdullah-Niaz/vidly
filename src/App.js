import './App.css';
import react from 'react'
import Movies from './components/movies';
function App() {

  return (
    <react.Fragment>
      <div className="header bg-black">
        <h1 className='text-white text-center'>MOVIES APP</h1>
      </div>
      <div className="container">
        <Movies />
      </div>
      <div className="header bg-black">
        <h6 className='text-white text-center'>Developed By Abdullah_Niaz</h6>
      </div>

    </react.Fragment>

  );
}

export default App;

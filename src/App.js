import './App.css';
import react from 'react'
import Movies from './components/movies';
function App() {

  return (
    <react.Fragment>
      <div className="header">
        <h1 className="header-title">MOVIES APP</h1>
      </div>
      <div className="container">
        <Movies />
      </div>
      <div className="footer">
        <h6 className="footer-text">Developed By Abdullah_Niaz</h6>
      </div>

    </react.Fragment>

  );
}

export default App;

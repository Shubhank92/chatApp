// import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar'
// import Header from './components/header'
import MainContainer from './components/messageList'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContainer />
    </div>
  );
}

export default App;

import React from 'react';
import{BrowserRouter, Route,Routes,Switch,} from 'react-router-dom'
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Moviapi from './common/apis/Moviapi';
import Moviedetails from './components/Moviedeatails/Moviedetails';
import Pagenotfound from './components/Pagenotfound/Pagenotfound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className='container'>
        
      <Routes>
     
        <Route path='/'exact Component={Home}/>
        <Route path='/movie/:imdbID' Component={Moviedetails}/>
        <Route  Component={Pagenotfound}/>
        </Routes>
        </div>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

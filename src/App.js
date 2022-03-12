import React,{useState} from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Movie from './Components/Movie';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props)
    this.props={
   
    }
  }
 
  render(){
    
    return(
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/movie/:id" element={<Movie/>}/>
          <Route path="*" element = {<Home/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;

import React from 'react';
//import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Interests from './components/Interests/Interests';
import Skills from './components/Skills/Skills';

function App() {
  return (<BrowserRouter>
   
   <div className="container">
   <Navbar /> 

    <Switch>
        <Route path="/" exact component={About} />
        <Route path="/home" component={About} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
        <Route path="/interests" component={Interests} />
      </Switch>
      </div>
      </BrowserRouter>
  );
}


const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}


export default App;

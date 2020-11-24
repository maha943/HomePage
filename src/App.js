import  React ,{Fragment} from "react";
import {Switch , Route} from "react-router-dom";
import "./components/Navbar";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact"
import Default from "./components/Default";


function App() {
  return (
    <Fragment>
      <Navbar/>

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/portfolio" component={Portfolio}/>
        <Route path="/service" component={Service}/>
        <Route path="/contact" component={Contact}/>

        <Route component={Default}/>

      </Switch>
      
       
        
    </Fragment>
  );
}

export default App;

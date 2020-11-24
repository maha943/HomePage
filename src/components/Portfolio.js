import React , {Component} from "react";
import "./Portfolio.css";
import Card from "./Card";

class Portfolio extends Component{
	render(){
		
		return (
            <div className="portfolio py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="portfolio-tittle text-center my-5">
                    <h1 className="text-capitalize">portfolio</h1>
                  </div>
                </div>
              </div>
              </div>
          
    <div className="container">
      <div className="row">
         <div className="col-md-4" >
             <Card/>
            
                </div>
         <div className="col-md-4" >
             <Card/>
                </div>
         <div className="col-md-4" >
             <Card/>
                </div>
                 
              
                 
                  </div>
                </div>
               

              </div>
             
          
              
             
      
         

			)
	}
}

export default Portfolio;
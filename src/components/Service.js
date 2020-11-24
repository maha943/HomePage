import React , {Component} from "react";
import "./Navbar.css";

class Service extends Component{
	render(){
        
        return (
           <div>
			   <section className="Service py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6 ">
          <div className="service-img mt-5 mr-5">
            <img src="./images/Rectangle 31.jpg" alt="xcode" className="img-fluid"/>

          </div>
        </div>
        <div className="col-md-6">
          <div className="service-caption  mt-5">
            <h1>our services</h1>
          </div>
            <div className="service-icons  mt-5">
              <div className="icons">
             <img className="mt-4" src="./images/icon_1.svg" alt=""/>
              <h4 className="d-inline-block">Website development</h4>
            </div>
            <div className="icons">
             
              <img src="./images/icon_2.svg" alt=""/>
              
              
              
              <h4 className="d-inline-block">Mobile development</h4>
            </div>
            <div className="icons">
              <img src="./images/icon_3.svg" alt=""/>
              
              <h4 className="d-inline-block">UI/UX design </h4>
            </div>
            
            </div>
           
            

          
        </div>
      </div>
    </div>

  </section>
  
 			  
           
           </div>
			)
	}
}

export default Service;
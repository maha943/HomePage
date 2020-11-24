import React  from "react";
import {Link} from "react-router-dom";
import "./Portfolio.css";
export default function Card (){
    return(
        <>
        <div>
        <div className="card  mt-5   w-100"  >
          <div className="  py-4 pl-2 pr-1 " >
            <div className=" img-background rounded p-2" id="card-img">
             <img src="../images/img1.jpg" className="card-img-top " alt="card"/>
              <div className="img-overlay"> 
                <ul className="d-flex float-right m-2"  >
                 
                  <li className="p-2">
                    home
                  </li>
                
                  <li className="p-2">
                    app
                  </li>
                   
                  <li className="p-2">
                   website
                  </li>
                 
                  <li className="p-2">
                   contact
                  </li>
                </ul>
                               
            </div>
       
          </div>
          
          <div className="card-body">
            <h5 className="card-title" >name of web </h5>
  
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           
          </div>
        </div>
        <div className="service-btn d-flex justify-content-center align-items-center bg-white mt-1 " >
        <Link  id="portfolioBtn" to="/portfolio" className="btn btn-primary project-btn mt-1 px-4">view all Project</Link>
  
        </div>
       
        </div>
        </div>
   </>
    )
}
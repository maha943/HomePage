import React , {Component} from "react";
import "./Navbar.css";

class Contact extends Component{
	render(){
        
        return (
           <>
		<section className="contacts my-5">

    <div className="container py-3">
    <div className="row">
    <div className="col-md-12">
    <div className="caption text-center m-auto pt-5">
        <h3>Contact Us</h3>
    </div>
    </div>
    </div>
    </div>


    <div className="container py-5">
    <div className="row justify-content-center">
    <div className="col-md-4 ">
    <div className="icons  text-center">
             <i className="fas fa-mobile-alt fa-3x" id="green"></i>
    <div className="mt-3">
               <h6 className="font-weight-bold ">Call Us On</h6>
               <p className=" ">01116232494</p>
    </div>
    </div>
    </div>


    <div className="col-md-4 ">
    <div className="icons  text-center">
            <i className="far fa-envelope fa-3x" id="green"></i>
    <div className="mt-3">
               <h6 className="font-weight-bold ">Email Us At</h6>
               <p className=" ">xcodeteam99@gmail.com</p>
     </div>
     </div>
    </div>


    <div className="col-md-4 ">
    <div className="icons  text-center">
            <i className="fas fa-map-marker-alt fa-3x" id="green"></i>
    <div className= "mt-3">
               <h6 className="font-weight-bold ">Visit Office</h6>
               <p>Visit Office</p>
    </div>
    </div>
    </div>
    </div>
    </div>


<div className="container py-5">
      <form>
        <div className="form-row">
        <div className="form-group col-md-6">
        
          <input  type="text" className="form-control input p-2 " placeholder="Name*"  />
        </div>
        <div className="form-group col-md-6">
      
            <input type="email" className="form-control input p-2" placeholder="Your Email*" />
        </div>
        </div>
        <div className="form-group">
          <input type="text" className="form-control input p-2"  placeholder="Your Subject..."/>
        </div>
        <div className="form-group">
          <textarea className="form-control w-100 input" placeholder="Your message...." rows="4"></textarea>
        </div>
      
        <button type="submit" className="btn  p-2 float-right send-btn">Send message</button>
      </form>
    </div>
  </section>
	</>		   
           
         
			)
	}
}

export default Contact;
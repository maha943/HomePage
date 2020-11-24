import React , {Component} from "react";
import "./Navbar.css";
import Portfolio from "./Portfolio";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import "../bootstrap/jquery/jquery.min.js";
import $ from "jquery";


class Home extends Component{
  handleScroll = () => {
    let aScroll = $(".navChange").offset().top;
console.log(aScroll)
$(window).scroll(function(){
    let wScroll =$(window).scrollTop();
    if(wScroll > aScroll){
        $(".nav").css("backgroundColor","#DEDFDF")
        $("a").css("color","#000")
        $("#btn-scroll").fadeIn(700)
    }
    else{
        $(".nav").css("backgroundColor","transparent")
        $("a").css("color","#fff")
        $("#btn-scroll").fadeOut(700)
    }
})
$("#btn-scroll").click(function(){
    

    $("window,html").animate({scrollTop : '0'},2000)
});
  }

  componentDidMount (){this.handleScroll()};
	render(){
		return (
            <div className="home">
            
            <button className="btn  btn-dark"id="btn-scroll">
              <i className="far fa-arrow-alt-circle-up"></i>
            </button>
            
           
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="slider">
                    <div className="slider-img">
                    <img className="img-fluid img" src="./images/pexels-andrea-piacquadio-845451.jpg"  alt=""/>
                     <div className="img-overlay d-flex justify-content-center align-items-center ">
                     <div className="overlay-caption text-center ">
                     <h1 className="text-white">x-code</h1>
                      <h3 className="">Software Development Services</h3>
                      <button type="button" className="btn px-4 my-2">contact us</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="carousel-item">
                  <div className="slider">
                    <div className="slider-img">
                    <img className="img-fluid img" src="./images/pexels-andrea-piacquadio-845451.jpg"  alt=""/>
                    <div className="img-overlay d-flex justify-content-center align-items-center ">
                    <div className="overlay-caption text-center ">
                    <h1 className="text-white">x-code</h1>
                     <h3 className="">Software Development Services</h3>
                    <button type="button" className="btn px-4 my-2">contact us</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="carousel-item">
                  <div className="slider">
                    <div className="slider-img">
                      <img className="img-fluid img" src="./images/pexels-andrea-piacquadio-845451.jpg"  alt=""/>
                      <div className="img-overlay d-flex justify-content-center align-items-center ">
                        <div className="overlay-caption text-center ">
                          <h1 className="text-white">x-code</h1>
                          <h3 className="navChange">Software Development Services</h3>
                          <button type="button" className="btn px-4 my-2">contact us</button>
            
                        </div>
            
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
        
            </div>
            <Service/>
            <About/>
            <Portfolio/>
            <Contact/>
            </div>
			)
	}
}

export default Home;
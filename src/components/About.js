import React , {Component} from "react";

class About extends Component{
	render(){
        
        return (
           <div>
			   <section className="about py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="about-tittle text-center my-5">
          <h1>About us</h1>

          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="about-img">
            <img className="img-fluid" src="./images/x.png" alt=""/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-cap mt-5">
            <h4>Software Solutions For Business</h4>
            <div className="about-desc my-5">
              <p>We are one of the world’s leading software development companies. We </p>
              <p>help fortune 500s, startups and firms in between</p>
              <p>Through custom software we empower entrepreneurs, growth companies,</p>
                <p>enterprises and visionary firms to achieve greater profitability and efficiency</p>
            </div>
            <div className="about-button pt-5">
              <button type="button" className="btn px-5  mt-5" id="aboutBtn">More about us</button>
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

export default About;
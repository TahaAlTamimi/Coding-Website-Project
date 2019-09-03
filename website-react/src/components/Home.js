import React,{Component} from 'react';

class Home extends Component {
    state = {  }
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-2">
                        <h5>Asma</h5>
                        <p>Class B</p>
                    </div>
                    <div class="col-10">

                      <div>
                        <h4>HomeContainer</h4>
                        {/* Start slider Picture */}
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                          <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                          </ol>

                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img className="d-block w-100" src="./images/1" alt="First slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="./images/2"alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src="./images/3" alt="Third slide"/>
                            </div>
                          </div>
                          
                          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                          </a>
                          
                          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                          </a>
                      </div>
                      {/* End of Slider */}
                      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  </div>
                  
                  <div>
                    <h1>Materials</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                  </div>
              </div>
            </div>
            
        </div>
        );
    }
}

export default Home;
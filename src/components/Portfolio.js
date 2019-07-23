import React from 'react';


class Portfolio extends React.Component {
    render() {
      return (
      
        <section className="bg-light page-section" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <h3 className="section-subheading text-muted">Experience:</h3>
              </div>

              <div className="row">
                <div className="col-lg-12">
                <ul className="timeline">
                  <li>
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="img/calclosets.jpg" alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                      <h4>June 2015-Present</h4>
                      <h4 className="subheading">Plan Reviewer</h4>
                      </div>
                      <div className="timeline-body">
                      <p className="text-muted">Plan review for pre-production of custom built-in solutions.
                      Providing on-going training for designers.</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="img/plasp.jpg" alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                      <h4>May 2008-June 2015</h4>
                      <h4 className="subheading">Program Director</h4>
                      </div>
                      <div className="timeline-body">
                      <p className="text-muted">Managing before and after school full-day kindergarten programs. 
                      Implementing program planners. 
                      Training and managing staff. 
                      Ensuring each child’s well-being and enjoyment within the program.</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-image">
                      <img className="rounded-circle img-fluid" src="img/rexall.jpg" alt="" />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                      <h4>June 2003-Sept 2014</h4>
                      <h4 className="subheading">Keyholder</h4>
                      </div>
                      <div className="timeline-body">
                      <p className="text-muted">Providing exceptional customer service.
                      Advising customers on appropriate products for their needs.
                      Training new staff.
                      Managing product stock.
                      Merchandising for promotional events.</p>
                      </div>
                    </div>
                  </li>
                </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 col-sm-6 portfolio-item">
                  <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="" />
                  </a>
                  <div className="portfolio-caption">
                    <h4>Threads</h4>
                    <p className="text-muted">Illustration</p>
                  </div>
                </div>
                  <div className="col-md-4 col-sm-6 portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                      <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                          <i className="fas fa-plus fa-3x"></i>
                        </div>
                      </div>
                      <img className="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt="" />
                    </a>
                    <div className="portfolio-caption">
                      <h4>Explore</h4>
                      <p className="text-muted">Graphic Design</p>
                    </div>
                  </div>
                    <div className="col-md-4 col-sm-6 portfolio-item">
                      <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                        <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                            <i className="fas fa-plus fa-3x"></i>
                          </div>
                        </div>
                        <img className="img-fluid" src="img/portfolio/03-thumbnail.jpg" alt="" />
                      </a>
                      <div className="portfolio-caption">
                        <h4>Finish</h4>
                        <p className="text-muted">Identity</p>
                      </div>
                    </div>
                      <div className="col-md-4 col-sm-6 portfolio-item">
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                          <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                               <i className="fas fa-plus fa-3x"></i>
                            </div>
                          </div>
                          <img className="img-fluid" src="img/portfolio/04-thumbnail.jpg" alt="" />
                        </a>
                        <div className="portfolio-caption">
                          <h4>Lines</h4>
                          <p className="text-muted">Branding</p>
                        </div>
                      </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                          <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                            <div className="portfolio-hover">
                              <div className="portfolio-hover-content">
                                <i className="fas fa-plus fa-3x"></i>
                              </div>
                            </div>
                            <img className="img-fluid" src="img/portfolio/05-thumbnail.jpg" alt="" />
                          </a>
                          <div className="portfolio-caption">
                            <h4>Southwest</h4>
                            <p className="text-muted">Website Design</p>
                          </div>
                        </div>
                          <div className="col-md-4 col-sm-6 portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                              <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                  <i className="fas fa-plus fa-3x"></i>
                                </div>
                              </div>
                              <img className="img-fluid" src="img/portfolio/06-thumbnail.jpg" alt="" />
                            </a>
                              <div className="portfolio-caption">
                                <h4>Window</h4>
                                <p className="text-muted">Photography</p>
                              </div>
                          </div>
          </div>
        </div>
        </div>
    </section>
      );
    }
}

export default Portfolio;
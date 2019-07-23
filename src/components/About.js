import React from 'react';


class About extends React.Component {
    render() {
      return (
        <section className="page-section" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">About</h2>
                <h3 className="section-subheading text-muted">Experienced Design Consultant with a demonstrated history of working in the design industry. Skilled in AutoCAD, Budgeting, Microsoft Word, Sales, and Retail. Strong arts and design professional with a Diploma focused in Interior Decorating from Sheridan College.</h3>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src="/img/me.jpg" alt="" />
                  <h4>Mary Hrvatin</h4>
                  <p className="text-muted">Plan Reviewer and Prospective Front-End Developer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/mary-hrvatin-30293949/">
                    <i className="fab fa-linkedin-in"></i>
                    </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
}

export default About;
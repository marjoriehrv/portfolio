import React from 'react';

class Header extends React.Component {
    render() {
      return (
        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">Mary Hrvatin</div>
                <div className="intro-heading text-uppercase">Portfolio</div>
                <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">About Me</a>
            </div>
          </div>
        </header>
      );
    }
}

export default Header;
import React from 'react';

class Footer extends React.Component {
    render() {
      return (
        <footer className="footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <span className="copyright">Copyright &copy; Mary Hrvatin 2019</span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
            </div>
        </div>
    </div>
  </footer>
        );
    }
}

export default Footer;
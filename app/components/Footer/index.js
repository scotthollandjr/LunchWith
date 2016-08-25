import React from 'react';

class Footer extends React.Component {
    render() {
        return (
          <footer className="footer nav">
            <div className="container">
              <div className="nav-center">
                <a className="nav-item is-tab is-active">
                  <span className="icon is-large footer-icon">
                    <i className="fa fa-home"></i>
                  </span>
                </a>
                <a className="nav-item is-tab is-active">
                  <span className="icon is-large footer-icon">
                    <i className="fa fa-calendar-plus-o"></i>
                  </span>
                </a>
                <a className="nav-item is-tab is-active">
                  <span className="icon is-large footer-icon">
                    <i className="fa fa-user"></i>
                  </span>
                </a>
              </div>
            </div>
          </footer>
        );
    }
};

export default Footer;

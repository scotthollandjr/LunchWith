import React from 'react';

class PageHeader extends React.Component {

    render() {
        return (
          <div>
            <nav className="nav" id="splash-nav">
              <div className="nav-right">
                <a className="nav-item clickable" href="https://github.com/scotthollandjr/LunchWith">
                  <span className="icon">
                    <i className="fa fa-github"></i>
                  </span>
                </a>
                <a className="nav-item clickable" href="https://twitter.com/eyecuelab">
                  <span className="icon">
                    <i className="fa fa-twitter"></i>
                  </span>
                </a>
                <p className="nav-item">
                  Already have an account?
                  <a href="/auth/linkedin" className="nav-item  clickable">
                    Log-in
                  </a>
                </p>
              </div>
            </nav>
          </div>
        );
    }
};

export default PageHeader;

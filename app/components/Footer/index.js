import React from 'react';

class Footer extends React.Component {
    render() {
        return (
          <section className="footerx hero is-small">
            <div className="hero-foot">
              <nav className="tabs is-boxed is-fullwidth">
                <div className="container">
                  <ul>
                    <li>
                      <a className="footer-tab">
                        <span className="icon is-large">
                          <i className="fa fa-home"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="footer-tab">
                        <span className="icon is-large">
                          <i className="fa fa-calendar-plus-o"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="footer-tab">
                        <span className="icon is-large">
                          <i className="fa fa-user"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </section>
        );
    }
};

export default Footer;

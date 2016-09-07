import React from 'react';

class Footer extends React.Component {
    showCalendar() {
      alert("the calendar just popped up, trust me");
    }

    showAccount() {
      alert("here is your account. go head and edit away");
    }

    render() {
        return (
          <section id="footer" className="footerx hero is-small">
            <div className="hero-foot">
              <nav className="tabs is-boxed is-fullwidth">
                <div className="container">
                  <ul>
                    <li>
                      <a href="/activity" className="footer-tab">
                        <span className="icon is-large">
                          <i className="fa fa-home"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a onClick={this.showCalendar} className="footer-tab">
                        <span className="icon is-large">
                          <i className="fa fa-calendar-plus-o"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a onClick={this.showAccount} className="footer-tab">
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

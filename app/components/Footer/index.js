import React from 'react';
import UpdateForm from '../UpdateForm';

class Footer extends React.Component {
    showCalendar() {
      alert("the calendar just popped up, trust me");
    }

    showAccount() {
      var panel = document.getElementById("updatePanel");
      if (panel.style.height == "100%") {
        panel.style.height = "0%";
      } else {
        panel.style.height = "100%";
      }

    }

    render() {
        return (
          <div>
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
            <div id="updatePanel" className="overlay2">
    					<div className="overlay-content update-content">
                <UpdateForm />
    					</div>
    				</div>
          </div>
        );
    }
};

export default Footer;

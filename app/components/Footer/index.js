import React from 'react';
import UpdateForm from '../UpdateForm';
import Messages from '../Messages';

class Footer extends React.Component {
    showCalendar() {
      var other = document.getElementById("updatePanel");
      other.style.height = "0%";
      
      var panel = document.getElementById("messagePanel");
      if (panel.style.height == "100%") {
        panel.style.height = "0%";
      } else {
        panel.style.height = "100%";
      }
    }

    showAccount() {
      var other = document.getElementById("messagePanel");
      other.style.height = "0%";

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
                        <a href='/messages' className="footer-tab">
                          <span className="icon is-large">
                            <i className="fa fa-comments-o"></i>
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
                <h1 className="title is-3 white">Update account information:</h1>
                <UpdateForm />
    					</div>
    				</div>
            <div id="messagePanel" className="overlay2">
              <div className="overlay-content update-content">
                <h1 className="title is-3 white">Messages:</h1>
                <Messages />
              </div>
            </div>
          </div>
        );
    }
};

export default Footer;

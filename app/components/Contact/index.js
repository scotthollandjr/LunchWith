import React from 'react';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';

class Contact extends React.Component {

    render() {
        return (
          <div>
            <PageHeader />
            <div id="contact-div" className="tile is-6">
              <article className="tile is-child notification">
                <nav className="panel">
                  <p className="panel-heading">
                    Contact us:
                  </p>
                  <a className="panel-block" href="mailto:info@lunchwith.co">
                    <span className="icon contact-icon">
                      <i className="fa fa-envelope"></i>
                    </span>
                    info@lunchwith.co
                  </a>
                  <a className="panel-block" href="#">
                    <span className="icon contact-icon">
                      <i className="fa fa-twitter"></i>
                    </span>
                    @LunchWith
                  </a>
                  <a className="panel-block" href="#">
                    <span className="icon contact-icon">
                      <i className="fa fa-facebook"></i>
                    </span>
                    @LunchWith
                  </a>
                  <a className="panel-block" href="https://github.com/eyecuelab">
                    <span className="icon contact-icon">
                      <i className="fa fa-github"></i>
                    </span>
                    @EyeCueLab
                  </a>
                </nav>
              </article>
            </div>
            <PageFooter />
          </div>
        );
    }
};

export default Contact;

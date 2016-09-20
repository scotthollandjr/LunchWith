import React from 'react';

class PageFooter extends React.Component {

    render() {
        return (
          <div>
            <footer className="footer" id="splash-footer">
              <div className="content">
                <div className="footer-left">
                  <p className="footer-item">
                    © LunchWith, an <a href="http://www.eyecuelab.com/" className="clickable">EyeCue Lab</a> Product, Copyright 2016
                  </p>
                </div>
                <div className="footer-right">
                  <p className="footer-item">
                    <span><a href="/privacy" className="clickable">Privacy Policy</a> | <a href="/contact" className="clickable">Contact Us</a> | <a href="/about" className="clickable">About</a></span>
                  </p>
                </div>
              </div>
            </footer>
          </div>
        );
    }
};

export default PageFooter;

import React from 'react';

class Footer extends React.Component {
    render() {
        return (
          <footer className="footer">
            <div className="container">
              <div className="content has-text-centered">
                <p>
                  <strong>LunchWith</strong> by KW & SH. The source code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                  is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
                </p>
                <p>
                  <a className="icon" href="https://github.com/kylewolfson/shareabyte">
                    <i className="fa fa-github"></i>
                  </a>
                </p>
              </div>
            </div>
          </footer>
        );
    }
};

export default Footer;

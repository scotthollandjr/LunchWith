import React from 'react';

var Header = React.createClass({
  render: function() {
    return (
        <div>
          <nav className="nav" id="navBar">
            <div className="container" id="navItems">
              <div className="nav-left" id="logo">
                <a href="/activity">
                  <img id="nav-logo" src="/images/lunchlogo.png" alt="lunchwith logo" />
                </a>
              </div>
            </div>
          </nav>
        </div>
    )
  }
});

export default Header;

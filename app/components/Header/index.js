import React from 'react';

var Header = React.createClass({
  render: function() {
    return (
        <div>
          <nav className="nav" id="navBar">
            <div className="container" id="navItems">
              <div className="nav-left" id="logo">
                <span className="icon is-medium">
                  <i className="fa fa-bars white"></i>
                </span>
              </div>
              <div className="nav-right">
                <span className="icon is-medium">
                  <i className="fa fa-search white"></i>
                </span>
              </div>
            </div>
          </nav>          
        </div>
    )
  }
});

export default Header;
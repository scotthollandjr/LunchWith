import React from 'react';

class Splash extends React.Component {
    render() {
        return (
          <div id="splashDiv" className="container">
            <h1 className="title is-1 is-white">lunchWith</h1>
            <img src="/images/lunchlogo.png"></img>
            <a href="/auth/linkedin" className="button is-blue is-large">GET STARTED</a>
          </div>
        );
    }
};

export default Splash;

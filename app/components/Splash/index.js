import React from 'react';
import ParallaxComponent from 'react-parallax-component';

class Splash extends React.Component {
    render() {
        return (
          <div>
            <div id="splashDiv1" className="splashDiv">
              <img src="/images/lunchlogo.png"></img>
              <div className="splash-title white">
                <p>The best way to grow your professional network</p>
                <p>Without all the awkwardness.</p>
              </div>
              <div className="splash-body white">
                <p>LunchWith is the first in-person social network that takes all the guess work</p>
                <p>out of meeting new professionals in your field</p>
              </div>
              <a href="/auth/linkedin">
                <img className="splash-button" src="/images/linkedbutton.png"></img>
              </a>
            </div>
            <div id="splashDiv2" className="splashDiv">
              <div>
                <div className="splash-title white">
                  <p>Want to learn from your local experts?</p>
                  <p>No problem. Buy them a meal.</p>
                </div>
                <div className="splash-body white">
                  <p>Whether you are someone new to the industry or a veteran</p>
                  <p>who is happy to share your experience, LunchWith is happy</p>
                  <p>to match you up with people with the right background to</p>
                  <p>chat over lunch!</p>
                </div>
                <a href="/auth/linkedin">
                  <img className="splash-button" src="/images/linkedbutton.png"></img>
                </a>
              </div>
              <div>
                <img src="/images/lunchlogo.png"></img>
              </div>
            </div>
            <div id="splashDiv3" className="splashDiv">
              <div>
                <img src="/images/lunchlogo.png"></img>
              </div>
              <div>
                <div className="splash-title white">
                  <p>Grow your professional network.</p>
                  <p>Meet your future colleagues.</p>
                </div>
                <div className="splash-body white">
                  <p>Jobs change, but relationships stay. Growing a solid network</p>
                  <p>of professionals in your area across differenct functions is key</p>
                  <p>to staying relevant.</p>
                  <p>LunchWith believes in the value of one-on-one in-person</p>
                  <p>interactions. You may just end up meeting your future boss</p>
                  <p>or employee.</p>
                </div>
                <a href="/auth/linkedin">
                  <img className="splash-button" src="/images/linkedbutton.png"></img>
                </a>
              </div>
            </div>
            <div id="splashDiv4" className="splashDiv">
              <div>
                <div className="splash-title white">
                  <p>No solicitations, recruiters,</p>
                  <p>vendors or business spies</p>
                  <p>allowed.</p>
                </div>
                <div className="splash-body white">
                  <p>LunchWith is committed to the quality of all users'</p>
                  <p>experience. We have a zero tolerance policy for the misuse</p>
                  <p>of the application.</p>
                  <p>All reported abuse accounts will be immediately terminated</p>
                  <p>upon verification.</p>
                </div>
                <a href="/auth/linkedin">
                  <img className="splash-button" src="/images/linkedbutton.png"></img>
                </a>
              </div>
              <div>
                <img src="/images/lunchlogo.png"></img>
              </div>
            </div>
          </div>
        );
    }
};

export default Splash;

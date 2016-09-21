import React from 'react';
import ParallaxComponent from 'react-parallax-component';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';

class Splash extends React.Component {
    render() {
        return (
          <div id="splash-container">
            <PageHeader />
            <div id="splashDiv1" className="splashDiv">
              <img src="/images/lunchlogo.png"></img>
              <div className="splash-title white">
                <p>The best way to grow your professional network</p>
                <p>Without all the awkwardness.</p>
              </div>
              <div className="splash-body white">
                <p>LunchWith is the first in-person social network that takes all the guess work out of meeting new professionals in your field</p>
              </div>
              <a href="/auth/linkedin">
                <img className="splash-button" src="/images/linkedbutton.png"></img>
              </a>
            </div>
            <div id="splashDiv2" className="splashDiv">
              <div className="splash-left">
                <div className="splash-title">
                  <p>Want to learn from your local experts?</p>
                  <p>No problem. Buy them a meal.</p>
                </div>
                <div className="splash-body">
                  <p>Whether you are someone new to the industry or a veteran who is happy to share your experience, LunchWith is happy to match you up with people with the right background to chat over lunch!</p>
                </div>
                <a href="/auth/linkedin">
                  <img className="splash-button" src="/images/linkedbutton.png"></img>
                </a>
              </div>
              <div>
                <img src="/images/phone.png"></img>
              </div>
            </div>
            <div id="splashDiv3" className="splashDiv">
              <div className="splash-left">
                <img src="/images/network.png"></img>
              </div>
              <div>
                <div className="splash-title">
                  <p>Grow your professional network.</p>
                  <p>Meet your future colleagues.</p>
                </div>
                <div className="splash-body">
                  <p>Jobs change, but relationships stay. Growing a solid network of professionals in your area across differenct functions is key to staying relevant.</p> <p>LunchWith believes in the value of one-on-one in-person interactions. You may just end up meeting your future boss or employee.</p>
                </div>
                <a href="/auth/linkedin">
                  <img className="splash-button" src="/images/linkedbutton.png"></img>
                </a>
              </div>
            </div>
            <div id="splashDiv4" className="splashDiv">
              <div className="splash-left">
                <div className="splash-title">
                  <p>No solicitations, recruiters,</p>
                  <p>vendors or business spies</p>
                  <p>allowed.</p>
                </div>
                <div className="splash-body">
                  <p>LunchWith is committed to the quality of all users experience. We have a zero tolerance policy for the misuse of the application.</p>
                  <p>All reported abuse accounts will be immediately terminated upon verification.</p>
                </div>
                <a href="/auth/linkedin">
                  <img className="splash-button" src="/images/linkedbutton.png"></img>
                </a>
              </div>
              <div>
                <img src="/images/nospies.png"></img>
              </div>
            </div>
            <PageFooter />
          </div>
        );
    }
};

export default Splash;

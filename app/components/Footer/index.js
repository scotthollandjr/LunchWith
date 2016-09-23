import React from 'react';
import UpdateForm from '../UpdateForm';
import Messages from '../Messages';
import GoogleMap from '../GoogleMap';

class Footer extends React.Component {
    showMesssages() {
      var other = document.getElementById("searchPanel");
      var other2 = document.getElementById("updatePanel");
      other.style.height = "0%";
      other2.style.height = "0%";

      var panel = document.getElementById("messagePanel");
      if (panel.style.height == "100%") {
        panel.style.height = "0%";
      } else {
        panel.style.height = "100%";
      }
    }

    showAccount() {
      var other = document.getElementById("searchPanel");
      var other2 = document.getElementById("messagePanel");
      other.style.height = "0%";
      other2.style.height = "0%";

      var panel = document.getElementById("updatePanel");
      if (panel.style.height == "100%") {
        panel.style.height = "0%";
      } else {
        panel.style.height = "100%";
      }
    }

    showSearch() {
      var other = document.getElementById("updatePanel");
      var other2 = document.getElementById("messagePanel");
      other.style.height = "0%";
      other2.style.height = "0%";

      var panel = document.getElementById("searchPanel");
      if (panel.style.height == "20%") {
        panel.style.height = "0%";
      } else {
        panel.style.height = "20%";
      }
    }

    searchFunction() {
      var searchTerm = document.getElementById("searchInput").value;
      searchTerm = searchTerm.toLowerCase();
      for (var i = 0; i < GoogleMap.displayedUsers.length; i++) {
        var searchedUser = GoogleMap.displayedUsers[i]
        if (searchedUser.firstName.toLowerCase().includes(searchTerm) ||
          searchedUser.lastName.toLowerCase().includes(searchTerm) ||
          searchedUser.company.toLowerCase().includes(searchTerm) ||
          searchedUser.skills.join().toLowerCase().includes(searchTerm)
        ){
          //successful search, leave marker
        } else {
          GoogleMap.displayedUsers[i].setMap(null);
        }
      }
      console.log(searchTerm);
      console.log(GoogleMap.displayedUsers[0].firstName);
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
                        <a onClick={this.showSearch} className="footer-tab">
                          <span className="icon is-large">
                            <i className="fa fa-search"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a onClick={this.showMesssages} className="footer-tab">
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
                <UpdateForm />
    					</div>
    				</div>
            <div id="messagePanel" className="overlay2">
              <div className="overlay-content message-content">
                <h1 className="title is-3 white">Messages:</h1>
                <Messages />
              </div>
            </div>
            <div id="searchPanel" className="overlay2">
              <p className="control has-addons search-bar">
                <input id="searchInput" className="input is-expanded is-large" placeholder="Name, Skill, or Company" />
                <button className="button is-blue is-large" onClick={this.searchFunction}>SEARCH</button>
              </p>
            </div>
          </div>
        );
    }
};

export default Footer;

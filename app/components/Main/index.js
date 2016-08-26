import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import LinkedIn from '../LinkedIn';
import Map from '../Map';

class Main extends React.Component {
    render() {
        return (
          <div>
            <Map google={window.google} />
          </div>
        );
    }
};

export default Main;
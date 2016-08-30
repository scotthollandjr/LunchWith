import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import MapComp from '../Map';

class Activity extends React.Component {
    render() {
        return (
          <div className="flex_container">
            <Header />
            <div className="flex_body"></div>
            <Footer />
          </div>
        );
    }
};

export default Activity;
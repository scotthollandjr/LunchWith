import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import GoogleMap from '../GoogleMap';

class Activity extends React.Component {
    render() {
        return (
          <div className="flex_container">
            <Header />
           	<GoogleMap />
            <Footer />
          </div>
        );
    }
};

export default Activity;
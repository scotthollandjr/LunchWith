import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

class Messages extends React.Component {
    render() {
        return (
          <div className="flex_container">
            <Header />
            <p> messages!</p>
            <Footer />
          </div>
        );
    }
};

export default Messages;

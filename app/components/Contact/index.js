import React from 'react';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';

class Contact extends React.Component {

    render() {
        return (
          <div>
            <PageHeader />
            <h1 className="title is-1 white">Contact</h1>
            <PageFooter />
          </div>
        );
    }
};

export default Contact;

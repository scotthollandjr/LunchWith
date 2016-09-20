import React from 'react';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';

class About extends React.Component {

    render() {
        return (
          <div>
            <PageHeader />
            <h1 className="title is-1 white">About</h1>
            <PageFooter />
          </div>
        );
    }
};

export default About;

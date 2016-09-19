import React from 'react';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';

class Privacy extends React.Component {

    render() {
        return (
          <div>
            <PageHeader />
            <h1 className="title is-1 white">Privacy</h1>
            <PageFooter />
          </div>
        );
    }
};

export default Privacy;

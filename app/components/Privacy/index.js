import React from 'react';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';

class Privacy extends React.Component {

    render() {
        return (
          <div>
            <PageHeader />
            <article className="message">
              <div className="message-header">
                Privacy Policy
              </div>
              <div className="message-body">
                Lorem ipsum dolor sit amet privacy, consectetur adipiscing elit.
                Pellentesque risus mi, tempus quis placerat ut, porta nec
                nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
                gravida purus diam, et dictum felis venenatis efficitur.
                Aenean ac eleifend lacus, in mollis lectus. Donec sodales,
                arcu et sollicitudin porttitor, tortor urna tempor ligula,
                id porttitor mi magna a neque. Donec dui urna, vehicula et
                sem eget, facilisis sodales sem.
              </div>
            </article>
            <PageFooter />
          </div>
        );
    }
};

export default Privacy;

import React from 'react';
import UpdateForm from '../UpdateForm';
import FieldForm from '../FieldForm';
var props = {};
props.firstName = "Kyle Test firstname";
props.lastName = "Lastname test";

class Account extends React.Component {

    render() {
      history.replaceState('', document.title, window.location.pathname);
        return (
          <div>
            <UpdateForm {...props} />
          </div>
        );
    }
};

export default Account;

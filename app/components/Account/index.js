import React from 'react';
import SkillsForm from '../SkillsForm';
import UpdateForm from '../UpdateForm';
var props = {};
props.firstName = "Kyle Test firstname";
props.lastName = "Lastname test";

class Account extends React.Component {

    render() {
      console.log(this.props.firstName);
        return (
          <div>
            <UpdateForm {...props} />
          </div>
        );
    }
};

export default Account;

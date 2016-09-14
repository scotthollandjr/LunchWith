import React from 'react';
import SkillsForm from '../SkillsForm';
import UpdateForm from '../UpdateForm';
import FieldForm from '../FieldForm';
var props = {};
props.firstName = "Kyle Test firstname";
props.lastName = "Lastname test";

class Account extends React.Component {

    render() {
        return (
          <div>
            <UpdateForm {...props} />
          </div>
        );
    }
};

export default Account;

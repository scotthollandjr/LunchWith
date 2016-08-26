import React from 'react';
import SkillsForm from '../SkillsForm';

var User = React.createClass({
	render: function() {
	 
	 //		var id = JSON.stringify(data.id);
     //    var firstName = JSON.stringify(data.firstName);
     //    var lastName = JSON.stringify(data.lastName);
     //    var emailAddress = JSON.stringify(data.emailAddress);
     //    var company = JSON.stringify(data.positions.values[0].company.name);
     //    var title = JSON.stringify(data.positions.values[0].title);
     //    var pictureUrl = JSON.stringify(data.pictureUrl);

     var newUser = {id: 1, firstName: "firstName", lastName: "lastName", emailAddress: "email@address.com", company: "company", title: "title", pictureUrl: "www.pictureUrl.com", };


	}
});

class Account extends React.Component {
    render() {
        return (
          <div>
            database stuff
          </div>
        );
    }
};

export default Account;
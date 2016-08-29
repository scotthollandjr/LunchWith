import React from 'react';
import * as userService from '../../services/user-service';


var SkillsList = React.createClass({

	render: function() {
		var skillEntries = this.props.entries;

		function createSkill(skill) {
			return (
				<p key={skill.key} className="panel-block" href="#">
				    {skill.text}
				    <span className="panel-icon starIcon">
				      	<i className="fa fa-star"></i>
				    </span>
				 </p>
			);
		}

		var skillList = skillEntries.map(createSkill);

		return (
			<div>
				{skillList}
			</div>
		);
	}
});

var SkillsForm = React.createClass({

  createNewUser: function() {
    productService.newUser({firstName: "sweet-ass", lastName: "auto-encoder"});
  },

	getInitialState: function() {
		return {
			skills: []
		};
	},

	addSkill: function(e) {
		var skillArray = this.state.skills;

		skillArray.push(
		{
			text: this._inputElement.value,
			key: Date.now(),
			starred: false
			}
		);
		this.setState({
			skills: skillArray
		});

		this._inputElement.value = "";

		e.preventDefault();
	},

  	render: function() {
    	return (
			<nav className="panel" id="skillsPanel">
			  	<p className="panel-heading">
			    	Show us your skills
			  	</p>
			  	<form onSubmit={this.addSkill}>
					<p className="panel-block control has-addons">
						<input ref={(a) => this._inputElement = a} className="input is-expanded is-medium is-orange" type="text" placeholder="Ex. JavaScript" />
						<button type="submit" className="button is-medium is-orange">
							Add
						</button>
					</p>
				</form>

				<SkillsList entries={this.state.skills} />

			  	<div className="panel-block">
			    	<a href="/main" className="button is-blue is-fullwidth">
			      		Submit
			    	</a>
			  	</div>

          <p className="panel-block control has-addons">
            <button onClick={this.createNewUser} type="submit" className="button is-medium is-orange">
              New User
            </button>
          </p>
			</nav>
	    )
	}
});

export default SkillsForm;

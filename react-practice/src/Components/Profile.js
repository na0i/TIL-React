import React, { Component } from "react";

class Profile extends Component {
    render() {
      return (
        <div>
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            console.log(this.props);
            console.log(this.props.onChangePage());
          }.bind(this)}>{ this.props.title }</a></h1>
          <h3>{ this.props.sub }</h3>
        </div>
      );
    }
  }

export default Profile;
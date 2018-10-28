import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/index'

class User extends Component {
  render() {
    const { getUser, user } = this.props;
    return (
      <div >
        <h1 className="jumpbotron-heading text-center">{user.author}</h1>
        <p className="text-center">
          <button onClick={() => { getUser() }} className="btn btn-success mr-2">GET RANDOM USER</button>
        </p>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { getUser })(User);

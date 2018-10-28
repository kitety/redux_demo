import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../actions/index'

class User extends Component {
  render() {
    const { getUser } = this.props;
    const { error, isFetching, user } = this.props.user;
    let data;
    if (error) {
      data = error.message
    } else if (isFetching) {
      data = "Loading..."
    } else {
      data = user.description
    }
    return (
      <div >
        <h3 className="jumpbotron-heading text-center">{data}</h3>
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

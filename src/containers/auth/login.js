import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../components/auth/form';
import { login } from '../../actions/auth';
import { store } from '../../store';

export default class LoginLayout extends Component {
  _login(username, password) {
    debugger;
    store.dispatch(login(username, password));
  }

  render() {
    const { formState, currentlySending } = this.props.data;

    return (
      <div className="form-page__wrapper">
        <div className="form-page__form-wrapper">
          <div className="form-page__form-header">
            <h2 className="form-page__form-heading">Login</h2>
          </div>
          {/* While the form is sending, show the loading indicator,
            otherwise show "Log in" on the submit button */}
          <Form
            data={formState}
            history={this.props.history}
            onSubmit={this._login}
            btnText={"Login"}
            currentlySending={currentlySending}
          />
        </div>
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state.authentication,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(LoginLayout);

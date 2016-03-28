/**
 * Form.react.js
 *
 * The form with a username and a password input field, both of which are
 * controlled via the application state.
 *
 */

import React, { Component } from 'react';
import { changeForm } from '../../actions/auth';
import { store } from '../../store';

import '../../styles/auth/form.scss';

class LoginForm extends Component {

  // onSubmit call the passed onSubmit function
  onSubmit() {
    return (e) => {
      e.preventDefault();
      this.props.onSubmit(this.props.data.username, this.props.data.password);
    };
  }

  // Emits a change of the form state to the application state
  emitChange(newState) {
    store.dispatch(changeForm(newState));
  }

  // Change the username in the app state
  changeUsername() {
    return (e) => {
      const newState = this.mergeWithCurrentState({
        username: e.target.value,
      });

      this.emitChange(newState);
    };
  }

  // Change the password in the app state
  changePassword() {
    return (e) => {
      const newState = this.mergeWithCurrentState({
        password: e.target.value,
      });

      this.emitChange(newState);
    };
  }

  // Merges the current state with a change
  mergeWithCurrentState(change) {
    return Object.assign({}, this.props.data, change);
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit()}>
        <div className="form__error-wrapper">
          <p className="form__error form__error--username-taken">
            Sorry, but this username is already taken.
          </p>
          <p className="form__error form__error--username-not-registered">
            This username does not exist.
          </p>
          <p className="form__error form__error--wrong-password">
            Wrong password.
          </p>
          <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
          <p className="form__error form__error--failed">Something went wrong, please try again!</p>
        </div>
        <div className="form__field-wrapper">
          <input
            className="form__field-input"
            type="text" id="username"
            value={this.props.data.username}
            placeholder="frank.underwood"
            onChange={this.changeUsername()}
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          <label className="form__field-label" htmlFor="username">Username</label>
        </div>
        <div className="form__field-wrapper">
          <input
            className="form__field-input"
            id="password"
            type="password"
            value={this.props.data.password}
            placeholder="••••••••••"
            onChange={this.changePassword()}
          />
          <label className="form__field-label" htmlFor="password">Password</label>
        </div>
        <div className="form__submit-btn-wrapper">
          {this.props.currentlySending ? (
            <a href="#" disabled="true"></a>
          ) : (
            <button className="form__submit-btn" type="submit">{this.props.btnText}</button>
          )}
        </div>
      </form>
    );
  }
}

export default LoginForm;

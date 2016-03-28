import React, { Component }    from 'react';
import { connect }             from 'react-redux';
import { routeActions }        from 'react-router-redux';
import { store }               from '../store';
import { Link }                from 'react-router';

function goTo(path) {
  return () => {
    store.dispatch(routeActions.push(path));
  };
}

class IndexLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='animated centered-content fadeIn'>
        <div className='index-mast-head centered-content'>
          <h1>Welcome on HopBoard</h1>
          <h3>Let us fly together</h3>
          <br/>
          {this.props.loggedIn ? (
            <a onClick={goTo('/missions')}>
              Go to missions <i className='pe-7s-angle-right-circle'></i>
            </a>
          ) : (
            <div>
              <Link to='/login' className='btn btn--login'>Login</Link>
              <Link to='/register' className='btn btn--register'>Register</Link>
            </div>
          )
          }
        </div>
      </div>
    );
  }
}

function mapState(newProps) {
  const { authentication } = newProps;

  return {
    loggedIn: authentication.loggedIn,
  };
}

export default connect(mapState)(IndexLayout);

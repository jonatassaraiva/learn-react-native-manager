import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { EmployeList, EmployeCreate } from './components/employ';
import { signOut } from './actions/auth';
import SignIn from './components/auth';

class RouterComponent extends Component {

  render() {
    return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key="auth">
          <Scene key="login" component={SignIn} title="Please Login" />
        </Scene>

        <Scene key="main">
          <Scene
            leftTitle="Sign Out"
            onLeft={() => this.props.signOut()}
            onRight={() => Actions.employeeCreate()}
            rightTitle="Add"
            key="employeeList"
            component={EmployeList}
            title="Employees"
            initial
          />

          <Scene key="employeeCreate" component={EmployeCreate} title="Create Employee" />
        </Scene>
      </Router>
    );
  }
}



export default connect(null , { signOut })(RouterComponent);

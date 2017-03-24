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
        <Scene key="auth" duration={durations.NONE}>
          <Scene key="login" component={SignIn} title="Please Login" />
        </Scene>

        <Scene key="main" duration={durations.NONE}>
          <Scene duration={durations.DEFAULT}
            leftTitle="Sign Out"
            onLeft={() => this.props.signOut()}
            onRight={() => Actions.employeCreate()}
            rightTitle="Add"
            key="employeList"
            component={EmployeList}
            title="Employees"
            initial />

          <Scene key="employeCreate" duration={durations.DEFAULT} component={EmployeCreate} 
            title="Create Employe" />
        </Scene>
      </Router>
    );
  }
}

const durations ={
  NONE: 0,
  DEFAULT: 300
};

export default connect(null , { signOut })(RouterComponent);

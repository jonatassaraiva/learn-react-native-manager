import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { create, newEntity, propChange } from '../../../actions/employ';

class Create extends Component {
  componentWillMount() {
    this.props.newEntity();
  }

  componentWillReceiveProps(nextProps) {
  }

  createDataSource({ employees }) {
  }

  render() {
    return (
      <Text> Create </Text>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, user } = auth;

  const hasAuth = user ? true : false;

  return { email, password, error, loading, hasAuth };
};

const actionsToProps = {
  create, newEntity, propChange
};

const EmployeCreate = connect(mapStateToProps, actionsToProps)(Create);
export { EmployeCreate };

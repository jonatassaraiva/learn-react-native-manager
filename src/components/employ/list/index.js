import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { listFetch } from '../../../actions/employ';
import { Spinner } from '../../common';

import Item from './item';

class List extends Component {
  componentWillMount() {
    this.props.listFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  renderRow(employee) {
    return <Item employee={employee} />;
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderLoading() {
    if(this.props.executing)
      return <Spinner />;

    return null;

  }

  render() {
    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow} />
        {this.renderLoading()}
      </View>

    );
  }
}

const mapStateToProps = ({ employ }) => {
  const employees = _.map(employ.list, (val, uid) => {
    return { ...val, uid };
  });

  const { execution } = employ.status;

  return { employees, execution };
};

const actionsToProps = {
  listFetch
};

const EmployeList = connect(mapStateToProps, actionsToProps)(List);
export { EmployeList };
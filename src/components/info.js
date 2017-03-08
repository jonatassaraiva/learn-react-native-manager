import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

import { loadPacageInfo } from '../actions/application';

class Info extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadPacageInfo();
  }

  render() {
    const { name, version } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          {name}
        </Text>
        <Text>
          {version}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { name, version } = state.application;

  return { name, version };
};

export default connect(mapStateToProps, { loadPacageInfo })(Info);
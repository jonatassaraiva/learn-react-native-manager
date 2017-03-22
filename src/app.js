import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import firebase from 'firebase';
import { firebaseSetting } from '../settings';

import store from './store';
import Router from './router';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.store = store.configure();

    firebase.initializeApp(firebaseSetting);
  }

  render() {
    return (
      <Provider store={this.store}>
        <View style={{ flex: 1 }}>
          <Router />
        </View>
      </Provider>
    );
  }
}

export default App;
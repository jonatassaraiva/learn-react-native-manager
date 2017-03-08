import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import firebase from 'firebase';
import { firebaseSetting } from '../settings';

import store from './store';
import LoginForm from './components/login-form';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.store = store.configure();

    firebase.initializeApp(firebaseSetting);

    firebase.auth().onAuthStateChanged((user) => {
      if (user)
        this.setState({ loggedIn: true });
      else
        this.setState({ loggedIn: false });
    });
  }

  render() {
    return (
      <Provider store={this.store}>
        <View style={{ flex: 1 }}>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
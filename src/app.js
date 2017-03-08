import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import Info from './components/info';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.store = store.configure();
  }

  render() {
    return (
      <Provider store={this.store}>
        <View style={{ flex: 1 }}>
          <Info />
        </View>
      </Provider>
    );
  }
}

export default App;
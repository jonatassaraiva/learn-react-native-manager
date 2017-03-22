import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { autoSignIn, propChange, signIn } from '../../actions/auth';
import { Card, Section, Input, Button, Spinner } from '../common';

class SignIn extends Component {
  componentWillMount() {
    if(!this.props.hasSignIn)
      this.props.autoSignIn();
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.signIn({ email, password });
  }

  renderButton() {
    if (this.props.execution)
      return <Spinner size="large" />;

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  render() {
    return (
      <View style={styles.view}>
        <Card>
          <Section>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={value => this.props.propChange({prop: 'email', value})}
              value={this.props.email}
            />
          </Section>

          <Section>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={value => this.props.propChange({prop: 'password', value})}
              value={this.props.password}
            />
          </Section>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <Section>
            {this.renderButton()}
          </Section>
        </Card>
      </View>

    );
  }
}

const styles = {
  view: {
    flex: 1,
    justifyContent: 'center',
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, hasSignIn } = auth.signIn;

  const { error, execution, message } = auth.status;

  const hasError = error ? true : false;

  return { email, password, hasSignIn, hasError, execution, message };
};

const mapActionsToProps = {
  autoSignIn,
  signIn,
  propChange
};

export default connect(mapStateToProps, mapActionsToProps)(SignIn);
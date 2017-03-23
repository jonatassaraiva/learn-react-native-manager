import React, { Component } from 'react';
import { Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, Section, Input, Button, Spinner } from '../../common';
import { create, newEntity, propChange, actionTypes } from '../../../actions/employ';

class Create extends Component {
  componentWillMount() {
    this.props.newEntity();
  }

  componentDidUpdate() {
    if(this.props.action === actionTypes.CREATE_SUCESS) 
      this.props.newEntity();
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.create({ name, phone, shift });
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
      <Card>
        <Section>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.propChange({ prop: 'name', value })}
          />
        </Section>

        <Section>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.propChange({ prop: 'phone', value })}
          />
        </Section>

        <Section style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.propChange({ prop: 'shift', value })}>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </Section>

        <Section>
          {this.renderButton()}
        </Section>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = ({ employ }) => {
  const { name, phone, shift } = employ.create;

  const { execution, action } = employ.status;

  return { name, phone, shift, execution, action };
};

const actionsToProps = {
  create, newEntity, propChange
};

const EmployeCreate = connect(mapStateToProps, actionsToProps)(Create);
export { EmployeCreate };

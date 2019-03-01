/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, FlatList} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Image, Picker } from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Second extends Component<Props> {
  static navigationOptions =
  {
    title: "Info",

    headerStyle:
    {
      backgroundColor: "blue",
    },

    headerTintColor: 'white',


  };
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Container>
        <Content>
          <Form>
          <Text>Please choose a road:</Text>
          <View style={{backgroundColor: '#c8cbd1', width: 300}}>
          <Picker
            note
            mode="dropdown"
            style={{ width: 300, color: "black"}}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Picker.Item label="" value="key0" />
            <Picker.Item label="Garden State Parkway" value="key1" />
            <Picker.Item label="New Jersey Turnpike" value="key2" />
          </Picker>
          </View>
            <Item>
              <Label>Select an Entrance:</Label>
              <Input />
            </Item>
            <Item>
              <Label>Select an Exit:</Label>
              <Input />
            </Item>
            <Text>
              Number of axels:
            </Text>
            <Button>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create(
{

});

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
import {Container, Header, Content, Form, Item, Input, Label, Image, Picker, Button } from 'native-base';

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
    title: "Navigation Entry",

    headerStyle:
    {
      backgroundColor: "blue",
    },

    headerTintColor: 'white',


  };
  constructor(props) {
    super(props);
    this.state = {
      selecteda: "key0",
      selectedb: "keya"
    };
  }
  render() {
    return (
      <Container style={{width:"70%", marginLeft: "15%"}}>
        <Content>
          <Form>
          <Text style={{marginTop: "10%"}}>Please choose a road:</Text>
          <View style={{backgroundColor: '#c8cbd1', textAlign: "center"}}>
          <Picker
              mode="dropdown"
              selectedValue={this.state.selecteda}
              onValueChange={(value) => {
              this.setState({selecteda: value});}}
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
            <Text style={{marginTop: "10%"}}>
              Number of axels:
            </Text>
            <View style={{backgroundColor: '#c8cbd1', textAlign: "center"}}>
            <Picker
              mode="dropdown"
              selectedValue={this.state.selectedb}
              onValueChange={(value) => {
              this.setState({selectedb: value});}}
            >
              <Picker.Item label="" value="keya" />
              <Picker.Item label="1" value="keyb" />
              <Picker.Item label="2" value="keyc" />
            </Picker>
            </View>
            <Button>
              <Text>Submit Navigation</Text>
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

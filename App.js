/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions =
  {
    title: "Home",

    headerStyle:
    {
      backgroundColor: "blue",
    },

    headerTintColor: 'white',


  };
  render() {
    return (
      <Container>
        <Content>
          <View style={{justifyContent: 'center', alignItems:'center'}}>
          <Image style={{width: 200, height: 200, marginTop: "10%", borderWidth: 5, borderRadius: 4, borderColor: "black", paddingLeft: "20%"}} source={require('./Plaza_Palooza.png')}/>
          </View>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last style={{marginBottom:"10%"}}>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
          </Form>
          <View style={{justifyContent: 'center', alignItems:'center', flexDirection: 'row', color: "black"}}>
          <Button onPress={() => this.props.navigation.navigate('Second')} style={{marginRight: "5%", width: "20%", paddingBottom: "11%", marginTop: "3%", paddingLeft: "5%"}}>
            <Text style={{ color: "black"}}>Login</Text>
          </Button>
          <Button onPress={() => this.props.navigation.navigate('CreateAccount')} style={{marginLeft: "5%",  width: "20%", paddingBottom: "11%", marginTop: "3%", paddingLeft: "5%", paddingRight: "2%"}}>
            <Text style={{ color: "black"}}>Create Account</Text>
          </Button>
          </View>
        </Content>
      </Container>


    );
  }
}

const styles = StyleSheet.create(
{

});

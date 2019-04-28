/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Container, Header, Content, Button, Form, Input, Item, Icon } from 'native-base';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Second extends Component<Props> {
  static navigationOptions = {
    title: 'Create Account',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: 'white',
    headerStyle:
    {
      backgroundColor: "blue",
    },
  };
  state = {
    firstName: '',
    lastName: '',
    email:'',
    username: '',
    password:'',
    passwordRepeat:'',

  };
  onLocationChange = (location) => {
    this.setState({location: location});
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.content}>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row'
  },
  content: {
    marginLeft: '5%'
  },
  Button: {
    padding: 15,
    marginRight: 10,
    paddingTop: "5%"
  },
  searchBar: {
    marginTop: "10%",
    width: '95%',
    elevation: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    borderRadius: 3
  }
});

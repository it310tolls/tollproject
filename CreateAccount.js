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
  onFirstName = (firstName) => {
    this.setState({firstName: firstName});
  }
  onLastNameChange = (lastName) => {
    this.setState({lastName: lastName});
  }
  onEmailChange = (email) => {
    this.setState({email: email});
  }
  onUserNameChange = (username) => {
    this.setState({username: username});
  }
  onPasswordChanger = (password) => {
    this.setState({password: password});
  }
  onPasswordRepeatChanger = (passwordRepeat) => {
    this.setState({passwordRepeat: passwordRepeat});
  }

  render() {
    return (
      <Container style={{borderWidth: 10, borderColor: 'green', borderTopWidth: 0}}>
        <Content contentContainerStyle={styles.content}>
          <Text style={styles.textBoxes}>*Please enter your first name:</Text>
          <Item regular style={styles.searchBar}>
            <Input
             value={this.state.firstName}
             placeholder='First Name'
             onChangeText={this.onFirstName} />
          </Item>

          <Text style={styles.textBoxes}>*Please enter your last name:</Text>
          <Item regular style={styles.searchBar}>
            <Input
            value={this.state.lastName}
             placeholder='Last Name'
             onChangeText={this.onLastNameChange}/>
          </Item>

          <Text style={styles.textBoxes}>*Please enter your email address:</Text>
          <Item regular style={styles.searchBar}>
            <Input
            value={this.state.email}
             placeholder='Email'
             onChangeText={this.onEmailChange}/>
          </Item>

          <Text style={styles.textBoxes}>*Please enter a unique username:</Text>
          <Item regular style={styles.searchBar}>
            <Input
             value={this.state.username}
             placeholder='Username'
             onChangeText={this.onUserNameChange} />
          </Item>

          <Text style={styles.textBoxes}>*Please enter a password:</Text>
          <Item regular style={styles.searchBar}>
            <Input
             value={this.state.password}
             placeholder='Password'
             onChangeText={this.onPasswordChanger}/>
          </Item>

          <Text style={styles.textBoxes}>*Please repeat that same password for confirmation:</Text>
          <Item regular style={styles.searchBar}>
            <Input
            value={this.state.passwordRepeat}
            placeholder='Password Again'
            onChangeText={this.onPasswordRepeatChanger}/>
          </Item>


          <View style={styles.buttonContainer}>
            <Button bordered dark style={styles.Button}
                    onPress={() => this.props.navigation.navigate('App')}>
                    <Text style={{color:"black", paddingBottom: "8%"}}>Create Account</Text>
            </Button>


          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textBoxes:
  {
    color:"black",
    marginTop:"2%",
    marginBottom: "2%"
  },

  buttonContainer:
  {
    marginTop: "10%",
    flexDirection: 'row',
    alignItems: "center",
    marginBottom:"10%",
    alignItems:"center",
    justifyContent: 'center'
  },

  content:
  {
    marginLeft: '5%'
  },

  Button:
  {
    padding: 15,
    marginRight: 10,
    paddingTop: "5%",
    backgroundColor:"blue",
    paddingTop: "5%"
  },

  searchBar:
  {
    width: "95%",
    elevation: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    borderRadius: 3,
  }

});

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
export default class Premium extends Component<Props> {
  static navigationOptions =
  {
    title: "Premium Account Signup",

    headerStyle:
    {
      backgroundColor: "blue",
    },

    headerTintColor: 'white',
  };

  state = {
    cardNumber: '',
    code: '',
    experationDate: '',
    email:'',
  };

  onCardChange = (cardNumber) => {
    this.setState({cardNumber: cardNumber});
  }
  onCodeChange = (code) => {
    this.setState({code: code});
  }
  onExperationChange = (experationDate) => {
    this.setState({experationDate: experationDate});
  }
  onEmailChange = (email) => {
    this.setState({email: email});
  }

  render() {
    return (
      <Container style={{borderWidth: 10, borderColor: 'green', borderTopWidth: 0}}>
        <Content style={{width:"70%", marginLeft: "15%", marginTop: "10%"}}>
        <Form>
          <Text style={{marginBottom: "10%", marginTop: "5%"}}>By signing up with premium membership for only $0.99 plus tax, you can get it ad free!!!</Text>
          <Text style={styles.textBoxes}>*Please enter your credit card number:</Text>
          <Item regular style={styles.searchBar}>
            <Input
             value={this.state.cardNumber}
             placeholder='Card number'
             onChangeText={this.onCardChange} />
          </Item>

          <Text style={styles.textBoxes}>*Please enter the CVV/CVC number:</Text>
          <Item regular style={styles.searchBar}>
            <Input
            value={this.state.code}
             placeholder='CVV/CVC'
             onChangeText={this.onCodeChange}/>
          </Item>

          <Text style={styles.textBoxes}>*Please enter your experation dat:</Text>
          <Item regular style={styles.searchBar}>
            <Input
            value={this.state.experationDate}
             placeholder='Experation Date'
             onChangeText={this.onExperationChange}/>
          </Item>

          <Text style={styles.textBoxes}>*Please enter your email address:</Text>
          <Item regular style={styles.searchBar}>
            <Input
            value={this.state.email}
             placeholder='Email'
             onChangeText={this.onEmailChange}/>
          </Item>
        </Form>
        <View style={styles.buttonContainer}>
          <Button bordered dark style={styles.Button}
                  onPress={() => this.props.navigation.navigate('Second')}>
                  <Text style={{color:"black", paddingBottom: "8%"}}>Sign Up for Premium</Text>
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

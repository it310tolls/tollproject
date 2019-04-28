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
import SearchableDropdown from 'react-native-searchable-dropdown';
import firebase from 'react-native-firebase';
import stripe from 'tipsi-stripe';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

stripe.setOptions({
  publishableKey: 'pk_test_K5pZcjk0TdV5FndXD4DVt7wA00mvCaBVGx',
  androidPayMode: 'test',
});

let something = this;
type Props = {};
export default class Second extends Component<Props> {

  pay() {
    stripe.paymentRequestWithNativePay({
        total_price: '100.00',
        currency_code: 'USD',
        shipping_address_required: true,
        phone_number_required: true,
        shipping_countries: ['US', 'CA'],
        line_items: [{
          currency_code: 'USD',
          description: 'Tipsi',
          total_price: '20.00',
          unit_price: '20.00',
          quantity: '1',
        }],
      }).then((response) => console.log(response));
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Navigation",

    headerStyle:
    {
      backgroundColor: "blue",
    },

    headerTintColor: 'white',
    headerRight:
    <Button title="Menu" onPress={() => something.pay()} backgroundColor="white"><Text color="#03f">Premium Membership</Text></Button>,
  });

  ref = firebase.firestore().collection('Northbound-Entrances');
  southEntrance = firebase.firestore().collection('Southbound-Entrances');
  northExit = firebase.firestore().collection('Northbound-Exits');
  southExit = firebase.firestore().collection('Southbound-Exits');

  componentDidMount() {
       something = this;
   }

  componentWillMount() {
    this.ref.get()
    .then((response) => {
      var entrances = [];

      response.docs.forEach(function(doc) {
        entrances.push(doc.data());
      });

      this.setState({northBoundEntrances: entrances});
    })
    .catch((error) => alert(error));

    this.southEntrance.get()
    .then((something) => {
      var southEntrances = [];

      something.docs.forEach(function(doc) {
        southEntrances.push(doc.data());
      });

      this.setState({southBoundEntrances: southEntrances});
    })
    .catch((error) => alert(error));

    this.northExit.get()
    .then((another) => {
      var northExits = [];

      another.docs.forEach(function(doc) {
        northExits.push(doc.data());
      });

      this.setState({northBoundExits: northExits});
    })
    .catch((error) => alert(error));

    this.southExit.get()
    .then((nothing) => {
      var southExits = [];

      nothing.docs.forEach(function(doc) {
        southExits.push(doc.data());
      });

      this.setState({southBoundExits: southExits});
    })
    .catch((error) => alert(error));

  }

  constructor(props) {
    super(props);
    this.state = {
      selecteda: "default",
      selectedb: "keya",
      selectedc: "default",
      northBoundEntrances: [],
      southBoundEntrances: [],
      northBoundExits: [],
      southBoundExits: [],
      entrance: "",
      exit: "",
    };
  }

  onEntranceChange = (entrance) => {
    this.setState({entrance: entrance});
  }
  onExitChange = (exit) => {
    this.setState({exit: exit});
  }

  populateEntrances()
  {
    var empty = [];

    if(this.state.selecteda == "Garden State Parkway" && this.state.selectedc == "north")
    {
      return(this.state.northBoundEntrances);
    }

    else if(this.state.selecteda == "Garden State Parkway" && this.state.selectedc == "south")
    {
      return(this.state.southBoundEntrances);
    }

    else
    {
      return(empty);
    }
  }

  populateExits()
  {
    var empty = [];

    if(this.state.selecteda == "Garden State Parkway" && this.state.selectedc == "north")
    {
      return(this.state.northBoundExits);
    }

    else if(this.state.selecteda == "Garden State Parkway" && this.state.selectedc == "south")
    {
      return(this.state.southBoundExits);
    }

    else
    {
      return(empty);
    }
  }

  render() {
    return (
      <Container style={{borderWidth: 10, borderColor: 'green', borderTopWidth: 0}}>
        <Content style={{width:"70%", marginLeft: "15%", }}>
          <Text style={{marginTop: "10%", color: "black"}}>
            Welcome to TollPlazaPalooza, your one stop app for delivering toll costs for your commute. Please
            enter which road you plan to take, the direction, your entrance, exit, and type of vehicle in that order. Enjoy!
          </Text>
          <Form>
          <Text style={{marginTop: "10%", color: "black"}}>Please choose a road:</Text>
          <View style={{backgroundColor: '#c8cbd1', textAlign: "center"}}>
          <Picker
              mode="dropdown"
              selectedValue={this.state.selecteda}
              onValueChange={(value) => {
              this.setState({selecteda: value});}}
              id = "roads"
          >
            <Picker.Item label="" value="default" />
            <Picker.Item label="Garden State Parkway" value="Garden State Parkway" />
          </Picker>
          </View>
          <Text style={{marginTop: "10%", color: "black"}}>Please choose a direction of travel:</Text>
          <View style={{backgroundColor: '#c8cbd1', textAlign: "center"}}>
          <Picker
              mode="dropdown"
              selectedValue={this.state.selectedc}
              onValueChange={(value) => {
              this.setState({selectedc: value});}}
          >
            <Picker.Item label="" value="default" />
            <Picker.Item label="Northbound" value="north" />
            <Picker.Item label="Southbound" value="south" />
          </Picker>
          </View>
              <Text style={{marginTop: "10%", color: "black"}}>Select an Entrance:</Text>
              <SearchableDropdown
                onItemSelect={this.onEntranceChange}
                containerStyle={{ padding: 5 }}
                textInputStyle={{
                  padding: 12,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 5,
                }}
                itemStyle={{
                  padding: 10,
                  marginTop: 2,
                  backgroundColor: '#ddd',
                  borderColor: '#bbb',
                  borderWidth: 1,
                  borderRadius: 5,
                }}
                itemTextStyle={{ color: '#222' }}
                itemsContainerStyle={{ maxHeight: 140 }}
                items={this.populateEntrances()}
                defaultIndex={2}
                placeholder="placeholder"
                resetValue={true}
                underlineColorAndroid="transparent"
            />
            <Text style={{marginTop: "10%", color: "black"}}>Select an Exit:</Text>
            <SearchableDropdown
              onItemSelect={this.onExitChange}
              containerStyle={{ padding: 5 }}
              textInputStyle={{
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5,
              }}
              itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: '#ddd',
                borderColor: '#bbb',
                borderWidth: 1,
                borderRadius: 5,
              }}
              itemTextStyle={{ color: '#222' }}
              itemsContainerStyle={{ maxHeight: 140 }}
              items={this.populateExits()}
              defaultIndex={2}
              placeholder="placeholder"
              resetValue={true}
              underlineColorAndroid="transparent"
          />
            <Text style={{marginTop: "10%", color: "black"}}>
              Type of vehicle:
            </Text>
            <View style={{backgroundColor: '#c8cbd1', textAlign: "center"}}>
            <Picker
              mode="dropdown"
              selectedValue={this.state.selectedb}
              onValueChange={(value) => {
              this.setState({selectedb: value});}}
            >
              <Picker.Item label="" value="keya" />
              <Picker.Item label="Motor Cycle" value="Motor Cycle" />
              <Picker.Item label="Car" value="Car" />
              <Picker.Item label="Truck" value="Truck" />
              <Picker.Item label="Bus" value="Bus" />
            </Picker>
            </View>
            <Button style={{marginTop: "10%", marginLeft: '30%', width: "40%", marginBottom: "10%"}}
            onPress={() => this.props.navigation.navigate('final',
            {
              road: this.state.selecteda,
              direction: this.state.selectedc,
              entrance: this.state.entrance,
              exit: this.state.exit,
              type: this.state.selectedb,
              })}
            >
              <Text style={{paddingTop:"25%" ,textAlign: 'center', fontSize: 15, color: "black"}}>Submit Navigation</Text>
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

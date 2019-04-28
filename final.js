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
import firebase from 'react-native-firebase';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class final extends Component<Props> {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Results",

    headerStyle:
    {
      backgroundColor: "blue",
    },

    headerTintColor: 'white',
    headerRight:
    <Button title="Menu" onPress={()=>{ navigation.navigate('Premium');}} backgroundColor="white"><Text color="#03f">Premium Membership</Text></Button>,
  });

  tollPlazas = firebase.firestore().collection('Barriers');
  constructor(props) {
    super(props);
    this.state = {
      tolls: [],
    };
  }

  componentWillMount() {
    this.tollPlazas.get()
    .then((response) => {
      var barriers = [];
      response.docs.forEach(function(doc) {
        barriers.push(doc.data());
      });

      this.setState({tolls: barriers});
    })
    .catch((error) => alert(error));
  }

  totalCostCalc(entrance, exit, direction)
  {
    var cost = 0;
    for(var i = 0; i < this.state.tolls.length; i++)
    {
      if((this.state.tolls[i].dir == "N" || this.state.tolls[i].dir == "N/S") && direction == "north")
      {
        if(parseFloat(this.state.tolls[i].dist) >= parseFloat(entrance.entrance) && (parseFloat(this.state.tolls[i].dist) <= parseFloat(exit.exit)))
        {
          cost += parseFloat(this.state.tolls[i].toll);
        }
      }
      else if((this.state.tolls[i].dir == "S" || this.state.tolls[i].dir == "N/S") && direction == "south")
      {
        if(parseFloat(this.state.tolls[i].dist) <= parseFloat(entrance.entrance) && (parseFloat(this.state.tolls[i].dist) >= parseFloat(exit.exit)))
        {
          cost += parseFloat(this.state.tolls[i].toll);
        }
      }
    }
    if(entrance.hasOwnProperty("toll"))
    {
      cost += parseFloat(entrance.toll);
    }
    if(exit.hasOwnProperty("toll"))
    {
      cost += parseFloat(exit.toll);
    }
    return(cost);
  }

  render() {

    const road = this.props.navigation.getParam('road', 'N/A');
    const direction = this.props.navigation.getParam('direction', 'N/A');
    const entrance = this.props.navigation.getParam('entrance', 'N/A');
    const exit = this.props.navigation.getParam('exit', 'N/A');
    const type = this.props.navigation.getParam('type', 'N/A');
    return (
      <Container style={{borderWidth: 10, borderColor: 'green', borderTopWidth: 0, backgroundColor: "D3D3D3",}}>
        <Content style={{width: "80%", marginLeft: "10%", marginTop: "10%", }}>
          <View style={{}}>
          <Text style={styles.texts}>Road: {road}</Text>
          <Text style={styles.texts}>Direction of Travel: {direction}</Text>
          <Text style={styles.texts}>Entrance Name: {entrance.name}</Text>
          <Text style={styles.texts}>Entrance Number: {entrance.entrance}</Text>
          <Text style={styles.texts}>Exit Name: {exit.name}</Text>
          <Text style={styles.texts}>Exit Number: {exit.exit}</Text>
          <Text style={styles.texts}>Type of Vehicle: {type}</Text>
          <Text style={styles.texts}>Total Cost on Roadway: ${this.totalCostCalc(entrance, exit, direction)}</Text>
          <View style={{justifyContent: 'center', alignItems:'center', flexDirection: 'row', color: "black"}}>
            <Button onPress={() => this.props.navigation.navigate('App')} style={{ justifyContent: 'center', alignItems:'center', marginLeft: "5%",width: "42.5%", paddingBottom: "11%", paddingLeft: "5%", paddingRight: "2%"}}>
              <Text style={{ color: "black"}}>Logout</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Second')} style={{justifyContent: 'center', alignItems:'center', marginLeft: "5%", width: "42.5%", marginRight:"5%", paddingBottom: "11%", paddingLeft: "5%", paddingRight: "2%"}}>
              <Text style={{ color: "black"}}>Enter Another Navigation</Text>
            </Button>
          </View>
          </View>
        </Content>
      </Container>


    );
  }
}

const styles = StyleSheet.create(
{
  texts:
  {
      marginBottom: "5%",
      fontSize: 20,
      color: "black"
  }
});

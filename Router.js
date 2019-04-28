import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from './App';
import Second from './Second';
import CreateAccount from './CreateAccount';
import Class from './Class';
import Classsecond from './Classsecond';
import Premium from './Premium';
import final from './final';

const Router = createStackNavigator(
  {
    App,
    Second,
    CreateAccount,
    Class,
    Classsecond,
    Premium,
    final,
  },
  {
    initialRouteName: 'App',
  }
);

export default createAppContainer(Router);

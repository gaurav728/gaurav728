/**
 * @format
 */
import 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

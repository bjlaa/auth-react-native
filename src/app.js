import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD9qsZpdn29n_2n8m2A2IQ0d_7fOW5cb9U',
      authDomain: 'react-native-course-auth.firebaseapp.com',
      databaseURL: 'https://react-native-course-auth.firebaseio.com',
      storageBucket: 'react-native-course-auth.appspot.com',
      messagingSenderId: '60467267807',
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

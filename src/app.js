import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: null,
    };

    this.renderContent = this.renderContent.bind(this);
  }


  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD9qsZpdn29n_2n8m2A2IQ0d_7fOW5cb9U',
      authDomain: 'react-native-course-auth.firebaseapp.com',
      databaseURL: 'https://react-native-course-auth.firebaseio.com',
      storageBucket: 'react-native-course-auth.appspot.com',
      messagingSenderId: '60467267807',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <CardSection>
            <Spinner />
          </CardSection>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

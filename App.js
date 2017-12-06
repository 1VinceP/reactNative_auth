import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar, Header } from './src/components/common/index';
import LoginForm from './src/components/LoginForm';

class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCuCEuh8Yvs5P-UAEk2rq0eWdjgCoDt-kw',
      authDomain: 'native-auth-practice.firebaseapp.com',
      databaseURL: 'https://native-auth-practice.firebaseio.com',
      projectId: 'native-auth-practice',
      storageBucket: 'native-auth-practice.appspot.com',
      messagingSenderId: '758922250797'
    })
  }

  render() {
    return (
      <View>
        <StatusBar />
        <Header title={'Authentication'} color={'#fc9f00'} />
        <LoginForm />
      </View>
    );
  }
}

export default App;
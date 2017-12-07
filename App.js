import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar, Header, CardSection, Button, Spinner } from './src/components/common/index';
import LoginForm from './src/components/LoginForm';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: null
    }
  }

  componentWillMount() {
    firebase.initializeApp({
      
    })

    firebase.auth().onAuthStateChanged( ( user ) => {
      if( user )
        this.setState({ loggedIn: true })
      else
        this.setState({ loggedIn: false })
    } )
  }

  renderContent() {

    switch( this.state.loggedIn ) {
      case true:
        return (
          <CardSection>
            <Button pressed={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        )
      case false:
        return <LoginForm />
      default:
        return <CardSection><Spinner size='large' /></CardSection>
    }

    
  }

  render() {
    return (
      <View>
        <StatusBar />
        <Header title={'Authentication'} color={'#fc9f00'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

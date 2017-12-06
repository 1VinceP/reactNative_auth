import React, { Component} from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common/index';

class LoginForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        }

        this.onLoginSuccess = this.onLoginSuccess.bind(this)
        this.onLoginFail = this.onLoginFail.bind(this)
    }
    

    onButtonPress() {
        const { email, password } = this.state

        this.setState({
            error: '',
            loading: true
        })

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( () => this.onLoginSuccess() )
            .catch( ( err ) => {
                console.log(err);
                firebase.auth().createUserWithEmailAndPassword( email, password )
                    .then( () => this.onLoginSuccess() )
                    .catch( ( err ) => this.onLoginFail( err ) )
            })
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        })
    }

    onLoginFail(err) {
        this.setState({
            error: err.message,
            loading: false
        })
    }

    renderButton() {
        if( this.state.loading )
            return <Spinner size={'small'} />

        return (
            <Button pressed={() => this.onButtonPress()}>
                Log In
            </Button>
        )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input value={this.state.email}
                           label={'Email'}
                           onChangeText={email => this.setState({ email })}
                           placeholder={'user@gmail.com'}
                    />
                </CardSection>

                <CardSection>
                    <Input value={this.state.password} 
                           label={'Password'}
                           onChangeText={password => this.setState({ password })}
                           placeholder={'********'}
                           secure={true}
                    />
                </CardSection>

                <Text style={styles.error}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}                    
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    error: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;
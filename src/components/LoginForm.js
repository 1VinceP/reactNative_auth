import React, { Component} from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common/index';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    }

    onButtonPress() {
        const { email, password } = this.state

        this.setState({
            error: ''
        })

        firebase.auth().signInWithEmailAndPassword( email, password )
            .catch( (err) => {
                console.log(err);
                firebase.auth().createUserWithEmailAndPassword( email, password )
                    .catch( (err) => {
                        console.log(err);
                        this.setState({ error: err.message });
                    })
        })
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
                    <Button pressed={() => this.onButtonPress()}>
                        Log In
                    </Button>
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
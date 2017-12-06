import React from 'react';
import { View, Text, TextInput } from 'react-native';

function Input( props ) {
    const { container, label, input } = styles

    return (
        <View style={container}>
            <Text style={label}>{props.label}</Text>
            <TextInput style={input}
                       value={props.value}
                       onChangeText={props.onChangeText}
                       underlineColorAndroid={'transparent'}
                       placeholder={props.placeholder}
                       secureTextEntry={props.secure}
                       autoCorrect={false}
            />
        </View>
    )
}

const styles = {
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    input: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    }
}

export { Input };
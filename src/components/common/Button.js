import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

function Button( props ) {

    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={props.pressed}>
            <Text style={styles.textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fc9f00',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fc9f00',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}

export { Button }
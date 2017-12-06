import React from 'react';
import { View } from 'react-native';

function StatusBar() {
    return (
        <View style={styles.statusBar} />
    )
}

const styles = {
    statusBar: {
        width: '100%',
        height: 24,
        backgroundColor: '#fc7500'
    }
}

export { StatusBar }
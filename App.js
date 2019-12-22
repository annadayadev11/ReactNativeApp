

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';


export default function App() {
    return (
      <View style={styles.container}>
        <Text>This is the Test Deployment App</Text>
        <TextInput value="Ann Adaya" />

      </View>

    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    
  }
});


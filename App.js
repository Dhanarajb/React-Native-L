/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, Text, View} from 'react-native';

function App() {
  const name = 'John';
  const age = 19;
  const email = 'john@tech.com';
  const detail = () => {
    return `${name}-${age}-${email}`;
  };
  return (
    <View class>
      <Text style={{fontSize: 30}}>Name : {name}</Text>
      <Text style={{fontSize: 30}}>Age : {age}</Text>
      <Text style={{fontSize: 30}}>Email : {email}</Text>
      <Text style={{fontSize: 30}}>
        {age > 18 ? detail() : 'You are under age'}
      </Text>
      <Button title="Press Here"></Button>
    </View>
  );
}

export default App;

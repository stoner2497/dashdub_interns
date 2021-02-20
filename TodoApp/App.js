import React from 'react';
import {View, Text} from 'react-native';
import FirstFile from './src/scripts/components/firstFile';
import SecondFile from './src/scripts/components/SecondFile';
export default function App() {
  return (
    <View>
      <FirstFile>
        <Text>hello world</Text>
      </FirstFile>
      <SecondFile />
    </View>
  );
}

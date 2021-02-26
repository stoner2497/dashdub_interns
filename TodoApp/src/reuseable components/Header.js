import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function Header(props) {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    width: 450,
    height: 80,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderText: {
    color: 'white',
    fontSize: 18,
  },
});

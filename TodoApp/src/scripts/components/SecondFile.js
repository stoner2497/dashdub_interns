import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default class SecondFile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      show: false,
    };
  }

  onPressHandler = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const {name, show} = this.state;
    return (
     <ScrollView>
          <View>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(value) => this.setState({name: value})}
        />
        <TouchableOpacity style={styles.btn} onPress={this.onPressHandler.bind(this)}>
          <Text>Show Me</Text>
        </TouchableOpacity>
        {show ? <Text>{name}</Text> : null}
      </View>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    
  },
  btn:{
      borderWidth:1,
      borderColor:'yellow',
      padding:10,
      width:100,
      height:50,
      marginLeft:30,
      borderRadius:60,
    backgroundColor:'red'
    }
});

import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default function Edit(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onUpload = () => {
    const data = {
      title,
      description,
    };
    console.log(props.id)
    axios
      .post(`http://192.168.1.10:5000/edit/${props.id}`, data)
      .then((res) => {
        console.log(res);
        if (res.data) {
          Actions.Home();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.Container}>
      <View style={styles.banner}>
        <Text>Add</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={title}
          onChangeText={(text) => setTitle(text)}
          style={styles.inputBox}
          placeholder="title"
        />
        <TextInput
          value={description}
          onChangeText={(text) => setDescription(text)}
          style={styles.inputBox}
          placeholder="description"
        />
      </View>
      <View>
        <TouchableOpacity style={styles.btn} onPress={onUpload}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: 20,
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    padding: 10,
  },
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    width: 350,
  },
  btn: {
    width: 100,
    height: 30,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

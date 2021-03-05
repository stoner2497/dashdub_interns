import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';
import Header from '../../reuseable components/Header';
import {Actions} from 'react-native-router-flux';

export default class SecondFile extends Component {
  constructor(props) {
    super(props);

    this.todoItem = [];

    this.state = {
      name: '',
      email: '',
      todos: [],
      show: false,
      loader: false,
    };
  }

  onPressHandler = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  componentDidMount() {
    this.setState({
      loader: true,
    });
    axios
      .get('http://192.168.1.10:5000/')
      .then((response) => {
        console.log(response.data, 'data.......');
        this.setState({
          todos: response.data,
          loader: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onEdit = (id) => {
    console.log(id,'id');
    Actions.Edit({id});
  };

  _renderItem = ({item}) => (
    <View style={styles.todoBox}>
      <Text style={styles.todoBoxText}>{item.title}</Text>
      <View style={styles.textContainer}>
        {item.completed ? (
          <Text style={styles.Completed}>Completed</Text>
        ) : (
          <Text style={styles.inComplete}>Not Completed</Text>
        )}
      </View>
      <TouchableOpacity onPress={this.onEdit.bind(this, item._id)}>
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    const {name, show, todos, loader} = this.state;
    console.log(todos);
    return (
      <View style={styles.Container}>
        {todos !== null ? (
          <>
            <Header title="Todo List" />
            {loader ? (
              <View>
                <ActivityIndicator size="large" color="black" />
              </View>
            ) : (
              <FlatList data={todos} renderItem={this._renderItem} />
            )}
          </>
        ) : (
          <Text>No Todo's to show</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
  },
  btn: {
    borderWidth: 1,
    borderColor: 'yellow',
    padding: 10,
    width: 100,
    height: 50,
    marginLeft: 30,
    borderRadius: 60,
    backgroundColor: 'red',
  },
  todoBox: {
    width: 400,
    height: 100,
    borderWidth: 0.6,
    borderColor: 'blue',
    padding: 10,
    marginTop: 15,
  },
  todoBoxText: {
    fontSize: 18,
  },
  Completed: {
    color: 'green',
    fontSize: 16,
    textAlign: 'center',
  },
  inComplete: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  textContainer: {
    marginTop: 20,
  },
});

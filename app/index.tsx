import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [data, setData] = useState(undefined);
  const getAPIData = async () => {
    let url = 'https://v2.jokeapi.dev/joke/Any?type=single';
    let response = await fetch(url);
    let data = await response.json();
    setData(data);
  };
  useEffect(() => {
    getAPIData();
  }, []);

  return data ? (
    <View style={styles.container}>
      <Text style={{ color: 'black', fontSize: 20 }}>Joke:{data.joke}</Text>
      <TouchableOpacity style={styles.button} onPress={getAPIData}>
        <Text style={styles.buttonText}>Get a Joke</Text>
      </TouchableOpacity>
    </View>
  ) : null;
};
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'beige',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  button: {
    margin: 10,
    padding: 16,
    backgroundColor: 'green',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 15,
    shadowOpacity: 1,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

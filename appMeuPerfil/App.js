import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component {
  render() {
    let legenda = "Aluno da FATEC RUBENS LARA, atualmente cursa Sistemas para Internet, gosta da área de segurança da informação.";


    return (
      <View style={styles.container}>
        <Image
          source={{
            uri:
              'https://avatars.githubusercontent.com/u/69723917?s=400&u=94ce4584978846589890f11d6c69b207647e26e0&v=4'
          }}
          style={{ width: 250, height: 250, borderRadius: 250 }}
        />

        <Text style={{ textAlign: 'center', fontSize: 30, paddingTop: 15 }}>
          Christian Alves Pinheiro
        </Text>

        <Text style={{ color: '#333', fontSize: 16, margin: 15, textAlign: 'justify' }}>{legenda}</Text>
        <a target="_blank" href='https://github.com/christianpinheiro'>Github</a>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcbfcb',
    alignItems: 'center',
    justifyContent: 'center',
  },


});

export default App
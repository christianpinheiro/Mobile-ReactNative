import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component{
  render(){

    let nome = 'Christian';
    let img = 
  'https://avatars.githubusercontent.com/u/69723917?s=400&u=94ce4584978846589890f11d6c69b207647e26e0&v=4';

    return (
      <View>
        <Text> Olá Turma </Text>
        <Text> Meu primeiro App </Text>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
         React Native
        </Text>

        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300}}
        />

        <Text style={{ fontSize: 30 }}>{nome}</Text>
      </View>
    )
  }
}
export default App;


import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: ''
    };
    
    this.mostrar = this.mostrar.bind(this);
  }
 
  mostrar(){
   var num = Math.floor(Math.random() * 11);
   this.setState ({resultado: `O número sorteado foi ${num}.`})   
  }

  render(){
    let img = "http://pm1.narvii.com/6703/6eb2d6feb2e955f94c433879ffb186d54364c60b_00.jpg";

    return(
      <View>

      <Text style={styles.titulo}> Jogo do Nº Aleatório </Text>

      <Image
          source={{ uri: img }}
          style={styles.imag}
        />

      <TextInput
        style={styles.input}
        placeholder="Digite um número de 0 a 10"
        />
 
 
      <Button  title="Descobrir" onPress={this.mostrar} />
 
      <Text style={styles.texto}> {this.state.resultado} </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

  titulo: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20
  },

  imag: {
    width: 250, 
    height: 250, 
    margin: 50
  },

  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    margin: 20
  }

  
})
 
export default App;
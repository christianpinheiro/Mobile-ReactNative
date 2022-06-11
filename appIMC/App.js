import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      peso: '',
      altura: '',
      alerta: ''
    };
    
    this.calcular = this.calcular.bind(this);
  }
 
  calcular(){
    if ( (this.state.peso === '') || (this.state.altura === '') ){
      alert('Digite o peso e altura !')
      return;
    }

    var calc  = (this.state.peso / (this.state.altura**2));

    if ((calc < 18.5)) {
      return(
        this.setState ({ alerta: 'Abaixo do peso.'})
      )
    } else if ((calc >= 18.5 && calc < 25)) {
      return(
        this.setState ({ alerta: 'Peso normal.'})
      )   
    } else if ((calc >= 25 && calc < 29.9)) {
      return(
        this.setState ({ alerta: 'Sobrepeso.'})
      )
    } else if ((calc >= 30 && calc < 35)) {
      return(  
        this.setState ({ alerta: 'Obesidade Grau 1.'})
      )
    } else if ((calc >= 35 && calc < 40)) {
      return(
        this.setState ({ alerta: 'Obesidade Grau 2.'})
      )
    } else { 
      return(
        this.setState ({ alerta: 'Obesidade Grau 3 ou Mórbida.'}) 
      )     
    };     
  }
 
  render(){
    let img = "https://www.saudebemestar.pt/media/89347/obesidade.jpg";

    return(
      <View>


      <Text style={styles.titulo}>  Cálculo do IMC </Text>

      <Image
          source={{ uri: img }}
          style={styles.imag}
        />
 
      <TextInput
      style={styles.input}
      placeholder="Digite seu peso"
      onChangeText={ (texto) => this.setState({peso: texto})}
      />

      <TextInput
      style={styles.input}
      placeholder="Digite sua altura"
      onChangeText={ (texto) => this.setState({altura: texto})}
      />
 
      <Button  title="Calcular" onPress={this.calcular} />
 
      <Text style={styles.texto}> {this.state.alerta} </Text>
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
    margin: 40
  },

  imag: {
    width: 550, 
    height: 350, 
    margin: 50
  },

  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    margin: 20
  }

  
})
 
export default App;
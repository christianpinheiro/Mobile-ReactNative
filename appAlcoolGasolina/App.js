import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      alcool: '',
      gasolina: '',
      alerta: ''
    };
    
    this.calcular = this.calcular.bind(this);
  }
 
  calcular(){
    if ( (this.state.alcool === '') || (this.state.gasolina === '') ){
      alert('Digite o preço !')
      return;
    }
    var calc  = this.state.alcool / this.state.gasolina

    if ((calc < 0.7)) {
      this.setState ({ alerta: 'Melhor abastecer com Álcool.'})
    } else {
      this.setState ({ alerta: 'Melhor abastecer com Gasolina.'})
    };
    
  }
 
  render(){

    let img = "https://cidadeverde.com/noticias/editor/assets/img60/livio/gasolina_preco.jpg";

    return(
      <View>


      <Text style={styles.titulo}>  Álcool ou Gasolina? </Text>

      <Image
          source={{ uri: img }}
          style={styles.imag}
        />
 
      <TextInput
      style={styles.input}
      placeholder="Digite o preço do Álcool"
      onChangeText={ (texto) => this.setState({alcool: texto})}
      />

      <TextInput
      style={styles.input}
      placeholder="Digite o Preço da Gasolina"
      onChangeText={ (texto) => this.setState({gasolina: texto})}
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
    width: 250, 
    height: 250, 
    margin: 50,
    textAlign: 'center'
  },

  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 20,
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
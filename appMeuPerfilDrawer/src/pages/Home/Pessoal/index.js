import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';





export default function Pessoal(){

    return(
        
        <View style={styles.container}>
         <View>

          
          <Home />
          
          </View>
          <View style={styles.viewtexto} >
            <Text style={styles.texto} >Pessoal</Text>
          </View>
          <View>
            <Text style={styles.info} >Nome completo: Christian Alves Pinheiro</Text>
            <Text style={styles.info} >Cidade: Guarujá </Text>
            <Text style={styles.info} >Faculdade: FATEC Rubens Lara</Text>
          </View>
      </View>

    )
}
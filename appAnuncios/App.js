import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
 
class App extends Component{
  render(){

    const img1 = "https://images.kabum.com.br/produtos/fotos/181089/processador-amd-ryzen-7-5700g-3-8ghz-4-6ghz-max-turbo-am4-video-integrado-8-nucleos-100-100000263box_1627588652_gg.jpg";

    const img2 = "https://images.kabum.com.br/produtos/fotos/81132/81132_index_gg.jpg";

    const img3 = "https://images.kabum.com.br/produtos/fotos/81454/cadeira-gamer-alpha-gamer-vega-black_1608292452_gg.jpg";

    const img4 = "https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067301_gg.jpg";

    const img5 = "https://images.kabum.com.br/produtos/fotos/282794/monitor-lg-23-8-full-hd-ips-hdmi-vesa-freesync-sem-bordas-preto-24mp400_1638820983_gg.jpg";

    const img6 = "https://images.kabum.com.br/produtos/fotos/155473/smartphone-samsung-galaxy-s20-fe-128gb-6gb-ram-octa-core-camera-tripla-carregamento-super-rapido-cloud-navy-sm-g780gzbrzto_1620393794_gg.jpg";

    const img7 = "https://images.kabum.com.br/produtos/fotos/315682/computador-gamer-onpress-powered-by-asus-i5-10400f-rgb-nvidia-geforce-gtx-1660-super-16gb-ssd-480gb-linux-preto-ong104ft66s16m482_1646941207_gg.jpg";


    return(
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <View style={styles.box}>
            <Text style={styles.promo}> Processador AMD Ryzen 7 5700G, 3.8GHz</Text>
            <Image
              source={{ uri: img1 }}
              style={styles.tamanho}/>

              <Text style={styles.descricao}> R$ 1.799,90 </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.promo}> Headset Gamer HyperX Cloud Stinger </Text>
            <Image
              source={{ uri: img2 }}
              style={styles.tamanho}/>

              <Text style={styles.descricao}> R$ 249,90 </Text>
          </View>

          <View style={styles.box}>
              <Text style={styles.promo}> Cadeira Gamer Alpha Gamer Vega </Text>
              <Image
              source={{ uri: img3 }}
              style={styles.tamanho}/>

              <Text style={styles.descricao}> R$ 1.189,90 </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.promo}> Console Microsoft Xbox Series S </Text>
            <Image
              source={{ uri: img4 }}
              style={styles.tamanho}/>

              <Text style={styles.descricao}> R$ 2.249,90 </Text>
          </View>

          <View style={styles.box}>
             <Text style={styles.promo}> Monitor LG 23.8 Full HD, IPS, HDMI</Text>
             <Image
              source={{ uri: img5 }}
              style={styles.tamanho}/>

              <Text style={styles.descricao}> R$ 899,90 </Text>
          </View>

          <View style={styles.box}>
             <Text style={styles.promo}> Smartphone Samsung Galaxy S20 FE 128GB  </Text>
             <Image
              source={{ uri: img6 }}
              style={styles.tamanho}/>
              <Text style={styles.descricao}> R$ 1.889,00 </Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.promo}> PC Gamer On Gaming Powered By Asus i5 10400F </Text>
            <Image
              source={{ uri: img7 }}
              style={styles.tamanho}/>
              <Text style={styles.descricao}> R$ 7.799,90 </Text>
          </View>
         
        </ScrollView>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 20
  },
  box:{
    borderColor: '#e3e3e3',
    borderWidth: 1,
    height: 300,
    width: 250,
    marginLeft: 8,
    backgroundColor: 'transparent'
  },
  promo: {
    backgroundColor: '#32CD32',
    height: 70,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    padding: 10
  },
  tamanho: {
    margin: 18,
    marginLeft: 40,
    width: 170,
    height: 170,
  },

  descricao: {
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: 18
  }
});

export default App;
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import CustomImage from './components/CustomImage';

import imageLocal from './assets/img/save-planet.jpg';

const ImageRemotaURI = 'https://image.freepik.com/vetores-gratis/ilustracao-do-dia-mundial-do-meio-ambiente-desenhada-a-mao-para-salvar-o-planeta_52683-61570.jpg';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' backgroundColor='#222'/>

      <View>
        <Text style={styles.tituloView}>Três Formas de Inserir Imagens</Text>
         <CustomImage 
          fromWeb={true}
          image={ImageRemotaURI}
          title={'Imagem Remota com "uri"'}
          width={200}
          height={200}
        />
        <CustomImage 
          fromWeb={false}
          image={require('./assets/img/florest.jpg')}
          title={'Imagem Local com "require"'}
          width={213}
          height={150}
        />
        <CustomImage 
          fromWeb={false}
          image={imageLocal}
          title={'Imagem Local com "import"'}
          width={213}
          height={200}
        />
       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
  tituloView: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

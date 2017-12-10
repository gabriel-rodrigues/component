/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  AlertIOS,
  View,
  Alert
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bottomView}>
          <Button title='Botão Alerta IOS/Android' onPress={ () => this.handlerOnPress() }/>
        </View>
      </View>
    );
  }
  

  handlerOnPress() {

    if(Platform.OS === "ios") {
       this.botaoIos();
    }
    else {
      this.botaoAndroid();
    }

  }

  botaoIos() {

      AlertIOS.alert(
        'Componente Alerta',
        'Mensagens de Alerta',
        [
          {text: 'Pergunte-me depois',
           onPress: () => console.log('Ask me later pressed')},
          {text: 'Cancelar', 
          onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', 
          onPress: () => console.log('OK Pressed')},
        ]
      )
  };

  botaoAndroid() {
    
          Alert.alert(
            'Componente Alerta',
            'Mensagens de Alerta',
            [
              {text: 'Pergunte-me depois',
               onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancelar', 
              onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', 
              onPress: () => console.log('OK Pressed')},
            ]
          )
      };

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  bottomView: {
    flexDirection: 'column',
    paddingRight: 20,
    paddingLeft: 20
  },
  input: {
    marginBottom: 20
  }

});

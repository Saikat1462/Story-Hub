import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput,Image } from 'react-native';
import { Header } from 'react-native-elements';
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics,
  } from 'react-native-safe-area-context';
  import AppHeader from '../components/AppHeader'

export default class WriteScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
      <AppHeader/>
          <View style={styles.inputView}>
          <TextInput style={styles.inputBox}
          placeholder="Story Title"
          />
          </View>

          <View style={styles.inputView}>
          <TextInput style={styles.inputBox}
          placeholder="Author"
          />
          </View>

          <View style={styles.inputView}>
          <TextInput style={styles.inputBox}
          multiline={true}
          numberOfLines={10}
          placeholder="Write your story"
          />
          </View>

          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Scan</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    inputBox:{
      width:200,
      height:40,
      borderRightWidth:0,
      borderWidth:1.5,
      fontSize:20,
    },
    inputView:{
      flexDirection:"row",
      margin:20
    },
    button:{
      backgroundColor:"#66bb6a",
      width:50,
      borderWidth:1.5,
      borderLeftWidth:0,
    },
    buttonText:{
      fontSize: 15,
      textAlign:"center",
    },
})
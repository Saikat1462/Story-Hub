import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ReadScreen from './screens/ReadStoryScreen'
import WriteScreen from './screens/WriteStoryScreen'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator=createBottomTabNavigator({
  Read:{screen:ReadScreen},
  Write:{screen:WriteScreen},
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName=navigation.state.routeName
      if(routeName==='Read'){
        return(
          <Image source={require("./assets/read.png")}
          style={{width:40, height:30}}/>
        )
      }else if (routeName==='Write'){
        return (
          <Image source={require("./assets/write.png")}
          style={{width:40, height:30}}/>
        )
      } 
    }
  })
})

const AppContainer=createAppContainer(
  TabNavigator
)
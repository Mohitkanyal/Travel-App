import { View, Text ,StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const home = () => {
  return (
    <Stack.Screen options={{
      headerTransparent: true,
      headerTitle : "GLOBEXPLORE",
      headerTitleAlign:'center',
      headerTitleStyle:{fontWeight: 'bold',fontSize:22},
      headerLeft: () => (
        <TouchableOpacity onPress={() => {}} style={{marginLeft: 20,backgroundColor: Colors.white,
          padding: 10,
          borderRadius: 10,
          shadowColor: '#171717',
          shadowOffset: {width: 2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,}}>
          <Ionicons name='person-circle' size={20} color={Colors.black} back/>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => {}} style={{
          marginRight: 20, 
          backgroundColor: Colors.white,
          padding: 10,
          borderRadius: 10,
          shadowColor: '#171717',
          shadowOffset: {width: 2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        }}>
          <Ionicons name='notifications' size={20} color={Colors.black}/>
        </TouchableOpacity>
      ),
    }}/>
  )
}

export default home
const styles = StyleSheet.create ({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})
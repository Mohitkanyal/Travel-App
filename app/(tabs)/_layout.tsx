import { View, Text } from 'react-native';
import React from 'react';
import {Tabs} from 'expo-router';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Colors  from '@/constants/Colors';
const _layout = () => {
  
  return (
    <Tabs screenOptions={{
        tabBarStyle:{
            backgroundColor:Colors.bgcolor,
            borderTopWidth:0,
            padding:0,
        },
        tabBarShowLabel:false,
        tabBarActiveTintColor:Colors.black,
        tabBarInactiveTintColor:'#999',
    }}>
        <Tabs.Screen name='home' 
        options={{tabBarIcon:({color})=>
        (<MaterialIcons name='space-dashboard' size={28} color={color}/>)}}/> 
        <Tabs.Screen name='ourtrip' 
        options={{tabBarIcon:({color})=>
        (<Ionicons name='bookmark' size={28} color={color}/>)}}/>
        <Tabs.Screen name='search'        
        options={{tabBarIcon:({color})=>
        (   <View style={{backgroundColor:Colors.black,paddingHorizontal:10,paddingVertical:10,borderRadius:50}}>
            <Ionicons name='search' size={28} color={Colors.white}/>
            </View>)}}/>
        <Tabs.Screen name='discover' 
        options={{tabBarIcon:({color})=>
        (<Ionicons name='compass' size={28} color={color}/>)}}/>
        <Tabs.Screen name='profile' 
        options={{tabBarIcon:({color})=>
        (<FontAwesome name='user' size={28} color={color}/>)}}/>
    </Tabs>
  )
}

export default _layout
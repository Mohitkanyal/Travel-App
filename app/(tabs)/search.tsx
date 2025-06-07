import { View, Text ,StyleSheet ,TextInput} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { Stack } from 'expo-router'
import {useHeaderHeight} from '@react-navigation/elements';



const home = () => {
  const headerHeight=useHeaderHeight();
  return (
    <>
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
    <View >
    <View style={[styles.searchSection,{paddingLeft:20},{paddingTop:headerHeight}]}>
      <View style={styles.searchBar} >
        <Ionicons name="search" size={25} />
        <TextInput placeholder='Search...'/>
      </View><View style={{paddingRight:15}}>
      <TouchableOpacity onPress={()=>{}} style={styles.filterBtn}>
        <Ionicons name='options' size={28} color={Colors.white}/>
      </TouchableOpacity>
      </View>
    </View>

    </View>
    </>
  )
}

export default home
const styles = StyleSheet.create ({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    searchSection:{
      flexDirection:'row',
      marginVertical:20
    }
    ,
    searchBar:{
      flex:1,
      flexDirection:'row',
      padding:10,
      borderRadius:10,
      backgroundColor:Colors.white,

    },
    filterBtn:{
      backgroundColor:Colors.black,
      padding:10,
      borderRadius:10,
      marginLeft:20,

    }
})
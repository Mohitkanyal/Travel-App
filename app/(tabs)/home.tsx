import { View, Text ,StyleSheet, Image, TextInput , Dimensions} from 'react-native'
import React ,{useState}from 'react'
import { Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import {useHeaderHeight} from '@react-navigation/elements';
import { SearchBar } from 'react-native-screens'
import CategoryButtons from '@/components/CategoryButtons';
import Listings from '@/components/Listings';
import listingData from '@/data/destination.json'
import Indialist from '@/components/Indialist'
import IndiaData from '@/data/Indiadest.json'


import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
type Props = {
  listings: any[]; 
  Indialist:any[];
};


const home = () => {
  const headerHeight=useHeaderHeight();
  const { width, height } = Dimensions.get('window');
  const [category, setCategory] = useState('All');
  const onCatChanged = (category: string) => {

    console.log("Category: ",category);
    
    setCategory(category);}
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
    <View style={[styles.container,{paddingTop:headerHeight}]}>
      {/* <Text style={styles.headingtxt}>Explore The Beautiful World!</Text> */}
    {/* <CategoryButtons onCategoryChanged={onCatChanged}/> */}
    <GestureHandlerRootView>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Image
        source={require('./home.jpg')}
        style={styles.image} />
        <Text style={styles.title}>The Whole World in One Place </Text>
        <Text style={styles.newText}>Discover the most unique places </Text>
        

        {/* <Text style={styles.heroText}>
        "To travel is to live"
        </Text> */}
        {/* <Text >{'\u2022'}Item 1</Text> */}
        {/* <Text >{'\u2022'}Item 1</Text>
        <Text >{'\u2022'}Item 1</Text> */}
      {/* <Text style={styles.popularTxt}>Popular Destinations</Text>
        */}
       

    <View>
      <Text></Text>
      <Text style={styles.headingtxt}>International</Text>
      <Text></Text>

    </View>

    <Listings listings={listingData} />
    <View>
    <Text></Text>

      <Text style={styles.headingtxt}>India</Text>
      <Text></Text>

    </View>
    <Indialist Indialist={IndiaData}/>
    </ScrollView>
    </GestureHandlerRootView>
    </View>
    
    </>
  )
}

export default home

const styles = StyleSheet.create ({
  image:{
    height:500,
    width:'100%',
    resizeMode:'cover',
    position:'relative',
  }
,
title: {
  color: 'white',
  position:'absolute',
  // bottom:200,
  top:300,
  left:17,
  fontSize:40,
  width:300,
  // fontWeight:'bold',
  // width:320,
  // textAlign:'center',
  // textDecorationLine:'underline',
  textDecorationStyle:'dotted',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  fontFamily:'outfit-ExtraBold'
 
},
newText:{
  color: 'white',
  position:'absolute',
  top:465,
  left:17,
  fontSize:17,
  fontFamily:'outfit',
},
heroText:{
  color:'gray',
  fontSize:30,
  textAlign:'center',
  top:10,
  padding:15,
  fontFamily:'outfit-med',
},
popularTxt:{
  fontFamily:'outfit-semib',
  fontSize:30,
  marginTop:20,
  left:5
},
    container: {
        flex: 1,
        padding:20,
        backgroundColor:Colors.bgcolor,

        
    },
    headingtxt:{
        fontSize:28,
        fontWeight:'800',
        color:Colors.black
    },
    

})

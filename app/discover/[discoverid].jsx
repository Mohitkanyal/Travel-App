import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView , Modal , ActivityIndicator} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import { db } from '../../config/firbase';
import { doc, getDoc,collection,getDocs,limit,query } from 'firebase/firestore';
import { useLocalSearchParams, useNavigation } from 'expo-router';


export default function DiscoverDetail() {
  const { discoverid } = useLocalSearchParams();
  const navigation = useNavigation();
  const [discoverDetail, setDiscoverDetail] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading,isLoading] = useState(true);

    const openModal = (imageUri) => {
        setSelectedImage(imageUri);
        setModalVisible(true);
    };


  useEffect(() => {
    if (discoverid) {
      getDiscoverDetail();
    }
  }, [discoverid]);

  const getDiscoverDetail = async () => {
    const docRef = doc(db, 'Discover', discoverid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log("Discover data:", data);
      setDiscoverDetail(data);
      isLoading(false)

      navigation.setOptions({
        headerShown: true,
        headerTitle: data.name,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name='arrow-back' size={24} style={{ paddingRight: 10 ,left:0}} />
          </TouchableOpacity>
        ),
      });
    } else {
      console.log("No such document in Discover!");
      setDiscoverDetail(null);
    }
  };

  if(loading){
    return (
      <View style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center',}}>
          <ActivityIndicator size="large" color="black" />
          <Text>Loading...</Text>
        </View>
      );
    }





    return (
      <GestureHandlerRootView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {discoverDetail && (
            <View style={styles.detailContainer}>
              <Image source={{ uri: discoverDetail.image }} style={styles.image} />
              <View style={styles.contentwrapper}>
                
                <Text style={styles.IndialistName}>{discoverDetail.name}</Text>
                <Text style={styles.Indialistdetails}>{discoverDetail.info}</Text>
                <Text style={{ fontFamily: 'outfit-semib', top: 10, padding: 10, fontSize: 20,marginBottom:10 }}>#Image Gallery</Text>
                
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.imageScrollContainer}
              >
                <TouchableOpacity onPress={()=>openModal(discoverDetail.gal1)}>
                <Image style={styles.itemImage} source={{ uri: discoverDetail.gal1 }} /></TouchableOpacity>
                <TouchableOpacity onPress={()=>openModal(discoverDetail.gal2)}>
                <Image style={styles.itemImage} source={{ uri: discoverDetail.gal2 }} /></TouchableOpacity>
                <TouchableOpacity onPress={()=>openModal(discoverDetail.gal3)}>
                <Image style={styles.itemImage} source={{ uri: discoverDetail.gal3 }} /></TouchableOpacity>
                <TouchableOpacity onPress={()=>openModal(discoverDetail.gal4)}>
                <Image style={styles.itemImage} source={{ uri: discoverDetail.gal4 }} /></TouchableOpacity>


                <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
        <TouchableOpacity style={{ flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',padding:10}} onPress={() => setModalVisible(false)}>
                    <Image
                        source={{ uri: selectedImage }}
                        style={{width: '100%',
                          height: '100%',}}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </Modal>
              </ScrollView>
              </View>
            </View>
          )}
        </ScrollView>
      </GestureHandlerRootView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // paddingTop: 96,
    },
    scrollViewContent: {
      paddingBottom: 80,
    },
    detailContainer: {
      marginBottom: 20,
    },
    image: {
      width: '100%',
      height: 250,
      resizeMode: 'cover',
    },
    contentwrapper: {
      padding: 10,
    },
    IndialistName: {
      fontSize: 24,
      color: 'black',
      fontFamily: 'outfit-ExtraBold',
      padding:10
    },
    itemImage: {
      width: 270,
      height: 180,
      borderRadius: 5,
      marginRight: 20,
      marginLeft:10,
    },
    Indialistdetails: {
      fontSize: 16, 
      color: '#444', 
      lineHeight: 22, 
      marginBottom: 15, 
      fontFamily: 'Roboto', 
      textAlign: 'left', 
      paddingHorizontal: 8, 
      paddingVertical: 10, 
    },
  });
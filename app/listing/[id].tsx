import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { ListingType } from '@/Types/listingType';
import listingData from '@/data/destination.json';
import { GestureHandlerRootView, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const { width } = Dimensions.get('window');
const Img_Height =200

const listingsDetails = () => {
  const { id } = useLocalSearchParams();
  const listing: ListingType = (listingData as ListingType[]).find((item) => item.id == id);
  const navigation = useNavigation();

  return (
    <>
      <Stack.Screen options={{ headerTitle: " " }} />
      <View style={styles.container}>
        <GestureHandlerRootView>
        <ScrollView contentContainerStyle={{paddingBottom:150}}>
        <Image source={{ uri: listing.image }} style={styles.image} />
        <View style={styles.contentwrapper}>
          <Text style={styles.listingName}>{listing.name}</Text>
          <View style={styles.locationContainer}>
            <FontAwesome5 name="map-marker-alt" size={18} color={Colors.black} />
            <Text style={styles.listinglocation}>{listing.location}</Text>
          </View>
          <View style={styles.highlightwrapper}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.highlighticon}>
                <Ionicons name='time' size={18} color={Colors.black} />
              </View>
              <View>
                <Text style={styles.highlightTxt}>Duration</Text>
                <Text style={styles.highlightTxtvalue}>{listing.duration} Days</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.highlighticon}>
                <FontAwesome5 name='users' size={18} color={Colors.black} />
              </View>
              <View>
                <Text style={styles.highlightTxt}>Person</Text>
                <Text style={styles.highlightTxtvalue}>{listing.duration} Days</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.highlighticon}>
                <Ionicons name='star' size={18} color={Colors.black} />
              </View>
              <View>
                <Text style={styles.highlightTxt}>Rating</Text>
                <Text style={styles.highlightTxtvalue}>{listing.rating} Days</Text>
              </View>
            </View>
          </View>
          <Text style={styles.listingdetails}>{listing.description}</Text>
          
          {listing.Day1 && <Text style={styles.itineraryTitle}>Itinerary</Text>}
          
          {listing.Day1 && <Text style={styles.itineraryText}>Day 1: {listing.Day1}</Text>}
          {listing.Day2 && <Text style={styles.itineraryText}>Day 2: {listing.Day2}</Text>}
          {listing.Day3 && <Text style={styles.itineraryText}>Day 3: {listing.Day3}</Text>}
          {listing.Day4 && <Text style={styles.itineraryText}>Day 4: {listing.Day4}</Text>}
          {listing.Day5 && <Text style={styles.itineraryText}>Day 5: {listing.Day5}</Text>}
          {listing.Day6 && <Text style={styles.itineraryText}>Day 6: {listing.Day6}</Text>}
          {listing.Day7 && <Text style={styles.itineraryText}>Day 7: {listing.Day7}</Text>}
          
        </View>
        </ScrollView>
        </GestureHandlerRootView>
        <View style={styles.footer}>
          <GestureHandlerRootView>
            <TouchableOpacity onPress={() => {}} style={styles.footerBtn}>
              <Text style={styles.footertxt}>Book Now</Text>
            </TouchableOpacity>
          </GestureHandlerRootView>
          <GestureHandlerRootView>
            <TouchableOpacity onPress={() => {}} style={[styles.footerBtn, styles.footerbookBtn]}>
              <Text style={styles.footertxt}>${listing.price}</Text>
            </TouchableOpacity>
          </GestureHandlerRootView>
        </View>
      </View>
     
    </>
  );
};

export default listingsDetails;

const styles = StyleSheet.create({
  headercontainer:{
    
  },
  backBtn: {
    padding: 10,
  },
  bookmarkBtn: {
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentwrapper: {
    padding: 20,
  },
  listinglocation: {
    fontSize: 14,
    marginLeft: 5,
    color: Colors.black,
  },
  image: {
    width: 370,
    height: Img_Height,
  },
  listingName: {
    fontSize: 24,
    letterSpacing: 0.5,
    color: Colors.black,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  highlightwrapper: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  highlighticon: {
    backgroundColor: '#F4F4F4',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
    marginRight: 5,
    alignItems: 'center',
  },
  highlightTxt: {
    fontSize: 12,
    color: '#999',
  },
  highlightTxtvalue: {
    fontSize: 14,
  },
  listingdetails: {
    fontSize: 16,
    color: Colors.black,
    lineHeight: 25,
  },
  itineraryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 20,
  },
  itineraryText: {
    fontSize: 16,
    color: Colors.black,
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    padding: 20,
    paddingBottom: 5,
    width: width,
  },
  footerBtn: {
    flex: 2,
    backgroundColor: Colors.black,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  footertxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  footerbookBtn: {
    marginLeft: 30,
    

  },
});

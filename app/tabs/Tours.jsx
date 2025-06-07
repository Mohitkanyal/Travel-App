import { View, Text, Image, StyleSheet, TouchableOpacity, Button, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '@/constants/Colors';
import { useNavigation, useRouter } from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../config/firbase';

export default function Tours() {
  const router = useRouter();
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [domesticTours, setDomesticTours] = useState([]);
  const [internationalTours, setInternationalTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back' size={24} style={{ top: 0, left: 10, paddingRight: 10 }} />
        </TouchableOpacity>
      ),
    });

    fetchToursData();
  }, []);

  const fetchToursData = async () => {
    try {
   
      const domesticQuery = query(collection(db, 'indTours')); 
      const domesticSnapshot = await getDocs(domesticQuery);
      const domesticData = domesticSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), type: 'Domestic' }));
      setDomesticTours(domesticData);

      const internationalQuery = query(collection(db, 'forTours')); 
      const internationalSnapshot = await getDocs(internationalQuery);
      const internationalData = internationalSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), type: 'International' }));
      setInternationalTours(internationalData);

    } catch (error) {
      console.error("Error fetching tours data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const allTours = [...domesticTours, ...internationalTours];

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="black" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={{ paddingBottom: 103 }}>
        <View style={styles.buttonContainer}>
          <Button 
            title='All' 
            onPress={() => handleCategoryChange('All')} 
            color={activeCategory === 'All' ? 'blue' : 'gray'}
          />
          <Button 
            title='Domestic' 
            onPress={() => handleCategoryChange('Domestic')} 
            color={activeCategory === 'Domestic' ? 'blue' : 'gray'}
          />
          <Button 
            title='International'
            onPress={() => handleCategoryChange('International')} 
            color={activeCategory === 'International' ? 'blue' : 'gray'}
          />
        </View>

  
        {activeCategory === 'All' && ( 
          <FlatList
            data={allTours}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.tourItem}
                onPress={() => {
                  if (item.type === 'Domestic') {
                    router.push('../toursDetail/' + item.id);
                  } else {
                    router.push('../toursforeign/' + item.id);
                  }
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.tourImage}
                />
                <Text style={styles.tourName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        )}

        {activeCategory === 'Domestic' && ( 
          <FlatList
            data={domesticTours}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.tourItem}
                onPress={() => {
                  router.push('../toursDetail/' + item.id);
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.tourImage}
                />
                <Text style={styles.tourName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        )}

        {activeCategory === 'International' && ( 
          <FlatList 
            data={internationalTours}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.tourItem}
                onPress={() => {
                  router.push('../toursforeign/' + item.id);
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.tourImage}
                />
                <Text style={styles.tourName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        )}
        
        <View style={{ height: 100 }}></View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 20,
    borderRadius: 10,
    justifyContent: 'space-around',
  },
  tourItem: {
    marginHorizontal: 10,
    marginBottom: 20,
    width: '45%',
    padding: 10,
  },
  tourImage: {
    width: '100%',
    height: 225,
    borderRadius: 29,
    marginBottom: 10,
  },
  tourName: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'outfit-med',
  },
});

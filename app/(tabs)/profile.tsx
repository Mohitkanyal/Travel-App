import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {Stack} from 'expo-router';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { auth } from '../../config/firbase'; // Ensure this path is correct

const Home = () => {
  
  const [isSignedOut, setIsSignedOut] = useState(false);
  const user = auth.currentUser; // Get the current user from Firebase
  const router = useRouter();

  // Function to handle sign out
  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setIsSignedOut(true);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
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

  return (
    
    <View style={styles.container}>
      {user && !isSignedOut ? (
        <>
          {/* Display the user's name if available */}
          <Text style={styles.welcomeText}>Welcome, {user.displayName || user.email || 'User'}!</Text>
          <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity onPress={() => router.push('/auth/Signin')} style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  signOutButton: {
    backgroundColor: Colors.black,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  signOutText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  signInButton: {
    backgroundColor: Colors.black,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signInText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});

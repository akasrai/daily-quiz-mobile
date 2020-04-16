import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {styles} from '../home.style';
import {GoogleSignoutButton} from '~/auth/component/google-auth.component';

const HomeScreen = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    auth().onAuthStateChanged((userState) => {
      setUser(userState);

      if (loading) {
        setLoading(false);
      }
    });
  }, [loading, user]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <Text style={styles.title}>Fuck You {user?.displayName}</Text>
            <GoogleSignoutButton />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

import firestore from '@react-native-firebase/firestore';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const createUser = (user: FirebaseAuthTypes.User) => {
  return firestore()
    .collection('Users')
    .doc(user.uid)
    .set({fullName: user.displayName, photo: user.photoURL});
};

export const getLatestQuestion = () => {
  return firestore().collection('Questions').limit(1).get();
};

export const getQuotes = () => {
  return firestore().collection('Quotes').get();
};

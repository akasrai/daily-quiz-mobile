import firestore from '@react-native-firebase/firestore';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const createUser = (user: FirebaseAuthTypes.User) => {
  return firestore()
    .collection('Users')
    .doc(user.uid)
    .set({fullName: user.displayName});
};

export const getLatestQuestion = () => {
  return firestore().collection('Questions').limit(1).get();
};

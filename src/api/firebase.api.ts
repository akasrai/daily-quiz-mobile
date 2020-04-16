import firestore from '@react-native-firebase/firestore';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export const createUser = (user: FirebaseAuthTypes.User) => {
  return firestore()
    .collection('Users')
    .doc(user.uid)
    .set({fullName: user.displayName});
};

export const getQuiz = () => {
  return firestore().collection('questions').limit(1).get();
};

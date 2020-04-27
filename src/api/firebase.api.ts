import firestore from '@react-native-firebase/firestore';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

const getList = (snapshot: any) => {
  const array: Array<any> = [];
  snapshot.forEach((doc: any) => array.push(doc.data()));

  return array;
};

export const createUser = (user: FirebaseAuthTypes.User) => {
  return firestore()
    .collection('Users')
    .doc(user.uid)
    .set({fullName: user.displayName, photo: user.photoURL});
};

export const getLatestQuestion = () => {
  return firestore().collection('Questions').limit(1).get();
};

export const getQuotes = async () => {
  const quotes = await firestore().collection('Quotes').get();

  return getList(quotes);
};

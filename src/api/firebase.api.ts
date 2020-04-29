import firestore from '@react-native-firebase/firestore';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {Question, Option} from '~/quiz/quiz.type';

const getList = (snapshot: any) => {
  const array: Array<any> = [];
  snapshot.forEach((doc: any) => array.push(doc.data()));

  return array;
};

const getOne = (snapshot: any) => {
  let data: any = null;
  snapshot.forEach((doc: any) => {
    data = doc.data();
    data.id = doc.id;
  });

  return data;
};

export const createUser = (user: FirebaseAuthTypes.User) => {
  return firestore()
    .collection('Users')
    .doc(user.uid)
    .set({fullName: user.displayName, photo: user.photoURL});
};

export const getLatestQuestion = async () => {
  const snapshot = await firestore()
    .collection('Questions')
    .orderBy('createdAt', 'desc')
    .limit(1)
    .get();

  const question: Question = getOne(snapshot);
  const options: Array<Option> = await getOptions(question.id);

  return {
    question,
    options,
  };
};

const getOptions = async (quesId: string) => {
  const snapshot = await firestore()
    .collection('Options')
    .where('quesId', '==', quesId)
    .get();

  return getList(snapshot);
};

export const getQuotes = async () => {
  const quotes = await firestore().collection('Quotes').get();

  return getList(quotes);
};

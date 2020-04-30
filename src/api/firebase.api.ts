import firestore from '@react-native-firebase/firestore';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {Question, Option, GamePlay, GameLeaderboard} from '~/quiz/quiz.type';
import {User} from '~/auth';

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

export const setGamePlay = async (user: User, point: number) => {
  const currentGamePlay = (await getCurrentGamePlay(user.uid)) as GamePlay;

  return firestore()
    .collection('GamePlay')
    .doc(user.uid)
    .set({
      point: currentGamePlay.point + point,
      gamePlayed: currentGamePlay.gamePlayed + 1,
    });
};

export const getCurrentGamePlay = async (docId: string) => {
  const gamePlay = await firestore().collection('GamePlay').doc(docId).get();

  if (gamePlay.exists) return gamePlay.data();

  return {
    point: 0,
    gamePlayed: 0,
  };
};

export const getGamePosition = async (userId: string) => {
  const positions: Array<any> = [];
  const snapshot = await firestore()
    .collection('GamePlay')
    .orderBy('point', 'desc')
    .get();

  snapshot.forEach((gamePlay) => {
    positions.push(gamePlay.id);
  });

  return positions.indexOf(userId) + 1;
};

const getUser = async (userId: string) => {
  const user = await firestore().collection('Users').doc(userId).get();

  return user.data();
};

export const getGameLeaderboard = async () => {
  const positions: Array<any> = [];
  const snapshot = await firestore()
    .collection('GamePlay')
    .orderBy('point', 'desc')
    .get();

  snapshot.forEach(async (gamePlay) => {
    const user = await getUser(gamePlay.id);
    positions.push({...gamePlay.data(), user});
  });

  return positions;
};

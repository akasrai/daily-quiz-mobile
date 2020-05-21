import {StyleSheet} from 'react-native';
import {ceil} from 'react-native-reanimated';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  quoteWrapper: {
    flex: 0,
    padding: 20,
    alignItems: 'center',
  },
  quote: {
    padding: 5,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Ubuntu-R',
  },
  contentWrapper: {
    marginTop: 30,
  },
  content: {
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#fff',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  logo: {
    color: 'white',
    fontSize: 25,
    paddingTop: 30,
    textAlign: 'center',
    fontFamily: 'KaushanScript-Regular',
  },
  title: {
    padding: 30,
    fontSize: 30,
    textAlign: 'center',
  },
  playBtnWrapper: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  playBtn: {
    fontSize: 80,
    color: 'green',
    paddingBottom: 20,
  },
  gameNotice: {
    paddingTop: 60,
    paddingBottom: 20,
  },
  quizInfo: {
    flex: 1,
    alignItems: 'center',
  },
  season: {
    fontSize: 22,
    paddingTop: 20,
    textAlign: 'center',
  },
  seasonCount: {
    width: 50,
    height: 50,
    padding: 10,
    fontSize: 20,
    color: '#fff',
    borderRadius: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'red',
  },
  seasonTitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  rowItem: {
    padding: 30,
  },
  rowItemLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  play: {
    fontSize: 25,
    color: 'red',
    textAlign: 'center',
  },
  win: {
    fontSize: 25,
    color: '#f3b72e',
    textAlign: 'center',
  },
  host: {
    fontSize: 25,
    color: 'green',
    textAlign: 'center',
  },
  note: {
    fontSize: 14,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'center',
  },
});

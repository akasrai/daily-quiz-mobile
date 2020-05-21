import {StyleSheet} from 'react-native';

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
    padding: 15,
  },
});

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
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    margin: 10,
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

  note: {
    color: 'white',
  },
  profileImage: {
    flex: 0,
    marginTop: 90,
    alignItems: 'center',
    alignContent: 'center',
  },
  name: {
    padding: 20,
    fontSize: 25,
    color: '#fff',
  },
  playBtnWrapper: {
    flex: 0,
    alignItems: 'center',
  },
  playBtn: {
    width: 80,
    height: 80,
    padding: 6,
    alignItems: 'center',
    borderRadius: 100 / 2,
    justifyContent: 'center',
    backgroundColor: '#e4e4e4',
  },
  icon: {
    fontSize: 25,
  },
});

import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  quoteWrapper: {
    flex: 0,
    padding: 20,
    marginTop: 30,
    alignItems: 'center',
  },
  quote: {
    padding: 5,
    color: '#fff',
    textAlign: 'center',
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
  pointsTable: {
    flex: 0,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImageWrapper: {
    width: 35,
    height: 35,
    overflow: 'hidden',
    borderRadius: 100 / 2,
  },
  profileImage: {
    width: 35,
    height: 35,
  },
  name: {
    width: 230,
    padding: 6,
    textAlign: 'left',
  },
  point: {
    padding: 6,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

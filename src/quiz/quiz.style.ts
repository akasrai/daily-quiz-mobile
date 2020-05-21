import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 26,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    paddingTop: 20,
    textAlign: 'center',
  },
  gold: {
    fontSize: 25,
    marginTop: -9,
    color: '#f3b72e',
  },
  silver: {
    fontSize: 25,
    marginTop: -9,
    color: '#959595',
  },
  bronze: {
    fontSize: 25,
    marginTop: -9,
    color: '#c67526',
  },
  lead: {
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  leadWrapper: {
    zIndex: 444,
    width: '33.33%',
    alignItems: 'center',
  },
  leadName: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
  leadOne: {
    width: 80,
    height: 80,
    zIndex: 444,
    marginBottom: 5,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 100 / 2,
  },
  leadOneImage: {
    width: 80,
    height: 80,
  },
  leadTwo: {
    width: 60,
    height: 60,
    zIndex: 444,
    marginBottom: 5,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 100 / 2,
  },
  leadTwoImage: {
    width: 60,
    height: 60,
  },
  leadThree: {
    width: 60,
    height: 60,
    zIndex: 444,
    marginBottom: 5,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 100 / 2,
  },
  leadThreeImage: {
    width: 60,
    height: 60,
  },
  content: {
    margin: 10,
    borderRadius: 8,
    borderColor: '#fff',
    backgroundColor: '#fff',
  },
  pointsTable: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    height: '58%',
  },
  pointsRow: {
    flex: 0,
    padding: 15,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
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
    width: 210,
    padding: 6,
    textAlign: 'left',
  },
  point: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  pointDark: {
    padding: 6,
    fontSize: 12,
    fontWeight: 'bold',
  },
  quesLabel: {
    fontSize: 18,
    color: '#cfcece',
  },
  category: {
    fontSize: 14,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 3,
    marginBottom: 8,
    color: '#cfcece',
    backgroundColor: 'green',
  },
  questionWrapper: {
    minHeight: 120,
    marginTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'flex-start',
  },
  question: {
    fontSize: 23,
    color: '#fff',
  },
  icon: {
    fontSize: 20,
    color: '#fff',
  },
  options: {
    margin: 25,
    marginTop: 50,
  },
  option: {
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 18,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#02183b',
  },
  correctOption: {
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 18,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'green',
    backgroundColor: '#4caf50',
  },
  incorrectOption: {
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 18,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'red',
    backgroundColor: '#f44336',
  },
  answered: {
    color: '#fff',
    fontWeight: 'bold',
  },
  unanswered: {
    color: '#3d3d3d',
    fontWeight: 'bold',
  },
  answerIcon: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'right',
  },
  counter: {
    width: 60,
    height: 60,
    padding: 10,
    borderWidth: 3,
    borderRadius: 100 / 2,
    borderColor: '#032862',
  },
  counts: {
    fontSize: 25,
    color: '#032862',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  exitBtnWrapper: {
    width: 60,
    height: 60,
  },
  exitBtn: {
    width: 60,
    height: 60,
    padding: 10,
    borderWidth: 3,
    borderRadius: 100 / 2,
    borderColor: '#f44336',
  },
  exitText: {
    fontSize: 20,
    paddingTop: 3,
    color: '#f44336',
    textAlign: 'center',
  },
  winners: {
    margin: 10,
    padding: 20,
    borderRadius: 5,
    flex: 0,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  winner: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  congrats: {
    width: '100%',
    padding: 15,
    paddingLeft: 110,
    marginTop: -70,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#02183b',
  },
  congratsText: {
    fontSize: 16,
    color: '#fff',
  },
  winnerName: {
    color: '#02183b',
    fontSize: 16,
  },
  winnerPoints: {
    fontSize: 18,
    color: '#02183b',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  stats: {
    flex: 0,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statText: {
    fontSize: 9,
    color: '#02183b',
  },
  pointIcon: {
    fontSize: 10,
    color: 'green',
  },
  posIcon: {
    fontSize: 10,
    color: 'red',
  },
  gameIcon: {
    fontSize: 10,
    color: 'orange',
  },
  updating: {
    fontSize: 11,
    paddingTop: 5,
    color: '#362a2e',
    textAlign: 'center',
  },
  winnerNotice: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
  },
  season: {
    fontSize: 18,
    color: 'orange',
  },
  seasonTitle: {
    fontSize: 20,
    color: 'orange',
  },
});

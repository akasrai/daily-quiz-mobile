import {View, Text} from 'react-native';
import React, {Component} from 'react';

import {styles} from '~/quiz/quiz.style';
import {appStyles} from '~/app/app.style';
import {QUIZ_TIME} from '../quiz.constant';

export class Counter extends Component<any> {
  state = {
    count: QUIZ_TIME,
  };

  private timer: any;
  private static totalTimeTaken: number = 0;

  componentDidMount = () => {
    this.startTimer();
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  static getTotalTimeTaken(): number {
    return this.totalTimeTaken;
  }

  static setTotalTimeTaken(totalTimeTaken: number): void {
    this.totalTimeTaken = totalTimeTaken;
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      const quizTime = this.state.count - 1;
      this.setState({count: quizTime});
      Counter.setTotalTimeTaken(quizTime);

      if (this.state.count < 1) {
        this.props.setTimeOut(true);
        clearInterval(this.timer);
      }
    }, 1000);
  };

  render() {
    return (
      <View style={appStyles.flex}>
        <View style={styles.counter}>
          <Text style={styles.counts}>{this.state.count}</Text>
        </View>
      </View>
    );
  }
}

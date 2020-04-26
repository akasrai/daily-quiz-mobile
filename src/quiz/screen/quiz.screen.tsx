import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableHighlight} from 'react-native-gesture-handler';

import {styles} from '~/quiz/quiz.style';
import {appGradientBG, appStyles} from '~/app/app.style';
import BackButton from '~/component/navigator/back-button.component';
import {Options, Option} from '../quiz.type';

const Question = () => {
  return (
    <View style={styles.questionWrapper}>
      <Text style={styles.quesLabel}>
        Question <Icon style={styles.quesLabel} name="help-outline" />
      </Text>
      <Text style={styles.question}>
        What attraction in Montreal is one of the largest in the world?
      </Text>
    </View>
  );
};

const Counter = () => {
  let counter = 0;
  const [count, setCount] = useState<Number>(0);

  useEffect(() => {
    // setInterval(() => {
    //   counter++;
    //   setCount(counter);
    // }, 1000);
  });

  return (
    <View style={appStyles.flex}>
      <View style={styles.counter}>
        <Text style={styles.counts}>{count}</Text>
      </View>
    </View>
  );
};

const checkAnswer = (option: Option, answer: Option | undefined) => {
  if (typeof answer !== 'undefined') {
    if (answer?.isCorrect && answer?.option === option.option) {
      return styles.correctOption;
    }

    if (!answer?.isCorrect) {
      if (option.option === answer?.option) {
        return styles.incorrectOption;
      }

      if (option.isCorrect) return styles.correctOption;
    }
  }

  return styles.option;
};

const AnswerIcon = ({option, answer}: any) => {
  if (typeof answer !== 'undefined') {
    if (answer?.isCorrect && answer?.option === option.option) {
      return <Icon style={styles.answerIcon} name="done" />;
    }

    if (!answer?.isCorrect && option.option === answer?.option) {
      return <Icon style={styles.answerIcon} name="close" />;
    }
  }

  return null;
};

const Answers = () => {
  const options: Array<Option> = [
    {option: 'Option A', isCorrect: false},
    {option: 'Option B', isCorrect: true},
    {option: 'Option C', isCorrect: false},
    {option: 'Option D', isCorrect: false},
  ];

  const [answer, setAnswer] = useState<Option>();

  return (
    <View style={styles.options}>
      {options.map((option, key) => (
        <TouchableHighlight
          key={key}
          activeOpacity={0.9}
          underlayColor="#2260c2"
          style={checkAnswer(option, answer)}
          onPress={() => setAnswer(option)}>
          <View style={appStyles.row}>
            <Text
              style={
                answer && answer.option === option.option
                  ? styles.answered
                  : styles.unanswered
              }>
              {option.option}
            </Text>
            <AnswerIcon option={option} answer={answer} />
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const QuizScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={appGradientBG} style={appStyles.container}>
        <BackButton />
        <Question />
        <View style={styles.content}>
          <Answers />
          <Counter />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default QuizScreen;

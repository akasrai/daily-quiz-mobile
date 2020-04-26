import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableHighlight} from 'react-native-gesture-handler';

import {Option} from '../quiz.type';
import {styles} from '~/quiz/quiz.style';
import {useNavigation} from '@react-navigation/native';
import {appGradientBG, appStyles} from '~/app/app.style';
import BackButton from '~/component/navigator/back-button.component';

interface IAnswers {
  timeOut: boolean;
  setTimeOut: Function;
}

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

const Counter = ({setTimeOut}: {setTimeOut: Function}) => {
  let [count, setCount] = useState<number>(10);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCount(count--);
    }, 1000);

    if (count === 0) {
      setTimeOut(true);
      clearInterval(timeInterval);
    }

    return function cleanUp() {
      clearInterval(timeInterval);
    };
  }, [count]);

  return (
    <View style={appStyles.flex}>
      <View style={styles.counter}>
        <Text style={styles.counts}>{count}</Text>
      </View>
    </View>
  );
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

const Answers = ({timeOut, setTimeOut}: IAnswers) => {
  const options: Array<Option> = [
    {option: 'Option A', isCorrect: false},
    {option: 'Option B', isCorrect: true},
    {option: 'Option C', isCorrect: false},
    {option: 'Option D', isCorrect: false},
  ];

  const [answer, setAnswer] = useState<Option>();

  useEffect(() => {
    if (answer) setTimeOut(true);
  }, [answer]);

  return (
    <View style={styles.options}>
      {options.map((option: Option, key: number) => (
        <TouchableHighlight
          key={key}
          activeOpacity={0.9}
          underlayColor="#2260c2"
          style={checkAnswer(option, answer)}
          onPress={!timeOut ? () => setAnswer(option) : void 0}>
          <View style={appStyles.row}>
            <Text style={getTextStyle(answer, option)}>{option.option}</Text>
            <AnswerIcon option={option} answer={answer} />
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const Exit = () => {
  const navigation = useNavigation();

  return (
    <View style={appStyles.flex}>
      <View style={styles.exitBtnWrapper}>
        <TouchableHighlight
          activeOpacity={0.1}
          style={styles.exitBtn}
          underlayColor="#fff"
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.exitText}>Exit</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const QuizScreen = () => {
  const [timeOut, setTimeOut] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={appGradientBG} style={appStyles.container}>
        <BackButton />
        <Question />
        <View style={styles.content}>
          <Answers timeOut={timeOut} setTimeOut={setTimeOut} />
          {timeOut ? <Exit /> : <Counter setTimeOut={setTimeOut} />}
        </View>
      </LinearGradient>
    </SafeAreaView>
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

const getTextStyle = (answer: Option | undefined, option: Option) =>
  answer && answer?.option === option.option
    ? styles.answered
    : styles.unanswered;

export default QuizScreen;

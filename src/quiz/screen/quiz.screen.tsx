import React, {useState, useEffect, useContext} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableHighlight} from 'react-native-gesture-handler';

import {styles} from '~/quiz/quiz.style';
import {setGamePlay} from '~/api/firebase.api';
import {AuthContext} from '~/auth/auth.context';
import {useNavigation} from '@react-navigation/native';
import {appGradientBG, appStyles} from '~/app/app.style';
import GameLoader from '~/component/loader/spinner.component';
import BackButton from '~/component/navigator/back-button.component';
import {Option, Answers, Question, QuestionOptions} from '../quiz.type';
import {getLatestQuestion} from '~/api/request.api';
import {ApiResponse} from '~/api';

const QuizQuestion = ({question}: {question: Question}) => {
  return (
    <View style={styles.questionWrapper}>
      <Text style={styles.quesLabel}>
        Question <Icon style={styles.quesLabel} name="help-outline" />
      </Text>
      <Text style={styles.question}>{question.question}</Text>
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

const QuizAnswers = ({timeOut, setTimeOut, options, point}: Answers) => {
  const {user} = useContext(AuthContext);
  const [answer, setAnswer] = useState<Option>();

  useEffect(() => {
    if (answer) {
      setTimeOut(true);
      // add point if correct
    }
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
            <Text style={getTextStyle(answer, option)}>
              {key + 1}. {option.answer}
            </Text>
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
  const [question, setQuestion] = useState<Question>();
  const [options, setOptions] = useState<Array<Option>>();
  const [timeOut, setTimeOut] = useState<boolean>(false);

  useEffect(() => {
    if (!question)
      (async function () {
        const {data, error}: ApiResponse = await getLatestQuestion();
        setOptions(data.answers);
        setQuestion({
          id: data.id,
          point: data.point,
          category: data.category,
          question: data.question,
        });
      })();
  });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={appGradientBG} style={appStyles.container}>
        <BackButton />

        {question && options ? (
          <>
            <QuizQuestion question={question} />
            <View style={styles.content}>
              <QuizAnswers
                options={options}
                timeOut={timeOut}
                point={question.point}
                setTimeOut={setTimeOut}
              />
              {timeOut ? <Exit /> : <Counter setTimeOut={setTimeOut} />}
            </View>
          </>
        ) : (
          <GameLoader />
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};

const checkAnswer = (option: Option, answer: Option | undefined) => {
  // if (typeof answer !== 'undefined') {
  //   if (answer?.isCorrect && answer?.option === option.option) {
  //     return styles.correctOption;
  //   }

  //   if (!answer?.isCorrect) {
  //     if (option.option === answer?.option) {
  //       return styles.incorrectOption;
  //     }

  //     if (option.isCorrect) return styles.correctOption;
  //   }
  // }

  return styles.option;
};

const getTextStyle = (answer: Option | undefined, option: Option) =>
  answer && answer?.answer === option.answer
    ? styles.answered
    : styles.unanswered;

export default QuizScreen;

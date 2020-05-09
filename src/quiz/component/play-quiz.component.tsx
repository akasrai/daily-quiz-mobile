import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableHighlight} from 'react-native-gesture-handler';

import {ApiResponse} from '~/api';
import {styles} from '~/quiz/quiz.style';
import {appStyles} from '~/app/app.style';
import {VALIDATION} from '../quiz.constant';
import {submitAnswer} from '~/api/request.api';
import {alert} from '~/component/alert/alert.component';
import {Option, Answer, Answers, Question, AnswerResponse} from '../quiz.type';

const checkAnswer = async (
  option: Option,
  question: Question,
  setAnswerResponse: Function,
) => {
  const answer: Answer = {
    answer: option.id,
    question: question.id,
  };

  const {data, error}: ApiResponse = await submitAnswer(answer);

  if (error) {
    return alert.error(VALIDATION.SOMETHING_WENT_WRONG);
  }

  return setAnswerResponse(data);
};

const getOptionStyle = (
  option: Option,
  selectedOption: Option | undefined,
  answerResponse: AnswerResponse | undefined,
) => {
  console.log(option, answerResponse);
  if (typeof answerResponse !== 'undefined') {
    if (answerResponse.correct && answerResponse?.correctAnswer === option.id) {
      return styles.correctOption;
    }

    if (!answerResponse.correct) {
      if (option.id === answerResponse?.correctAnswer) {
        return styles.correctOption;
      }

      if (selectedOption?.id === option.id) return styles.incorrectOption;
    }
  }

  return styles.option;
};

const getTextStyle = (selectedOption: Option | undefined, option: Option) =>
  selectedOption && selectedOption?.answer === option.answer
    ? styles.answered
    : styles.unanswered;

export const Exit = () => {
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

export const Counter = ({setTimeOut}: {setTimeOut: Function}) => {
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

const AnswerIcon = ({
  option,
  selectedOption,
  answerResponse,
}: {
  option: Option;
  selectedOption: Option | undefined;
  answerResponse: AnswerResponse | undefined;
}) => {
  if (typeof selectedOption !== 'undefined') {
    if (
      answerResponse?.correct &&
      answerResponse?.correctAnswer === option.id
    ) {
      return <Icon style={styles.answerIcon} name="done" />;
    }

    if (!answerResponse?.correct && selectedOption?.id === option?.id) {
      return <Icon style={styles.answerIcon} name="close" />;
    }
  }

  return null;
};

export const QuizAnswers = ({
  timeOut,
  options,
  question,
  setTimeOut,
}: Answers) => {
  const [selectedOption, selectOption] = useState<Option>();
  const [answerResponse, setAnswerResponse] = useState<AnswerResponse>();

  useEffect(() => {
    if (selectedOption) {
      setTimeOut(true);
    }
  }, [selectedOption]);

  return (
    <View style={styles.options}>
      {options.map((option: Option, key: number) => (
        <TouchableHighlight
          key={key}
          activeOpacity={0.9}
          underlayColor="#2260c2"
          style={getOptionStyle(option, selectedOption, answerResponse)}
          onPress={
            !timeOut
              ? function () {
                  selectOption(option);
                  checkAnswer(option, question, setAnswerResponse);
                }
              : void 0
          }>
          <View style={appStyles.row}>
            <Text style={getTextStyle(selectedOption, option)}>
              {key + 1}. {option.answer}
            </Text>
            <AnswerIcon
              option={option}
              selectedOption={selectedOption}
              answerResponse={answerResponse}
            />
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
};

export const QuizQuestion = ({question}: {question: Question}) => {
  return (
    <View style={styles.questionWrapper}>
      <Text style={styles.quesLabel}>
        Question <Icon style={styles.quesLabel} name="help-outline" />
      </Text>
      <Text style={styles.question}>{question.question}</Text>
    </View>
  );
};

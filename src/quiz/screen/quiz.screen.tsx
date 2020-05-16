import {View, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  Exit,
  QuizAnswers,
  QuizQuestion,
} from '~/quiz/component/play-quiz.component';
import {ApiResponse} from '~/api';
import {styles} from '~/quiz/quiz.style';
import {Option, Question} from '../quiz.type';
import {VALIDATION} from '~/quiz/quiz.constant';
import {getLatestQuestion} from '~/api/request.api';
import {useNavigation} from '@react-navigation/native';
import {alert} from '~/component/alert/alert.component';
import {appGradientBG, appStyles} from '~/app/app.style';
import {Counter} from '../component/quiz-timer.component';
import {PageLoader} from '~/component/loader/spinner.component';
import BackButton from '~/component/navigator/back-button.component';

const getQuestion = async (
  setQuestion: Function,
  setOptions: Function,
  setIsLoading: Function,
) => {
  const {data, error}: ApiResponse = await getLatestQuestion();

  if (error) {
    setIsLoading(false);
    return alert.error(error.message);
  }

  setIsLoading(false);
  setOptions(data.answers);
  setQuestion({
    id: data.id,
    point: data.point,
    category: data.category,
    question: data.question,
  });
};

const QuizScreen = () => {
  const navigation = useNavigation();
  const [question, setQuestion] = useState<Question>();
  const [timeOut, setTimeOut] = useState<boolean>(false);
  const [options, setOptions] = useState<Array<Option>>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getQuestion(setQuestion, setOptions, setIsLoading);
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={appGradientBG} style={appStyles.container}>
        <BackButton />

        {question && options && (
          <>
            <QuizQuestion question={question} />
            <View style={styles.content}>
              <QuizAnswers
                options={options}
                timeOut={timeOut}
                question={question}
                setTimeOut={setTimeOut}
              />
              {timeOut ? <Exit /> : <Counter setTimeOut={setTimeOut} />}
            </View>
          </>
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default QuizScreen;

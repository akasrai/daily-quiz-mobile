import {View, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
  Exit,
  Counter,
  QuizAnswers,
  QuizQuestion,
} from '~/quiz/component/play-quiz.component';
import {ApiResponse} from '~/api';
import {styles} from '~/quiz/quiz.style';
import {Option, Question} from '../quiz.type';
import {VALIDATION} from '~/quiz/quiz.constant';
import {getLatestQuestion} from '~/api/request.api';
import {alert} from '~/component/alert/alert.component';
import {appGradientBG, appStyles} from '~/app/app.style';
import GameLoader from '~/component/loader/spinner.component';
import BackButton from '~/component/navigator/back-button.component';

const QuizScreen = () => {
  const [question, setQuestion] = useState<Question>();
  const [options, setOptions] = useState<Array<Option>>();
  const [timeOut, setTimeOut] = useState<boolean>(false);

  useEffect(() => {
    if (!question)
      (async function () {
        const {data, error}: ApiResponse = await getLatestQuestion();

        if (error) {
          return alert.error(VALIDATION.SOMETHING_WENT_WRONG);
        }

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
                question={question}
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

export default QuizScreen;

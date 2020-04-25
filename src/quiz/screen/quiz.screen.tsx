import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {styles} from '~/quiz/quiz.style';
import {appGradientBG, appStyles} from '~/app/app.style';
import BackButton from '~/component/navigator/back-button.component';

const Question = () => {
  return (
    <View style={styles.questionWrapper}>
      <Text style={styles.quesLabel}>
        Question <Icon style={styles.quesLabel} name="help-outline" />
      </Text>
      <Text style={styles.question}>What is your name?</Text>
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
          <View>
            <Text>Quiz</Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default QuizScreen;

<p align="center">
<img src="https://raw.githubusercontent.com/akasrai/daily-quiz-mobile/master/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png?token=AELU3B4SR6VBOVAVMVPCESC6ZOMJ6" alt="logo" />
<h3 align="center"><font size="6"> Daily Quiz</font></h3>
<p align="center">
<img src="https://img.shields.io/badge/License-MIT-red.svg" src="license">
</p>
<p align="center">
This is simple react-native application for playing quiz daily. A spring-boot backend for this application <a href="https://github.com/akasrai/daily-quiz-backend">here</a>. This app can be used in offices as entertainment. A quiz season can be hosted and each day a new qiuz can be published. Player can track points and position in leaderboard. At the end of the season top there winnner can be announced through the app.
</p>

### Installation

1. Clone project

```
git clone git@github.com:akasrai/daily-quiz-mobile.git
```

2. Install Dependencies

```
cd DailyQuiz
yarn
```

3. Setup env

- Create new file `env.js`
- Copy content from [env.example.js](https://github.com/akasrai/daily-quiz-mobile/blob/master/env.example.js)
- Add valid credentials

4. Run development Server

```
npm start
```

5. Run on android using npx

```
npx react-native run-android
```

### Firebase Cloud Messaging (Push Notification)

- Setup project in firebase [console](https://console.firebase.google.com/)

- add `google-services.json` provided by firebase in `android/app/` folder for android app

### Backend Setup

- Find backend setup [here](https://github.com/akasrai/daily-quiz-backend)

---

Created with React-Native

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCcSVlMzOaoCTHV-5aJiKIGlofMLvWF4MQ",
  authDomain: "netflix-react-app-fd806.firebaseapp.com",
  projectId: "netflix-react-app-fd806",
  storageBucket: "netflix-react-app-fd806.appspot.com",
  messagingSenderId: "237175559814",
  appId: "1:237175559814:web:3b7f18f8b33dcc05e46307"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
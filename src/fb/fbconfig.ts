import { initializeApp } from 'firebase/app';
import { Timestamp, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};
// 초기화
const app = initializeApp(firebaseConfig);
// FB 데이터 베이스 사용을 위한 변수저장
const appFireStore = getFirestore(app);
// FB Timestamp
const timeStamp = Timestamp;
// 외부에서 활용
export { app, appFireStore, timeStamp };

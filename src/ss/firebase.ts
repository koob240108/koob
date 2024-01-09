import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

export
const init_firebase = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyD2lfruvbaPfOIYshXh92zEljFU6qbvFHM',
    authDomain: 'koob-7976c.firebaseapp.com',
    projectId: 'koob-7976c',
    storageBucket: 'koob-7976c.appspot.com',
    messagingSenderId: '215339737792',
    appId: '1:215339737792:web:c0b079f477a620ec84c325',
    measurementId: 'G-SDV7HTBBFX'
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  // const analytics =
  getAnalytics(app)
}

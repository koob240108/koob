import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

export
const init_firebase = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyALie4z8as9jMoX19BwP5YqhLh5W4-Mg_U',
    authDomain: 'koob-ppz.firebaseapp.com',
    projectId: 'koob-ppz',
    storageBucket: 'koob-ppz.appspot.com',
    messagingSenderId: '895128901523',
    appId: '1:895128901523:web:ba3a04f287c1565907ba66',
    measurementId: 'G-5RRY01BP1S',
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  // const analytics =
  getAnalytics(app)
}

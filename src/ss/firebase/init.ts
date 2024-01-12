import { initializeApp } from 'firebase/app'
import { Firebase_helper } from '../types'
import { Database_impl } from './database'

export
const init_firebase_helper = (): Firebase_helper => {
  const firebaseConfig = {
    apiKey: 'AIzaSyALie4z8as9jMoX19BwP5YqhLh5W4-Mg_U',
    authDomain: 'koob-ppz.firebaseapp.com',
    projectId: 'koob-ppz',
    storageBucket: 'koob-ppz.appspot.com',
    messagingSenderId: '895128901523',
    appId: '1:895128901523:web:ba3a04f287c1565907ba66',
    measurementId: 'G-5RRY01BP1S',
  }

  const app = initializeApp(firebaseConfig)

  return {
    db: new Database_impl(app),
  }
}

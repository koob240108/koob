import { FirebaseApp } from 'firebase/app'
import { Firestore, getFirestore } from 'firebase/firestore'

import { Collections, Collection, Database } from './types'

export
class Database_impl implements Database {
  colls: Collections
  constructor(firebase_app: FirebaseApp) {
    const firestore = getFirestore(firebase_app)
    this.colls = {
      koob: new Collection_impl(firestore),
    }
  }
}

class Collection_impl implements Collection {
  constructor(
    private readonly firestore: Firestore,
  ) {}

}

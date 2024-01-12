export
interface Collection {

}

export
interface Collections {
  koob: Collection

}

export
interface Database {
  colls: Collections
}

export
interface Firebase_helper {
  db: Database
}

export
interface SS {
  firebase: Firebase_helper

}

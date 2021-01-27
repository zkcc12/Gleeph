import FirebaseApi from "firebase";

import "firebase/app";
import "firebase/firestore";

import { firebaseConfig } from "../../constants/firebase-config";
import { BookCollection } from "./collections/book.collection";

export class FirebaseHandler {
  public firestore: FirebaseApi.firestore.Firestore;
  // appStore: Store<any, AnyAction>;

  public bookCollection: BookCollection;

  /**
   *
   */
  constructor(firebaseConfig: Object) {
    FirebaseApi.initializeApp(firebaseConfig);

    this.firestore = FirebaseApi.firestore();

    this.firestore.enablePersistence().catch((err) => {
      console.error("error enabling data persistence ", err);
    });

    this.bookCollection = new BookCollection(this);
  }
}

export default new FirebaseHandler(firebaseConfig);

import FirebaseApi from "firebase";
import { CollectionName } from "../../constants/collection-names";
import firebaseHandler from "../firebase/firebase-handler";

export class Book {
  public firestoreRef?: FirebaseApi.firestore.DocumentReference;
  public get uid(): string | undefined {
    return this.firestoreRef?.id;
  }
  public name: string = "";
  public authorName: string = "";
  public publicationDate: number = 0;

  /**
   *
   */
  constructor(source?: Partial<Book>) {
    if (source) Object.assign(this, source);
  }

  public toJSON() {
    return {
      firestoreRef: `/${CollectionName.books}/${this.uid}`,
      uid: this.uid,
      name: this.name,
      authorName: this.authorName,
      publicationDate: this.publicationDate,
    };
  }

  public static fromJSON(source: any): Book | undefined {
    if (source) {
      return new Book({
        ...source,
        firestoreRef: firebaseHandler.firestore.doc(source.firestoreRef),
      });
    } else {
      return undefined;
    }
  }

  public static compareObjects = (obj1?: Book, obj2?: Book): boolean =>
    obj1 !== undefined &&
    obj2 !== undefined &&
    obj1.uid === obj2.uid &&
    obj1.name === obj2.name &&
    obj1.authorName === obj2.authorName &&
    obj1.publicationDate === obj2.publicationDate;

  public static compareArrays = (arr1: Book[], arr2: Book[]): boolean =>
    arr1.length === arr2.length &&
    arr1.every((e, i) => Book.compareObjects(e, arr2[i]));
}

export const FirestoreBookConverter: FirebaseApi.firestore.FirestoreDataConverter<Book> = {
  toFirestore: (book: Book): FirebaseApi.firestore.DocumentData => ({
    name: book.name,
    authorName: book.authorName,
    publicationDate: book.publicationDate,
  }),
  fromFirestore: (
    snapshot: FirebaseApi.firestore.QueryDocumentSnapshot,
    options: FirebaseApi.firestore.DocumentData
  ) => {
    const data = snapshot.data(options)!;

    // snapshot.
    return new Book({ firestoreRef: snapshot.ref, ...data });
  },
};

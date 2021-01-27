import FirebaseApi from "firebase";
import { CollectionName } from "../../../constants/collection-names";
import { FirestoreBookConverter, Book } from "../../classes/book.class";
import { FirebaseHandler } from "../firebase-handler";

export class BookCollection {
  private _firebaseHandler: FirebaseHandler;

  /**
   *
   */
  constructor(firebaseHandler: FirebaseHandler) {
    this._firebaseHandler = firebaseHandler;
  }

  private get _firestore(): FirebaseApi.firestore.Firestore {
    return this._firebaseHandler.firestore;
  }

  private get _collection() {
    return this._firestore
      .collection(CollectionName.books)
      .withConverter(FirestoreBookConverter);
  }

  // public async test() {
  //   const q = (await this._collection.doc("test").get()).data();
  //   console.log(q);

  //   console.log(q?.bookType);
  // }

  // public getBook(bookId: string): Book {}

  public async getBooks(): Promise<Book[]> {
    const snapshot = await this._collection.get();

    return snapshot.docs.map((doc) => doc.data());
  }

  // public createBook() {
  //   throw "NotImplemented";
  // }

  // public updateBook() {
  //   throw "NotImplemented";
  // }

  // public deleteBook() {
  //   throw "NotImplemented";
  // }
}

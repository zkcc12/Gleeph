import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { Book } from "../../api/classes/book.class";
import { BooksActionTypes } from "./books.types";

export interface StartLoading {
  type: BooksActionTypes.START_LOADING;
}

export interface AddBook {
  type: BooksActionTypes.ADD_QUESTION;
  book: Book;
}

export interface SetBooks {
  type: BooksActionTypes.SET_QUESTIONS;
  books: Book[];
}

// Union Action Types
export type BookAction = StartLoading | AddBook | SetBooks;

// Async Actions
export class BooksActions {
  public static startLoading = (): StartLoading => ({
    type: BooksActionTypes.START_LOADING,
  });

  public static setBooks = (books: Book[]): SetBooks => ({
    type: BooksActionTypes.SET_QUESTIONS,
    books,
  });
}

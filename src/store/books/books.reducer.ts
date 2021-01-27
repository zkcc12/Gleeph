import { BookAction } from "./books.actions";
import { BooksState, defaultBooksState, BooksActionTypes } from "./books.types";
// States' definition

export const booksReducer = (
  booksState: BooksState = defaultBooksState,
  action: BookAction
): BooksState => {
  switch (action.type) {
    case BooksActionTypes.START_LOADING: {
      return {
        ...booksState,
        loading: true,
      };
    }
    case BooksActionTypes.ADD_QUESTION: {
      return {
        ...booksState,
        books: booksState.books.concat(action.book),
        loading: false,
      };
    }

    case BooksActionTypes.SET_QUESTIONS: {
      return {
        books: [...action.books],
        loading: false,
      };
    }
    default:
      return booksState;
  }
};

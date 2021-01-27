import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { PartydrinkThunkAction, RootState } from "..";
import firebaseHandler from "../../api/firebase/firebase-handler";
import { SetQuestions, QuestionsActions } from "./books.actions";

export class QuestionsThunks {
  public static loadAllQuestions = (): PartydrinkThunkAction => {
    return async (dispatch) => {
      dispatch(QuestionsActions.startLoading());

      const questions = await firebaseHandler.questionCollection.getQuestions();

      dispatch(QuestionsActions.setQuestions(questions));
    };
  };
}

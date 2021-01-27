// Use `enum`s for better autocompletion of action type names. These will
// be compiled away leaving only the final value in your compiled code.
//
// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention

import { Question } from "../../api/classes/question.class";

// of Redux's `@@INIT` action.
export enum QuestionsActionTypes {
  START_LOADING = "@@partydrink/questions/START_LOADING",
  ADD_QUESTION = "@@partydrink/questions/ADD_QUESTION",
  SET_QUESTIONS = "@@partydrink/questions/SET_QUESTIONS",
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface QuestionsState {
  readonly questions: Question[];
  readonly loading: boolean;
}

export const defaultQuestionsState: QuestionsState = {
  questions: [],
  loading: false,
};

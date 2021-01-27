import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
    Action,
  } from "redux";
  
  import thunk, { ThunkAction } from "redux-thunk";
  import { FeedbackAction } from "./feedbacks/feedbacks.actions";
  
  import { feedbacksReducer } from "./feedbacks/feedbacks.reducer";
  import { FeedbacksState } from "./feedbacks/feedbacks.types";
  import { OfflineGameAction } from "./offline-game/offline-game.actions";
  import { offlineGamesReducer } from "./offline-game/offline-game.reducer";
  import { OfflineGameState } from "./offline-game/offline-game.types";
  import { QuestionTypeAction } from "./question-types/question-types.actions";
  import { questionTypesReducer } from "./question-types/question-types.reducer";
  import { QuestionTypesState } from "./question-types/question-types.types";
  import { QuestionAction } from "./questions/questions.actions";
  import { questionsReducer } from "./questions/questions.reducer";
  import { QuestionsState } from "./questions/questions.types";
  
  declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export interface RootState {
    // userState: UserState;
    feedbacksState: FeedbacksState;
    questionsState: QuestionsState;
    questionTypesState: QuestionTypesState;
    offlineGameState: OfflineGameState;
  }
  
  export type PartydrinkAction =
    | FeedbackAction
    | QuestionAction
    | QuestionTypeAction
    | OfflineGameAction;
  
  export type PartydrinkThunkAction = ThunkAction<
    void,
    RootState,
    unknown,
    PartydrinkAction
  >;
  
  const rootReducer = combineReducers<RootState>({
    // userState: userReducer,
    feedbacksState: feedbacksReducer,
    questionsState: questionsReducer,
    questionTypesState: questionTypesReducer,
    offlineGameState: offlineGamesReducer,
  });
  
  export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  
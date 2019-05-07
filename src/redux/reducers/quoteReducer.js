import {
    QUOTES_LOADING,
    QUOTES_SUCCESS,
    QUOTES_FAILED,
    QUOTES_CLEAR
} from "../constants/Quotes";

const initialState = {
    quotes: {
        loading: false,
        data: null,
        error: null
    }
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case QUOTES_LOADING:
        return {
          ...state,
            quotes: {
                ...state.quotes,
            loading: true
          }
        };

        case QUOTES_SUCCESS:
        return {
          ...state,
            quotes: {
                ...state.quotes,
            loading: false,
            data: action.result.data
          }
        };

        case QUOTES_FAILED:
        return {
          ...state,
            quotes: {
                ...state.quotes,
            loading: false,
            error: action.error
          }
        };

        case QUOTES_CLEAR:
            return { ...state, quotes: initialState.quotes };

      default:
        return state;
    }
}

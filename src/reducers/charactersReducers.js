import {
    FETCH_CHAR_START,
    FETCH_CHAR_SUCCESS,
    FETCH_CHAR_FAILURE,
} from '../actions';

//create initialState

const initialState = {
    characters: [],
    isFetching: false,
    error: ''
}

export  const charactersReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHAR_START:
            return {
                ...state,
                isFetching: true,
                error: ''

            }
        case FETCH_CHAR_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                characters: action.payload
            }
        case FETCH_CHAR_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        default:
            return state
    }
}
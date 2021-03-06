import {
    FETCH_CHARACTERS_START,
    FETCH_CHARACTERS_SUCCESS,
    FETCH_CHARACTERS_FAILURE,
} from '../actions';

//create initialState

const initialState = {
    character: [],
    isFetching: false,
    error: ''
}

export  const charactersReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS_START:
            return {
                ...state,
                isFetching: true,
                error: ''

            }
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                characters: action.payload
            }
        case FETCH_CHARACTERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        default:
            return state
    }
}
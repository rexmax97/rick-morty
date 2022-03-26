import {
    FETCH_CHARACTER_START,
    FETCH_CHARACTER_SUCCESS,
    FETCH_CHARACTER_FAILURE,
} from '../actions';

//create initialState

const initialState = {
    character: [],
    isFetching: false,
    error: ''
}

export  const characterReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTER_START:
            return {
                ...state,
                isFetching: true,
                error: ''

            }
        case FETCH_CHARACTER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                character: action.payload
            }
        case FETCH_CHARACTER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        default:
            return state
    }
}
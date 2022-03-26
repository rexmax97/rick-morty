import {
    FETCH_EPISODES_START,
    FETCH_EPISODES_SUCCESS,
    FETCH_EPISODES_FAILURE
} from '../actions';


//create initialState

const initialState = {
    episodes: [],
    isFetching: false,
    error: ''
}

export const episodesReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EPISODES_START:
            return {
                ...state,
                isFetching: true,
                error: ''

            }
        case FETCH_EPISODES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                episodes: action.payload
            }
        case FETCH_EPISODES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        default:
            return state
    }
}
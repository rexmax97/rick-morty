import {
    FETCH_EPISODE_START,
    FETCH_EPISODE_SUCCESS,
    FETCH_EPISODE_FAILURE
} from '../actions';


//create initialState

const initialState = {
    episodes: [],
    isFetching: false,
    error: ''
}

export const episodesReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EPISODE_START:
            return {
                ...state,
                isFetching: true,
                error: ''

            }
        case FETCH_EPISODE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                episodes: action.payload
            }
        case FETCH_EPISODE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }

        default:
            return state
    }
}
import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
})
/* 
export const setAuthToken = token => {
    if (token) {
        instance.defaults.headers.Authorization = `Bearer ${token}`
    } else {
        delete instance.defaults.headers.common['Authorization']
    }
} */
//three types start, success, failure

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';
export const FETCH_CHARACTERS_FAILURE = 'FETCH_CHARACTERS_FAILURE';

export const  characters =    () => async (dispatch) => {
        dispatch({type:FETCH_CHARACTERS_START})
        await instance
            .get('/character/?page=1')
            .then(res => dispatch({type:FETCH_CHARACTERS_SUCCESS,payload:res.data.results}))
            .catch(err => dispatch({type:FETCH_CHARACTERS_FAILURE,payload:err.response.data}))
    };

export const FETCH_CHARACTER_START = 'FETCH_CHARACTER_START';
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const FETCH_CHARACTER_FAILURE = 'FETCH_CHARACTER_FAILURE';


export const  character =  (id,params) => async (dispatch) => {
    dispatch({type:FETCH_CHARACTER_START})
    await instance
        .get(`/character/${id}`)
        .then(res => {console.log(res);dispatch({type:FETCH_CHARACTER_SUCCESS,payload:res.data})})
        .catch(err => dispatch({type:FETCH_CHARACTER_FAILURE,payload:err.response.data}))
};


export const FETCH_EPISODES_START = 'FETCH_EPISODES_START';
export const FETCH_EPISODES_SUCCESS = 'FETCH_EPISODES_SUCCESS';
export const FETCH_EPISODES_FAILURE = 'FETCH_EPISODES_FAILURE';

export const  episodes =  () => async (dispatch) => {
    dispatch({type:FETCH_EPISODES_START})
    await  instance
        .get('/episode/?page=1')
        .then(res => dispatch({type:FETCH_EPISODES_SUCCESS,payload:res.data.results}))
        .catch(err => dispatch({type:FETCH_EPISODES_FAILURE,payload:err.response.data}))
}; 


export const FETCH_EPISODE_START = 'FETCH_EPISODE_START';
export const FETCH_EPISODE_SUCCESS = 'FETCH_EPISODE_SUCCESS';
export const FETCH_EPISODE_FAILURE = 'FETCH_EPISODE_FAILURE';

export const episode= (id,params) => async (dispatch) => {
    dispatch({type:FETCH_EPISODE_START})
    await  instance
        .get(`/episode/${id}`)
        .then(res => dispatch({type:FETCH_EPISODE_SUCCESS,payload:res}))
        .catch(err => dispatch({type:FETCH_EPISODE_FAILURE,payload:err.response.data}))
};
export const locations=  params => instance.get('/location', params);
export const location=  (id,params) => instance.get(`/location/${id}`, params);

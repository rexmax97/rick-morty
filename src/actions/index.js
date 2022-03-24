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
export const FETCH_CHAR_START = 'FETCH_CHAR_START';
export const FETCH_CHAR_SUCCESS = 'FETCH_CHAR_SUCCESS';
export const FETCH_CHAR_FAILURE = 'FETCH_CHAR_FAILURE';

export const FETCH_EPISODE_START = 'FETCH_EPISODE_START';
export const FETCH_EPISODE_SUCCESS = 'FETCH_EPISODE_SUCCESS';
export const FETCH_EPISODE_FAILURE = 'FETCH_EPISODE_FAILURE';


export const  characters =    () => async (dispatch) => {
        dispatch({type:FETCH_CHAR_START})
        await instance
            .get('/character/?page=1')
            .then(res => dispatch({type:FETCH_CHAR_SUCCESS,payload:res.data.results}))
            .catch(err => dispatch({type:FETCH_CHAR_FAILURE,payload:err.response.data}))
    };
export const  character =  (id,params) => instance.get(`/character/${id}`, params);
export const  episodes =  () => async (dispatch) => {
    dispatch({type:FETCH_EPISODE_START})
    await  instance
        .get('/episode/?page=1')
        .then(res => dispatch({type:FETCH_EPISODE_SUCCESS,payload:res.data.results}))
        .catch(err => dispatch({type:FETCH_EPISODE_FAILURE,payload:err.response.data}))
}; 
export const episode= (id,params) => instance.get(`/episode/${id}`, params);
export const locations=  params => instance.get('/location', params);
export const location=  (id,params) => instance.get(`/location/${id}`, params);

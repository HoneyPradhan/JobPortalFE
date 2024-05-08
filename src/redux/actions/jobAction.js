// import axios from 'axios';
// import {  JOB_LOAD_REQUEST, JOB_LOAD_SUCCESS, JOB_LOAD_FAIL,JOB_LOAD_SINGLE_FAIL,JOB_LOAD_SINGLE_SUCCESS,JOB_LOAD_SINGLE_REQUEST} from "../constants/jobconstant"

// export const jobLoadAction =(pageNumber,keyword='',cat='',location='')=>async(dispatch)=>{

//     dispatch({type:JOB_LOAD_REQUEST})

//     try {

//         const { data } = await axios.get(`https://thejobportal-2.onrender.com/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`)
//         dispatch({
//             type:JOB_LOAD_SUCCESS,
//             payload:data
//         })
        
//     } catch (error) {

//         dispatch({
//             type: JOB_LOAD_FAIL,
//             payload: error.response.data.error
//         })   
//     }
// }
// //single job load action
// export const jobLoadSingleAction = (id) => async (dispatch) => {
//     dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
//     try {
//         const { data } = await axios.get(`https://thejobportal-2.onrender.com/api/job/${id}`);
//         dispatch({
//             type: JOB_LOAD_SINGLE_SUCCESS,
//             payload: data
//         });
//     } catch (error) {
//         dispatch({
//             type: JOB_LOAD_SINGLE_FAIL,
//             payload: error.response.data.error
//         });
//     }
// }

import axios from 'axios';
import { toast } from 'react-toastify'
import {
    DELETE_JOB_FAIL,
    DELETE_JOB_REQUEST,
    DELETE_JOB_SUCCESS,
    EDIT_JOB_FAIL,
    EDIT_JOB_REQUEST,
    EDIT_JOB_SUCCESS,
    JOB_LOAD_FAIL,
    JOB_LOAD_REQUEST,
    JOB_LOAD_SINGLE_FAIL,
    JOB_LOAD_SINGLE_REQUEST,
    JOB_LOAD_SINGLE_SUCCESS,
    JOB_LOAD_SUCCESS,
    REGISTER_JOB_FAIL,
    REGISTER_JOB_REQUEST,
    REGISTER_JOB_SUCCESS
} from "../constants/jobconstant"


// export const jobLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
//     dispatch({ type: JOB_LOAD_REQUEST });
//     try {
//         const { data } = await axios.get(`https://thejobportal-5.onrender.com/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`)
//         dispatch({
//             type: JOB_LOAD_SUCCESS,
//             payload: data
//         });
//     } catch (error) {
//         dispatch({
//             type: JOB_LOAD_FAIL,
//             payload: error.response.data.error
//         });
//     }
// }
export const jobLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });

    const queryParams = new URLSearchParams({
        pageNumber: pageNumber,
        keyword: keyword,
        cat: cat,
        location: location
    }).toString();

    try {
        const response = await fetch(`https://thejobportal-11.onrender.com/api/jobs/show/?${queryParams}`);
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error);
        }

        const data = await response.json();
        dispatch({
            type: JOB_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.message
        });
    }
};


// // single job action
// export const jobLoadSingleAction = (id) => async (dispatch) => {
//     dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
//     try {
//         const { data } = await axios.get(`https://thejobportal-5.onrender.com/api/job/${id}`);
//         dispatch({
//             type: JOB_LOAD_SINGLE_SUCCESS,
//             payload: data
//         });
//     } catch (error) {
//         dispatch({
//             type: JOB_LOAD_SINGLE_FAIL,
//             payload: error.response.data.error
//         });
//     }
// }


// //delete single job action
// export const deleteSingleJobAction = (job_id) => async (dispatch) => {
//     dispatch({ type: DELETE_JOB_REQUEST });
//     try {
//         const { data } = await axios.delete(`https://thejobportal-5.onrender.com/api/job/delete/${job_id}`);
//         dispatch({
//             type: DELETE_JOB_SUCCESS,
//             payload: data
//         });
//         toast.success("Job deleted successfully");
//     } catch (error) {
//         dispatch({
//             type: DELETE_JOB_FAIL,
//             payload: error.response.data.error
//         });
//         toast.error(error.response.data.error);
//     }
// }


// //edit single job action
// export const editSingleJobAction = (job) => async (dispatch) => {
//     dispatch({ type: EDIT_JOB_REQUEST });
//     try {
//         const { data } = await axios.put(`https://thejobportal-5.onrender.com/api/job/update/${job._id}`, job);
//         dispatch({
//             type: EDIT_JOB_SUCCESS,
//             payload: data
//         });
//         toast.success("Job updated successfully");
//     } catch (error) {
//         dispatch({
//             type: EDIT_JOB_FAIL,
//             payload: error.response.data.error
//         });
//         toast.error(error.response.data.error);
//     }
// }

// // register job action
// export const registerAjobAction = (job) => async (dispatch) => {
//     dispatch({ type: REGISTER_JOB_REQUEST })

//     try {
//         const { data } = await axios.post("https://thejobportal-5.onrender.com/api/job/create", job)
//         dispatch({
//             type: REGISTER_JOB_SUCCESS,
//             payload: data
//         })
//         toast.success("Job created successfully");

//     } catch (error) {
//         dispatch({
//             type: REGISTER_JOB_FAIL,
//             payload: error.response.data.error
//         })
//         toast.error(error.response.data.error);
//     }
// }


export const jobLoadSingleAction = (id) => async (dispatch) => {
    dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
    try {
        const response = await fetch(`https://thejobportal-11.onrender.com/api/job/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch job with id ${id}`);
        }
        const data = await response.json();
        dispatch({
            type: JOB_LOAD_SINGLE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_LOAD_SINGLE_FAIL,
            payload: error.message
        });
    }
};

// Delete single job action
export const deleteSingleJobAction = (job_id) => async (dispatch) => {
    dispatch({ type: DELETE_JOB_REQUEST });
    try {
        const response = await fetch(`https://thejobportal-11.onrender.com/api/job/delete/${job_id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete job');
        }
        const data = await response.json();
        dispatch({
            type: DELETE_JOB_SUCCESS,
            payload: data
        });
        toast.success("Job deleted successfully");
    } catch (error) {
        dispatch({
            type: DELETE_JOB_FAIL,
            payload: error.message
        });
        toast.error(error.message);
    }
};

// Edit single job action
export const editSingleJobAction = (job) => async (dispatch) => {
    dispatch({ type: EDIT_JOB_REQUEST });
    try {
        const response = await fetch(`https://thejobportal-11.onrender.com/api/job/update/${job._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        });
        if (!response.ok) {
            throw new Error('Failed to update job');
        }
        const data = await response.json();
        dispatch({
            type: EDIT_JOB_SUCCESS,
            payload: data
        });
        toast.success("Job updated successfully");
    } catch (error) {
        dispatch({
            type: EDIT_JOB_FAIL,
            payload: error.message
        });
        toast.error(error.message);
    }
};

// Register job action
export const registerAjobAction = (job) => async (dispatch) => {
    dispatch({ type: REGISTER_JOB_REQUEST });
    try {
        const response = await fetch("https://thejobportal-11.onrender.com/api/job/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(job)
        });
        if (!response.ok) {
            throw new Error('Failed to register job');
        }
        const data = await response.json();
        dispatch({
            type: REGISTER_JOB_SUCCESS,
            payload: data
        });
        toast.success("Job created successfully");
    } catch (error) {
        dispatch({
            type: REGISTER_JOB_FAIL,
            payload: error.message
        });
        toast.error(error.message);
    }
};
// import axios from 'axios';
// import { JOB_TYPE_LOAD_REQUEST,JOB_TYPE_LOAD_SUCCESS,JOB_TYPE_LOAD_FAIL,CREATE_JOB_TYPE_FAIL,
//     CREATE_JOB_TYPE_REQUEST,
//     CREATE_JOB_TYPE_SUCCESS,} from '../constants/jobTypeConstant';


// export const jobTypeLoadAction =()=>async(dispatch)=>{

//     dispatch({type:JOB_TYPE_LOAD_REQUEST})

//     try {

//         const { data } = await axios.get('https://thejobportal-2-uee0.onrender.com/api/type/jobs')
//         dispatch({
//             type:JOB_TYPE_LOAD_SUCCESS,
//             payload:data
//         })
        
//     } catch (error) {

//         dispatch({
//             type: JOB_TYPE_LOAD_FAIL,
//             payload: error.response.data.error
//         })

        


        
//     }


// }
// export const createJobTypeAction = (jobtype) => async (dispatch) => {
//     dispatch({ type: CREATE_JOB_TYPE_REQUEST })

//     try {
//         const { data } = await axios.post("https://thejobportal-2-uee0.onrender.com/api/type/create", jobtype)
//         dispatch({
//             type: CREATE_JOB_TYPE_SUCCESS,
//             payload: data
//         })
//         toast.success("Job type created successfully");


//     } catch (error) {
//         dispatch({
//             type: CREATE_JOB_TYPE_FAIL,
//             payload: error.response.data.error
//         })
//         toast.error(error.response.data.error);

//     }
// }
// import axios from 'axios';
import { toast } from 'react-toastify';
import {
    CREATE_JOB_TYPE_FAIL,
    CREATE_JOB_TYPE_REQUEST,
    CREATE_JOB_TYPE_SUCCESS,
    JOB_TYPE_LOAD_FAIL,
    JOB_TYPE_LOAD_REQUEST,
    JOB_TYPE_LOAD_SUCCESS
} from '../constants/jobTypeConstant';


// load jobs type
// export const jobTypeLoadAction = () => async (dispatch) => {
//     dispatch({ type: JOB_TYPE_LOAD_REQUEST });
//     try {
//         const { data } = await axios.get('https://thejobportal-5.onrender.com/api/type/jobs');
//         dispatch({
//             type: JOB_TYPE_LOAD_SUCCESS,
//             payload: data
//         });
//     } catch (error) {
//         dispatch({
//             type: JOB_TYPE_LOAD_FAIL,
//             payload: error.response.data.error
//         });
//     }
// }

export const jobTypeLoadAction = () => async (dispatch) => {
    dispatch({ type: JOB_TYPE_LOAD_REQUEST });
    try {
        const response = await fetch('https://thejobportal-11.onrender.com/api/type/jobs');
        const data = await response.json();
        dispatch({
            type: JOB_TYPE_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: JOB_TYPE_LOAD_FAIL,
            payload: error.message
        });
    }
}


// create jobs category
// export const createJobTypeAction = (jobtype) => async (dispatch) => {
//     dispatch({ type: CREATE_JOB_TYPE_REQUEST })

//     try {
//         const { data } = await axios.post("https://thejobportal-5.onrender.com/api/type/create", jobtype)
//         dispatch({
//             type: CREATE_JOB_TYPE_SUCCESS,
//             payload: data
//         })
//         toast.success("Job type created successfully");


//     } catch (error) {
//         dispatch({
//             type: CREATE_JOB_TYPE_FAIL,
//             payload: error.response.data.error
//         })
//         toast.error(error.response.data.error);

//     }
// }

export const createJobTypeAction = (jobtype) => async (dispatch) => {
    dispatch({ type: CREATE_JOB_TYPE_REQUEST });

    try {
        const response = await fetch("https://thejobportal-11.onrender.com/api/type/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jobtype)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error);
        }

        const data = await response.json();
        dispatch({
            type: CREATE_JOB_TYPE_SUCCESS,
            payload: data
        });
        toast.success("Job type created successfully");
    } catch (error) {
        dispatch({
            type: CREATE_JOB_TYPE_FAIL,
            payload: error.message
        });
        toast.error(error.message);
    }
};

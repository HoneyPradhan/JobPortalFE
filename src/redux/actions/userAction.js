// import axios from 'axios';
// import { toast } from "react-toastify"
// import { USER_SIGN_IN_REQUEST,
//     USER_SIGN_IN_SUCCESS,
//     USER_SIGN_IN_FAIL,
//     USER_LOGOUT_REQUEST, 
//     USER_LOGOUT_SUCCESS, 
//     USER_LOGOUT_FAIL, 
//     USER_LOAD_FAIL,
//     USER_LOAD_SUCCESS,
//     USER_LOAD_REQUEST, 
//     USER_APPLY_JOB_REQUEST,
//     USER_APPLY_JOB_SUCCESS,
//     USER_APPLY_JOB_FAIL,
//     ALL_USER_LOAD_REQUEST,
//     ALL_USER_LOAD_SUCCESS,
//     ALL_USER_LOAD_FAIL} from '../constants/userConstant';

// export const userSignInAction =(user)=>async(dispatch)=>{

//     dispatch({type:USER_SIGN_IN_REQUEST})

//     try {

//         const { data } = await axios.post("https://thejobportal-2.onrender.com/api/sign_in",user)
//         localStorage.setItem('userInfo',JSON.stringify(data))
//         dispatch({
//             type:USER_SIGN_IN_SUCCESS,
//             payload:data
//         })
//         toast.success("Login Successfully!")
         
//     } catch (error) {

//         dispatch({
//             type: USER_SIGN_IN_FAIL,
//             payload: error.response.data.error
//         })
//         toast.error(error.response.data.error)
//     }
// }

// export const userLogoutAction = () => async (dispatch) => {
//     dispatch({ type: USER_LOGOUT_REQUEST });
//     try {
//         const { data } = await axios.get("https://thejobportal-2.onrender.com/api/logout");
//         localStorage.removeItem('userInfo');
//         dispatch({
//             type: USER_LOGOUT_SUCCESS,
//             payload: data
//         });
//         toast.success("Log out successfully!");
//     } catch (error) {
//         dispatch({
//             type: USER_LOGOUT_FAIL,
//             payload: error.response.data.error
//         });
//         toast.error(error.response.data.error);
//     }
// }

// //user profile action
// export const userProfileAction = () => async (dispatch) => {
//     dispatch({ type: USER_LOAD_REQUEST });
//     try {
//         const { data } = await axios.get("https://thejobportal-2.onrender.com/api/me");
        
//         dispatch({
//             type: USER_LOAD_SUCCESS,
//             payload: data
//         });
      
//     } catch (error) {
//         dispatch({
//             type: USER_LOAD_FAIL,
//             payload: error.response.data.error
//         });
       
//     }
// }

// // user job apply action
// //user job apply action
// export const userApplyJobAction = (job) => async (dispatch) => {
//     dispatch({ type: USER_APPLY_JOB_REQUEST });
//     try {
//         const { data } = await axios.post("https://thejobportal-2.onrender.com/api/user/jobhistory", job);

//         dispatch({
//             type: USER_APPLY_JOB_SUCCESS,
//             payload: data
//         });
//         toast.success("Apply Successfully for this Job!");
//     } catch (error) {
//         dispatch({
//             type: USER_APPLY_JOB_FAIL,
//             payload: error.response.data.error
//         });
//         toast.error(error.response.data.error);
//     }
// }

// //all user action
// export const allUserAction = () => async (dispatch) => {
//     dispatch({ type: ALL_USER_LOAD_REQUEST });
//     try {
//         const { data } = await axios.get("https://thejobportal-2.onrender.com/api/allUsers");
//         dispatch({
//             type: ALL_USER_LOAD_SUCCESS,
//             payload: data
//         });

//     } catch (error) {
//         dispatch({
//             type: ALL_USER_LOAD_FAIL,
//             payload: error.response.data.error
//         });
//     }
// }
// import axios from 'axios';
// import { toast } from "react-toastify";
// import {
//     ALL_USER_LOAD_FAIL,
//     ALL_USER_LOAD_REQUEST,
//     ALL_USER_LOAD_SUCCESS,
//     USER_APPLY_JOB_FAIL,
//     USER_APPLY_JOB_REQUEST,
//     USER_APPLY_JOB_SUCCESS,
//     USER_LOAD_FAIL,
//     USER_LOAD_REQUEST,
//     USER_LOAD_SUCCESS,
//     USER_LOGOUT_FAIL,
//     USER_LOGOUT_REQUEST,
//     USER_LOGOUT_SUCCESS,
//     USER_SIGN_IN_FAIL,
//     USER_SIGN_IN_REQUEST,
//     USER_SIGN_IN_SUCCESS,
//     USER_SIGNUP_FAIL,
//     USER_SIGNUP_REQUEST,
//     USER_SIGNUP_SUCCESS
// } from '../constants/userConstant';



// export const userSignInAction = (user) => async (dispatch) => {
//     dispatch({ type: USER_SIGN_IN_REQUEST });
//     try {
//         const { data } = await axios.post("https://thejobportal-4.onrender.com/api/sign_in", user);
//         localStorage.setItem('userInfo', JSON.stringify(data));
//         dispatch({
//             type: USER_SIGN_IN_SUCCESS,
//             payload: data
//         });
//         toast.success("Login Successfully!");
//     } catch (error) {
//         dispatch({
//             type: USER_SIGN_IN_FAIL,
//             payload: error.response.data.error
//         });
//         toast.error(error.response.data.error);
//     }
// }

// // user sign up action
// export const userSignUpAction = (user) => async (dispatch) => {
//     dispatch({ type: USER_SIGNUP_REQUEST });
//     try {
//         const { data } = await axios.post("https://thejobportal-4.onrender.com/api/signup", user);

//         dispatch({
//             type: USER_SIGNUP_SUCCESS,
//             payload: data
//         });
//         toast.success("Register Successfully!");
//     } catch (error) {
//         dispatch({
//             type: USER_SIGNUP_FAIL,
//             payload: error.response.data.error
//         });
//         toast.error(error.response.data.error);
//     }
// }

// //log out action
// export const userLogoutAction = () => async (dispatch) => {
//     dispatch({ type: USER_LOGOUT_REQUEST });
//     try {
//         localStorage.removeItem('userInfo');
//         const { data } = await axios.get("https://thejobportal-4.onrender.com/api/logout");
//         dispatch({
//             type: USER_LOGOUT_SUCCESS,
//             payload: data
//         });
//         toast.success("Log out successfully!");
//     } catch (error) {
//         dispatch({
//             type: USER_LOGOUT_FAIL,
//             payload: error.response.data.error
//         });
//         toast.error(error.response.data.error);
//     }
// }


// //user profile action
// export const userProfileAction = () => async (dispatch) => {
//     dispatch({ type: USER_LOAD_REQUEST });
//     try {
//         const { data } = await axios.get("https://thejobportal-4.onrender.com/api/me");
//         dispatch({
//             type: USER_LOAD_SUCCESS,
//             payload: data
//         });

//     } catch (error) {
//         dispatch({
//             type: USER_LOAD_FAIL,
//             payload: error.response.data.error
//         });
//     }
// }


// //all user action
// export const allUserAction = () => async (dispatch) => {
//     dispatch({ type: ALL_USER_LOAD_REQUEST });
//     try {
//         const { data } = await axios.get("https://thejobportal-4.onrender.com/api/allusers");
//         dispatch({
//             type: ALL_USER_LOAD_SUCCESS,
//             payload: data
//         });

//     } catch (error) {
//         dispatch({
//             type: ALL_USER_LOAD_FAIL,
//             payload: error.response.data.error
//         });
//     }
// }

// //user job apply action
// export const userApplyJobAction = (job) => async (dispatch) => {
//     dispatch({ type: USER_APPLY_JOB_REQUEST });
//     try {
//         const { data } = await axios.post("https://thejobportal-4.onrender.com/api/user/jobhistory", job);

//         dispatch({
//             type: USER_APPLY_JOB_SUCCESS,
//             payload: data
//         });
//         toast.success("Applied Successfully for this Job!");
//     } catch (error) {
//         dispatch({
//             type: USER_APPLY_JOB_FAIL,
//             payload: error.response.data.error
//         });
//         toast.error(error.response.data.error);
//     }
// }

import axios from 'axios';
import { toast } from "react-toastify";
import {
    ALL_USER_LOAD_FAIL,
    ALL_USER_LOAD_REQUEST,
    ALL_USER_LOAD_SUCCESS,
    USER_APPLY_JOB_FAIL,
    USER_APPLY_JOB_REQUEST,
    USER_APPLY_JOB_SUCCESS,
    USER_LOAD_FAIL,
    USER_LOAD_REQUEST,
    USER_LOAD_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_SIGN_IN_FAIL,
    USER_SIGN_IN_REQUEST,
    USER_SIGN_IN_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS
} from '../constants/userConstant';

// Action to sign in user
export const userSignInAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGN_IN_REQUEST });
    try {
        const response = await axios.post("https://thejobportal-11.onrender.com/api/sign_in", user);
        const data = response.data;
        localStorage.setItem('userInfo', JSON.stringify(data));
        dispatch({ type: USER_SIGN_IN_SUCCESS, payload: data });
        toast.success("Login Successful!");
    } catch (error) {
        const errorMessage = error.response?.data?.error || 'An error occurred while signing in';
        dispatch({ type: USER_SIGN_IN_FAIL, payload: errorMessage });
        toast.error(errorMessage);
    }
}

// Action to sign up user
export const userSignUpAction = (user) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST });
    try {
        const response = await axios.post("https://thejobportal-11.onrender.com/api/signup", user);
        const data = response.data;
        dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
        toast.success("Registration Successful!");
    } catch (error) {
        const errorMessage = error.response?.data?.error || 'An error occurred while signing up';
        dispatch({ type: USER_SIGNUP_FAIL, payload: errorMessage });
        toast.error(errorMessage);
    }
}

// Action to log out user
export const userLogoutAction = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT_REQUEST });
    try {
        localStorage.removeItem('userInfo');
        await axios.get("https://thejobportal-11.onrender.com/api/logout");
        dispatch({ type: USER_LOGOUT_SUCCESS });
        toast.success("Logged out successfully!");
    } catch (error) {
        const errorMessage = error.response?.data?.error || 'An error occurred while logging out';
        dispatch({ type: USER_LOGOUT_FAIL, payload: errorMessage });
        toast.error(errorMessage);
    }
}

export const userProfileAction = () => async (dispatch) => {
    dispatch({ type: USER_LOAD_REQUEST });
    try {
        const response = await fetch("https://thejobportal-11.onrender.com/api/me");
        if (!response.ok) {
            throw new Error('Failed to fetch user profile');
        }
        const data = await response.json();
        dispatch({ type: USER_LOAD_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage = 'An error occurred while fetching user profile: ' + error.message;
        dispatch({ type: USER_LOAD_FAIL, payload: errorMessage });
    }
};

// Action to fetch user profile
// export const userProfileAction = () => async (dispatch) => {
//     dispatch({ type: USER_LOAD_REQUEST });
//     try {
//         const response = await axios.get("https://thejobportal-5.onrender.com/api/me");
//         const data = response.data;
//         dispatch({ type: USER_LOAD_SUCCESS, payload: data });
//     } catch (error) {
//         const errorMessage = error.response?.data?.error || 'An error occurred while fetching user profile';
//         dispatch({ type: USER_LOAD_FAIL, payload: errorMessage });
//     }


// }

export const allUserAction = () => async (dispatch) => {
    dispatch({ type: ALL_USER_LOAD_REQUEST });
    try {
        const response = await fetch("https://thejobportal-11.onrender.com/api/allUsers");
        
        if (!response.ok) {
            throw new Error('Failed to fetch all users');
        }
        const data = await response.json();
        dispatch({ type: ALL_USER_LOAD_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage = error.message || 'An error occurred while fetching all users';
        dispatch({ type: ALL_USER_LOAD_FAIL, payload: errorMessage });
    }
}


// Action to fetch all users
// export const allUserAction = () => async (dispatch) => {
//     dispatch({ type: ALL_USER_LOAD_REQUEST });
//     try {
//         const response = await axios.get("https://thejobportal-5.onrender.com/api/allusers");
//         const data = response.data;
//         dispatch({ type: ALL_USER_LOAD_SUCCESS, payload: data });
//     } catch (error) {
//         const errorMessage = error.response?.data?.error || 'An error occurred while fetching all users';
//         dispatch({ type: ALL_USER_LOAD_FAIL, payload: errorMessage });
//     }
// }

// Action to apply for a job
// export const userApplyJobAction = (job) => async (dispatch) => {
//     dispatch({ type: USER_APPLY_JOB_REQUEST });
//     try {
//         const response = await axios.post("https://thejobportal-5.onrender.com/api/user/jobhistory", job);
//         const data = response.data;
//         dispatch({ type: USER_APPLY_JOB_SUCCESS, payload: data });
//         toast.success("Applied for the job successfully!");
//     } catch (error) {
//         const errorMessage = error.response?.data?.error || 'An error occurred while applying for the job';
//         dispatch({ type: USER_APPLY_JOB_FAIL, payload: errorMessage });
//         toast.error(errorMessage);
//     }
// }
export const userApplyJobAction = (job) => async (dispatch) => {
    dispatch({ type: USER_APPLY_JOB_REQUEST });
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(job)
        };
        const response = await fetch("https://thejobportal-11.onrender.com/api/user/jobhistory", requestOptions);
        const data = await response.json();
        dispatch({ type: USER_APPLY_JOB_SUCCESS, payload: data });
        toast.success("Applied for the job successfully!");
    } catch (error) {
        const errorMessage = error.message || 'An error occurred while applying for the job';
        dispatch({ type: USER_APPLY_JOB_FAIL, payload: errorMessage });
        toast.error(errorMessage);
    }
}


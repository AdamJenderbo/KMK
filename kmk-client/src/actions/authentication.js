import { AccessToken } from 'react-native-fbsdk-next';
import { apiPost } from './net';

export const SET_USER = "SET_USER";

export function login() {
    return async (dispatch) => {
        AccessToken.getCurrentAccessToken().then(async (data) => { 
            if(data.accessToken) {
                
                const user = await apiPost("user/login", {accessToken: data.accessToken});

                dispatch({type: SET_USER, payload: user});
            }
        });
    }
}
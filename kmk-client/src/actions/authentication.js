import { AccessToken } from 'react-native-fbsdk-next';
import { apiPost } from './net';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LOGGED_IN = "LOGGED_IN";
export const LOGGGED_OUT = "LOGGED_OUT";
export const LOADED_USER = "LOADED_USER";

export function login() {
    return async (dispatch) => {
        AccessToken.getCurrentAccessToken().then(async (data) => { 
            if(data.accessToken) {
                
                const response = await apiPost("user/login", {accessToken: data.accessToken});

                if(!response.isSuccess) {
                    logout();
                    return;
                }

                await AsyncStorage.multiSet([
                    ["token", response.token],
                    ["userId", response.userId],
                    ["userName", response.userName],
                    ["userPictureUrl", response.userPictureUrl]
                ]);

                dispatch({type: LOGGED_IN, payload: response});
            }
        });
    }
}

function logout() {
    return async (dispatch) => {
        await AsyncStorage.multiSet([
            ["token", undefined],
            ["userId", undefined],
            ["userName", undefined],
            ["userPictureUrl", undefined]
        ]);

        dispatch({type: LOGGGED_OUT});
    }
}

export function loadUser() {
    return async (dispatch) => {
        const token = await AsyncStorage.getItem("token");

        if(!token) {
            return;
        }

        const userId = await AsyncStorage.getItem("userId");
        const userName = await AsyncStorage.getItem("userName");
        const userPictureUrl = await AsyncStorage.getItem("userPictureUrl");

        dispatch({type: LOADED_USER, payload: {token, userId, userName, userPictureUrl}});
    }
}
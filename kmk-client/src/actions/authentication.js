import { AccessToken, GraphRequestManager, GraphRequest } from 'react-native-fbsdk-next';

export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const SET_USER = "SET_USER";

export function onLogIn(error, data) {
    return async (dispatch) => {
        AccessToken.getCurrentAccessToken().then(async (data) => { 
            if(data.accessToken) {
                dispatch({type: SET_ACCESS_TOKEN, payload: data.accessToken});

                const response = await fetch(`https://graph.facebook.com/me?access_token=${data.accessToken}&fields=id,name,picture.type(large)`)

                const user = await response.json();

                dispatch({type: SET_USER, payload: user});
            }
        });
    }
}
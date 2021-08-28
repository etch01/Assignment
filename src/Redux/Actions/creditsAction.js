
import { Alert, I18nManager } from "react-native";
import { NetworkLayer } from "../../Network/networkLayer";
import { GET_CREDITS_REQUEST , GET_CREDITS_REQUEST_SUCCESS, GET_CREDITS_REQUEST_FAILED } from "../Types";

export const getCreditsAction = ( destination, callback) => async dispatch => {
    dispatch({
        type: GET_CREDITS_REQUEST,
    });
    callback({ loading: true })
    const API = new NetworkLayer();
    const responseJson = await API.get_request(destination)
    if (responseJson.cast) {
        dispatch({
            type: GET_CREDITS_REQUEST_SUCCESS, credits: responseJson.cast,
        });
        callback({ loading: false })

    } else {
        dispatch({
            type: GET_CREDITS_REQUEST_FAILED,
        });
        callback({ loading: false })

    }
    return responseJson
}
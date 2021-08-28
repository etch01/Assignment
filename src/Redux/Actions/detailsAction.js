
import { Alert, I18nManager } from "react-native";
import { NetworkLayer } from "../../Network/networkLayer";
import { GET_DETAILS_REQUEST , GET_DETAILS_REQUEST_SUCCESS, GET_DETAILS_REQUEST_FAILED  } from "../Types";

export const getDetailsAction = ( destination, callback) => async dispatch => {
    dispatch({
        type: GET_DETAILS_REQUEST,
    });
    callback({ loading: true })
    const API = new NetworkLayer();
    const responseJson = await API.get_request(destination)
    if (responseJson) {
        dispatch({
            type: GET_DETAILS_REQUEST_SUCCESS, details: responseJson,
        });
        callback({ loading: false })

    } else {
        dispatch({
            type: GET_DETAILS_REQUEST_FAILED,
        });
        callback({ loading: false })

    }
    return responseJson
}
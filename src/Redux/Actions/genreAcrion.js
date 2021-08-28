
import { Alert, I18nManager } from "react-native";
import { NetworkLayer } from "../../Network/networkLayer";
import { GET_GENRE_REQUEST , GET_GENRE_REQUEST_SUCCESS, GET_GENRE_REQUEST_FAILED } from "../Types";

export const getGenreAction = ( destination, callback) => async dispatch => {
    dispatch({
        type: GET_GENRE_REQUEST,
    });
    callback({ loading: true })
    const API = new NetworkLayer();
    const responseJson = await API.get_request(destination)
    if (responseJson.genres) {
        dispatch({
            type: GET_GENRE_REQUEST_SUCCESS, genreList: responseJson.genres,
        });
        callback({ loading: false })

    } else {
        dispatch({
            type: GET_GENRE_REQUEST_FAILED,
        });
        callback({ loading: false })

    }
    return responseJson
}
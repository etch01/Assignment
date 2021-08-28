
import { Alert, I18nManager } from "react-native";
import { NetworkLayer } from "../../Network/networkLayer";
import { GET_MOVIES_REQUEST , GET_MOVIES_REQUEST_SUCCESS, GET_MOVIES_REQUEST_FAILED ,PAGING_MOVIES_REQUEST } from "../Types";

export const getMoviesAction = ( destination, callback) => async dispatch => {
    dispatch({
        type: GET_MOVIES_REQUEST,
    });
    callback({ loading: true })
    const API = new NetworkLayer();
    const responseJson = await API.get_request(destination)
    if (responseJson.results) {
        dispatch({
            type: GET_MOVIES_REQUEST_SUCCESS, moviesList: responseJson?.results,
        });
        callback({ loading: false })

    } else {
        dispatch({
            type: GET_MOVIES_REQUEST_FAILED,
        });
        callback({ loading: false })

    }
    return responseJson
}

export const pagingMovieAction = ( destination, callback) => async dispatch => {
    dispatch({
        type: GET_MOVIES_REQUEST,
    });
    const API = new NetworkLayer();
    const responseJson = await API.get_request(destination)

    if (responseJson.results) {

        dispatch({
            type: PAGING_MOVIES_REQUEST, moviesList: responseJson?.results,
        });
        callback({ success: true, res: responseJson?.results})

    } else {
        dispatch({
            type: GET_MOVIES_REQUEST_FAILED,
        });
        callback({ success: false ,res: null })

    }
    return responseJson
}
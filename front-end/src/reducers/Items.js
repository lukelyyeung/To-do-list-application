import { GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from '../actions/Items';
import {LOGOUT_SUCCESS} from '../actions/Auth';
import {
    POST_ITEM_SUCCESS,
    DELETE_ITEM_SUCCESS,
    PATCH_ITEM_SUCCESS,
    MANIPULATE_ITEM_FAILURE
} from '../actions/Item';

const initialState = [];
// Reducer for items list global state
export default function ItemsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS_SUCCESS: {
            return action.items;
        }
        case GET_ITEMS_FAILURE: {
            return state;
        }
        // The event operation that affect the item list will cause fetching of updated list.
        case POST_ITEM_SUCCESS: {
            return action.items;
        }
        case PATCH_ITEM_SUCCESS: {
            return action.items;
        }
        case DELETE_ITEM_SUCCESS: {
            return action.items;
        }
        // Reutrn the current state if the event operation is failed
        case MANIPULATE_ITEM_FAILURE: {
            return state;
        }
        // Clear the store when user log out
        case LOGOUT_SUCCESS: {
            return [];
        }
        default: {
            return state;
        }
    }
}
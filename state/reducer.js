import { combineReducers } from "redux";
import * as types from "./action-types";

const initialType=null
export const mediaTypeSlice=(state = initialType,action)=>{
    switch(action.type){
        case types.MEDIA_TYPES:
            return{...state, ["mediaType"]:action.payload};
        default:
            return state
    }
}
const combinedReducer = combineReducers({
    mediaTypeSlice
})
export default combinedReducer;
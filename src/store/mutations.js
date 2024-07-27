import {
    ADDCART,
    CHANGEDELETE,
    DELETE,
    EDIT,
    PUY,
    ORDERLISTED,
    ADDADDRESS,
    EDITADDRESS,
    DELETEADDRESS
} from "./mutation-types";

export default {
    [ADDCART](state, value) { state.cartList = value; },
    [CHANGEDELETE](state) { state.isDelete = !state.isDelete; },
    [DELETE](state, value) { state.cartList = value; },
    [EDIT](state, value) {
        if (value) state.edit = true;
        else state.edit = !state.edit;
    },
    [PUY](state, value) { state.orderList = value; },
    [ORDERLISTED](state) { state.orderListEnd = state.orderListEnd.concat(state.orderList); },
    [ADDADDRESS](state, value) {
        state.userAddress.map(item => {
            if (value.isDefault) item.isDefault = false;
        })
        state.userAddress.push(value);
    },
    [EDITADDRESS](state, value) {
        state.userAddress = state.userAddress.map(item => {
            if (value.isDefault) item.isDefault = false;
            return item.id === value.id ? value : item;
        })
    },
    [DELETEADDRESS](state, value) {
        state.userAddress = state.userAddress.filter(item => {
            return !(item.id === value.id);
        })
        if (value.isDefault) state.userAddress[0].isDefault = true;
    },
}
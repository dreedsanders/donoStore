const initialState = {
    items: {},
    current_item: {},
    clicked: false,
    /** { [itemId: string]: number } quantities */
    cart: {},
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GETITEMS":
            return {
                ...state,
                items: [action.items]
            };
        case "CLICK":
            return {
                ...state,
                current_item: [action.current_item],
                clicked: true
            };
        case "CLOSECLICK":
            return {
                ...state,
                clicked: false
            }
        case "ADD_TO_CART": {
            const id = String(action.itemId);
            const prev = state.cart || {};
            return {
                ...state,
                cart: {
                    ...prev,
                    [id]: (prev[id] || 0) + 1,
                },
            };
        }
        case "REMOVE_ONE_FROM_CART": {
            const id = String(action.itemId);
            const prev = state.cart || {};
            const next = { ...prev };
            const q = (next[id] || 0) - 1;
            if (q <= 0) delete next[id];
            else next[id] = q;
            return { ...state, cart: next };
        }
        case "REMOVE_ITEM_FROM_CART": {
            const id = String(action.itemId);
            const prev = state.cart || {};
            const next = { ...prev };
            delete next[id];
            return { ...state, cart: next };
        }
        default:
            return state
    }
}
export default itemReducer
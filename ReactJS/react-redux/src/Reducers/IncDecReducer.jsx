import { INCREMENT, DECREMENT } from "../Actions/IncDecAction";

const initialState = {
    count: 0
};

const IncDecCounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
        case DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
};

export default IncDecCounterReducer;